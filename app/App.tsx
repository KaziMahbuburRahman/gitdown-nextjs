"use client";
import FileList from "@/components/github/FileList";
import UrlInput from "@/components/github/UrlInput";
import LoadingIcon from "@/components/icons/LoadingIcon";
import { githubService } from "@/services/github.service";
import { DownloadState, FileItem } from "@/types/github";
import JSZip from "jszip";
import React, { useState } from "react";

const App: React.FC = () => {
  const [state, setState] = useState<DownloadState>({
    downloadLink: "",
    downloadFileName: "",
    sizeMB: "",
    loading: false,
    error: null,
    warning: false,
    data: [],
    isImagePreloaded: false,
  });

  const handleUrlSubmit = async (url: string) => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    try {
      const { owner, repo, branch, folder } = githubService.parseGithubUrl(url);
      setState((prev) => ({ ...prev, warning: !folder }));

      const image = new window.Image();
      image.src = `https://opengraph.githubassets.com/e61b97681f68c6b6893f9386c313d502fdfb7b512bdf4f187b2582bc0378b0c6/${owner}/${repo}`;
      image.onload = () => {
        setState((prev) => ({ ...prev, isImagePreloaded: true }));
      };

      const data = await githubService.fetchContents(owner, repo, folder);
      setState((prev) => ({ ...prev, data }));
      await zipFiles(data, owner, repo, folder);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error instanceof Error ? error.message : "An error occurred",
        loading: false,
      }));
    }
  };

  const handlePaste = async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    try {
      const url = await navigator.clipboard.readText();
      await handleUrlSubmit(url);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: "Failed to read from clipboard",
        loading: false,
      }));
    }
  };

  const zipFiles = async (
    files: FileItem[],
    owner: string,
    repo: string,
    folder: string
  ) => {
    const zip = new JSZip();

    const processItem = async (item: FileItem, path = "") => {
      if (item.type === "file" && item.download_url) {
        const blob = await githubService.downloadFile(item.download_url);
        zip.file(path + item.name, blob);
      } else if (item.type === "dir" && item.url) {
        const contents = await githubService.fetchContents(
          owner,
          repo,
          item.url
        );
        await Promise.all(
          contents.map((subItem) =>
            processItem(subItem, path + item.name + "/")
          )
        );
      }
    };

    await Promise.all(files.map((item) => processItem(item)));
    const content = await zip.generateAsync({ type: "blob" });

    const sizeBytes = content.size;
    const objectURL = URL.createObjectURL(content);
    const sizeDisplay = formatFileSize(sizeBytes);

    const downloadFileName = folder
      ? `${owner}_${repo}_${folder}.zip`
      : `${owner}_${repo}.zip`;

    setState((prev) => ({
      ...prev,
      downloadLink: objectURL,
      downloadFileName,
      sizeMB: sizeDisplay,
      loading: false,
    }));
  };

  const formatFileSize = (bytes: number): string => {
    const units = ["Bytes", "KB", "MB", "GB", "TB"];
    let size = bytes;
    let unitIndex = 0;

    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }

    return `${size.toFixed(2)} ${units[unitIndex]}`;
  };

  const handleFileClick = (file: FileItem) => {
    if (file.type === "dir" && file.url) {
      handleUrlSubmit(file.url);
    }
  };

  const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const fileUrl = e.currentTarget.href;
    try {
      const blob = await githubService.downloadFile(fileUrl);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileUrl.split("/").pop() || "download";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: "Failed to download file",
      }));
    }
  };

  const handleBack = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.preventDefault();
    const url = new URL(window.location.href);
    const pathname = url.pathname;
    const pathParts = pathname.split("/");
    if (pathParts.length === 5) {
      alert("You are at the root of the repository!");
      return;
    }

    const folderPath = pathParts.slice(0, -1).join("/");
    const folderUrl = `https://github.com${folderPath}`;
    handleUrlSubmit(folderUrl);
  };

  return (
    <div className="mx-3">
      <div className="container m-0 bg-white min-h-screen max-w-[960px] mx-auto lg:rounded-md rounded-md p-5 lg:mb-5">
        <h2 className="text-3xl text-center font-bold text-gray-700">
          Github Folder Downloader
        </h2>
        <p className="text-center mt-5">
          Download github repository and folders for free!
        </p>

        <UrlInput
          onSubmit={handleUrlSubmit}
          onPaste={handlePaste}
          loading={state.loading}
        />

        {state.error && (
          <div className="text-red-500 text-center mt-4">{state.error}</div>
        )}

        {state.loading ? (
          <div className="flex justify-center items-center mt-8">
            <LoadingIcon className="w-8 h-8" />
          </div>
        ) : (
          state.data.length > 0 && (
            <FileList
              files={state.data}
              onFileClick={handleFileClick}
              onDownload={handleDownload}
              downloadLink={state.downloadLink}
              downloadFileName={state.downloadFileName}
              onBack={handleBack}
            />
          )
        )}
      </div>
    </div>
  );
};

export default App;
