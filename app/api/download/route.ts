import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const owner = searchParams.get("owner");
  const repo = searchParams.get("repo");
  const folder = searchParams.get("folder") || "";
  const authKey = req.headers.get("authorization");

//   console.log("authKey", authKey);
//   console.log(owner, repo, folder);
//  console.log(process.env.BTEB_URL)
  if (authKey !== process.env.NEXT_PUBLIC_AUTH_KEY) {
    return NextResponse.json(
      {
        status: "Invalid Key!",
        message:
          "You are not authorized to access this API. Please contact the developer.",
      },
      { status: 401 }
    );
  }

  try {
    const response = await fetch(
      `${process.env.BTEB_URL}/${owner}/${repo}/contents/${folder}`,
      { headers: { "Content-Type": "application/json" } }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: "Not Found!", details: "Check your Roll" },
      { status: 404 }
    );
  }
}
