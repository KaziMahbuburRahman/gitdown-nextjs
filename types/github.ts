export interface FileItem {
  type: "file" | "dir";
  name: string;
  download_url?: string;
  url?: string;
  _links?: {
    html: string;
  };
}

export interface GithubContextType {
  owner?: string;
  repo?: string;
  folder?: string;
  branch?: string;
  setOwner: (owner: string) => void;
  setRepo: (repo: string) => void;
  setFolder: (folder: string) => void;
  setBranch: (branch: string) => void;
}

export interface DownloadState {
  downloadLink: string;
  downloadFileName: string;
  sizeMB: string;
  loading: boolean;
  error: string | null;
  warning: boolean;
  data: FileItem[];
  isImagePreloaded: boolean;
}
