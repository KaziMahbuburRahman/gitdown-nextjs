export interface FileItem {
  type: "file" | "dir";
  name: string;
  download_url?: string;
  url?: string;
  _links?: {
    html: string;
  };
}

declare global {
  interface Window {
    owner?: string;
    repo?: string;
    folder?: string;
    branch?: string;
  }
}
