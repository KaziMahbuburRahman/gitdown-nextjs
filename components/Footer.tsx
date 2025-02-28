"use client"
import React from 'react'


import Link from 'next/link';
import Image from 'next/image';
import FileIcon from './icons/FileIcon'
import ArrowUp from './icons/ArrowUp';
const Footer = () => {
    const handleScroll = () => {
        window.scrollTo({
          top: 0, // Scroll to the top of the page
          behavior: 'smooth', // Enables smooth scrolling
        });
      };
  return (
    <>
     <div
      id="icon-box"
      className="bg-[#c01d2e] text-white p-3 rounded-full hover:bg-black hover:text-white cursor-pointer fixed lg:bottom-2 bottom-2 right-6 flex justify-center items-center"
      onClick={handleScroll}
    >
      <ArrowUp/>
    </div>
      <footer className="w-full mt-5 text-gray-200">

        {/*    <!-- Main footer --> */}
        <div className="pt-16 pb-12 text-sm border-t border-gray-600 bg-[#3d4451]">
          <div className="container px-6 mx-auto">
            <div className="flex flex-col sm:flex-row justify-around">
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-header"
              >

                <Image className='mx-auto h-32 w-32 mb-5' width={100} height={100} src="https://techhelpbd.com/gitdown/favicon.ico" alt="gitdown-logo" />
                <p className='max-w-[26rem]'>
                  GitDown is a Github Folder Downloader powered by Tech Help BD! <br /> <br />
                  We are excited to provide you with a user-friendly online platform to download your code. GitDown can download any github repository or folder. <br />
                  <br />

                  Please feel free to provide any feedback to help us improve your experience. <br /> <br />

                </p>
              </nav>







              <nav
                className="col-span-2 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-header"
              >
                <h3
                  className="mb-6 text-base font-medium text-white"
                  id="footer-header"
                >
                  IMPORTANT LINKS
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a className="transition-colors duration-300 hover:text-gray-100 focus:text-gray-50" href='https://techhelpbd.com/about-us' target='_blank' rel='noopener noreferrer'>About Us</a>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link className="transition-colors duration-300 hover:text-gray-100 focus:text-gray-50" href="/contact">Contact Us</Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link className="transition-colors duration-300 hover:text-gray-100 focus:text-gray-50" href="/gitdown/privacy">Privacy Policy</Link>
                  </li>

                  <li className="mb-2 leading-6">
                    <a
                      href="https://techhelpbd.com"
                      target='_blank'
                      className="transition-colors duration-300 hover:text-gray-100 focus:text-gray-50"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-header"
              >
                <h3
                  className="mb-6 text-base font-medium text-white"
                  id="footer-header"
                >
                  FOLLOW US
                </h3>
                <div>

                  <div className="grid grid-flow-col gap-4">

                    <a href='https://facebook.com/groups/TechHelpBangladesh' target='_blank' title='Facebook' rel='noopener noreferrer'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                        <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z" className="fill-current text-white hover:text-blue-600" />
                      </svg>
                    </a>

                    <a href='https://youtube.com/@TechHelpBD' target='_blank' title='YouTube' rel='noopener noreferrer' ><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" className="fill-current text-white hover:text-red-500"></path></svg></a>


                    <a href='https://t.me/TechHelpBangladesh' target='_blank' title='Telegram' rel='noopener noreferrer'> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" style={{ fill: "#ffffff", transform: "", msFilter: "" }}>
                      <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" className="fill-current text-white hover:text-blue-500" />
                    </svg>
                    </a>



                  </div>
                </div>

                {/*<!-- Component: Large basic google app button  --> */}
                <a className='px-5' href="https://www.buymeacoffee.com/MahbubDev" target="_blank">
                  <Image src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height={100} width={100} style={{ height: "60px", width: "217px" }} /></a>
                {/* <a
        href="https://play.google.com/store/apps/details?id=com.techhelpbd.gitdown"
        target='_blank'
        className="my-10 inline-flex h-16 min-w-44 items-center justify-start gap-2 whitespace-nowrap rounded bg-slate-900 px-3.5 text-base font-semibold tracking-wide text-slate-50 transition duration-300 hover:bg-slate-950 focus:bg-slate-950 focus-visible:outline-none"
      >
        <svg
          width="40"
          height="40"
          className="h-10 w-10"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="graphics-symbol"
          aria-label="Google play icon"
        >
          <path
            d="M21.9219 19.6222L27.8405 13.7036L8.72367 2.95928C7.45668 2.27475 6.26976 2.17868 5.22895 2.92726L21.9219 19.6222ZM28.8316 26.5339L34.9843 23.0732C36.1853 22.4007 36.8438 21.4479 36.8438 20.3911C36.8438 19.3363 36.203 18.3993 35.0041 17.7267L29.4337 14.5983L23.1452 20.8495L28.8316 26.5339ZM4.20016 4.38239C4.07206 4.7767 4 5.21704 4 5.69941V35.1322C4 35.8948 4.16813 36.5513 4.47237 37.0738L20.6789 20.8652L4.20016 4.38239ZM21.9219 22.1061L5.8054 38.2246C6.11364 38.3427 6.4459 38.4048 6.79617 38.4048C7.42065 38.4048 8.07116 38.2206 8.73367 37.8524L27.258 27.4503L21.9219 22.1061Z"
            fill="currentColor"
          ></path>
        </svg>
        <span className="flex flex-col">
          <span className="text-xs font-normal">Get it on</span>
          <span>Google Play</span>
        </span>
      </a> */}
                {/*<!-- End Large basic google app button  --> */}



                {/*<!-- Component: Large outline google app button  --> */}
                {/* <a
        href="#"
        className="my-10 inline-flex h-16 min-w-44 bg-white items-center justify-start gap-2 whitespace-nowrap rounded border border-slate-900 px-3.5 text-base font-semibold tracking-wide text-slate-900 transition duration-300 hover:border-slate-950 focus:border-slate-950 focus-visible:outline-none"
      >
        <svg
          width="40"
          height="40"
          className="h-10 w-10"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="graphics-symbol"
          aria-label="Google play icon"
        >
          <path
            d="M21.9219 19.6222L27.8405 13.7036L8.72367 2.95928C7.45668 2.27475 6.26976 2.17868 5.22895 2.92726L21.9219 19.6222ZM28.8316 26.5339L34.9843 23.0732C36.1853 22.4007 36.8438 21.4479 36.8438 20.3911C36.8438 19.3363 36.203 18.3993 35.0041 17.7267L29.4337 14.5983L23.1452 20.8495L28.8316 26.5339ZM4.20016 4.38239C4.07206 4.7767 4 5.21704 4 5.69941V35.1322C4 35.8948 4.16813 36.5513 4.47237 37.0738L20.6789 20.8652L4.20016 4.38239ZM21.9219 22.1061L5.8054 38.2246C6.11364 38.3427 6.4459 38.4048 6.79617 38.4048C7.42065 38.4048 8.07116 38.2206 8.73367 37.8524L27.258 27.4503L21.9219 22.1061Z"
            fill="currentColor"
          ></path>
        </svg>
        <span className="flex flex-col">
          <span className="text-xs font-normal">Get it on</span>
          <span>Google Play</span>
        </span>
      </a> */}
                {/*<!-- End Large outline google app button  --> */}

              </nav>
            </div>
          </div>
        </div>


      </footer>
      <div className="bg-gray-900 py-6 w-full">
        <div className="container mx-auto text-center text-white font-medium">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://techhelpbd.com"
            className="text-green-500 hover:text-green-300 transition-colors duration-200"
            target='_blank' rel='noopener noreferrer'
          >
            Tech Help BD
          </a>
          . All rights reserved.
        </div>
      </div>


    </>
  )
}

export default Footer