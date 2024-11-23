"use client"
import { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom'
import HomeIcon from './icons/HomeIcon';
import { usePathname } from 'next/navigation';
import Link from 'next/link';



export const Navbar = () => {

  const [isToggleOpen, setIsToggleOpen] = useState(false)
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentPath = usePathname()

  useEffect(() => {
    setIsToggleOpen(false);
  }, [currentPath]);

  useEffect(() => {
    // Add or remove 'overflow-hidden' class based on the isToggleOpen state
    document.body.classList.toggle('overflow-hidden', isToggleOpen);
  }, [isToggleOpen]);



  return (
    <>
      <header className="mb-5 border-b-1 relative z-20 w-full border-b border-slate-200 bg-white shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6">
          <nav
            aria-label="main navigation"
            className="flex lg:inline h-[3.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >


            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                  : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>


            <div className='mx-auto flex justify-between items-center max-w-[960px]'>

              {/*      <!-- Brand logo --> */}
              <div>
                <button>
                  <Link href="/gitdown/" onClick={handleScrollToTop} className={
                    currentPath === '/gitdown/' ? "btn btn-ghost normal-case text-lg flex justify-center items-center gap-2 outline-none bg-transparent border-none lg:hover:bg-gray-100/100 p-2 lg:rounded-md"
                      :
                      "btn btn-ghost normal-case text-lg flex justify-center items-center gap-2 outline-none bg-transparent border-none transition duration-300 active:scale-90 lg:hover:bg-gray-100/100 p-2 lg:rounded-md"}>TechHelpBD <strong className="text-blue-500">|</strong> GitDown</Link>
                </button>
              </div>
              {/*      <!-- Navigation links --> */}
              <div>
                <ul
                  role="menubar"
                  aria-label="Select page"
                  className={`absolute top-0 left-0 z-[-1]  w-full h-screen justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${isToggleOpen
                    ? "visible opacity-100 backdrop-blur-sm"
                    : "invisible opacity-0"
                    }`}
                >
                  <li role="none" className="flex items-stretch">
                    <Link onClick={handleScrollToTop} href="/gitdown/"
                      className={
                        currentPath === '/gitdown/' ? "text-sky-500 lg:text-white lg:bg-sky-500 flex items-center gap-2 py-4 lg:px-3 lg:py-1 transition-colors duration-300 focus:outline-none focus-visible:outline-none  lg:rounded-lg lg:mx-5 my-1"

                          :

                          "lg:shadow flex items-center gap-2 lg:px-3 lg:py-1 py-4 transition duration-300 active:scale-90 lg:rounded-md lg:mx-5 my-1"
                      }
                      role="menuitem"
                      aria-haspopup="false"
                    >
                      <span className='hidden lg:block'>
                        <HomeIcon />
                      </span>
                      <span className='lg:hidden block'>
                        Home
                      </span>
                    </Link>
                  </li>
                  <li role="none" className="flex items-stretch">
                    <a
                      href="https://techhelpbd.com"
                      target='blank'
                      role="menuitem"
                      aria-current="page"
                      aria-haspopup="false"
                      className="lg:shadow flex items-center gap-2 lg:py-2 lg:px-4 transition duration-300 active:scale-90 lg:rounded-md lg:mx-5 my-1"

                    >
                      <span>Blog</span>
                    </a>
                  </li>
                  <li role="none" className="flex items-stretch">
                    <Link href="/gitdown/contact"
                      role="menuitem"
                      aria-haspopup="false"
                      className={
                        currentPath === '/gitdown/contact' || currentPath === '/gitdown/contact/' ? "text-sky-500 lg:text-white lg:bg-sky-500 flex items-center gap-2 py-4 transition-colors duration-300 focus:outline-none focus-visible:outline-none lg:py-2 lg:px-3   lg:rounded-md lg:mx-5 my-1"

                          :

                          "lg:shadow flex items-center py-4 lg:px-3 lg:py-2 transition duration-300 active:scale-90 lg:rounded-md lg:mx-5 my-1"
                      }

                    >
                      <span>Feedback</span>
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}