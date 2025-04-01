"use client";
import React from "react";

interface UrlInputProps {
  onSubmit: (url: string) => void;
  onPaste: () => void;
  loading: boolean;
}

const UrlInput: React.FC<UrlInputProps> = ({ onSubmit, onPaste, loading }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = (e.target as HTMLFormElement).elements.namedItem(
      "urlInput"
    ) as HTMLInputElement;
    onSubmit(url.value);
  };

  return (
    <form
      className="flex flex-col sm:flex-row justify-center items-center my-5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="urlInput"
        placeholder="Enter GitHub Repository URL"
        className="w-full sm:w-[500px] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={loading}
      />
      <button
        type="submit"
        className="mt-2 sm:mt-0 sm:ml-2 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        disabled={loading}
      >
        Download
      </button>
      <button
        type="button"
        onClick={onPaste}
        className="mt-2 sm:mt-0 sm:ml-2 px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-50"
        disabled={loading}
      >
        Paste
      </button>
    </form>
  );
};

export default UrlInput;
