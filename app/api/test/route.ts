export const dynamic = 'force-static'
 
export async function GET() {

  const data = {
    name: "KMR",
    age: 20,
  }
 
  return Response.json({ data })
}