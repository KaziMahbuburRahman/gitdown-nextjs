"use client";
import DownloadIcon from "@/components/icons/DownloadIcon";
import FileIcon from "@/components/icons/FileIcon";
import FolderIcon from "@/components/icons/FolderIcon";
import { FileItem } from "@/types/github";
import React from "react";

interface FileListProps {
  files: FileItem[];
  onFileClick: (file: FileItem) => void;
  onDownload: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  downloadLink: string;
  downloadFileName: string;
  onBack: (e: React.MouseEvent<HTMLParagraphElement>) => void;
}

const FileList: React.FC<FileListProps> = ({
  files,
  onFileClick,
  onDownload,
  downloadLink,
  downloadFileName,
  onBack,
}) => {
  return (
    <div className="mt-8">
      <p
        className="text-blue-500 cursor-pointer hover:underline mb-4"
        onClick={onBack}
      >
        ← Go Back
      </p>
      <div className="grid grid-cols-1 gap-4">
        {files.map((file, index) => (
          <div
            key={index}
            className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            {file.type === "file" ? (
              <FileIcon className="w-6 h-6 text-gray-500 mr-4" />
            ) : (
              <FolderIcon className="w-6 h-6 text-yellow-500 mr-4" />
            )}
            <span
              className="flex-grow cursor-pointer hover:text-blue-500"
              onClick={() => onFileClick(file)}
            >
              {file.name}
            </span>
            {file.type === "file" && file.download_url && (
              <a
                href={file.download_url}
                onClick={onDownload}
                className="text-blue-500 hover:text-blue-700"
              >
                <DownloadIcon className="w-5 h-5" />
              </a>
            )}
          </div>
        ))}
      </div>
      {downloadLink && (
        <div className="mt-4">
          <a
            href={downloadLink}
            download={downloadFileName}
            className="inline-block px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Download All Files
          </a>
        </div>
      )}
    </div>
  );
};

export default FileList;
