import { FileItem } from "@/types/github";

export const githubService = {
  async fetchContents(owner: string, repo: string, folder: string = "") {
    const githubAPI = `${process.env.NEXT_PUBLIC_BTEB_URL}/${owner}/${repo}/contents/${folder}`;

    const response = await fetch(githubAPI, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch repository contents");
    }

    return response.json() as Promise<FileItem[]>;
  },

  async downloadFile(url: string): Promise<Blob> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to download file");
    }
    return response.blob();
  },

  parseGithubUrl(url: string) {
    const match = url
      .replace(/\s/g, "")
      .match(/github\.com\/([^/]+)\/([^/]+)(\/tree\/[^/]+\/(.+))?/);

    if (!match) {
      throw new Error("Invalid GitHub URL");
    }

    const [, owner, repo, branch, folder] = match;
    return { owner, repo, branch, folder };
  },
};
