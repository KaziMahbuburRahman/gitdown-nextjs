import Image from "next/image";
export default function Preloader() {
  return (
    <div className="bg-white flex flex-col justify-center items-center h-screen">
      <Image
        src="https://techhelpbd.com/gitdown/favicon.ico"
        alt="logo"
        width={96}
        height={96}
        className="w-24 h-24"
      />
      <div className="flex items-center justify-center mt-4">
        <div className="w-3 h-3 bg-gray-600 rounded-full animate-bounce mr-1"></div>
        <div className="w-3 h-3 bg-gray-600 rounded-full animate-bounce mr-1"></div>
        <div className="w-3 h-3 bg-gray-600 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}
