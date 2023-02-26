import { BsFillMoonStarsFill, BsList } from "react-icons/bs";
import Link from 'next/link';
import { useState } from 'react';

export default function Nav({ darkMode, setDarkMode }) {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <nav className="w-full fixed top-10 left-10 right-0 z-50">
        <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-8">
          <div className="">
            <Link href="/">
              <a className="font-burtons text-2xl dark:text-white">Istiaq Ahmed</a>
            </Link>
          </div>
          <div className="mr-10 hidden md:block">
            <ul className="flex items-center justify-end">
              <li>
                <Link href="/Resume">
                  <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md sm:ml-8 mt-4 sm:mt-0">
                    Resume
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/Projects">
                  <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md sm:ml-8 mt-4 sm:mt-0">
                    Projects
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/Contact">
                  <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md sm:ml-8 mt-4 sm:mt-0">
                    Contact me
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="fixed top-10 right-10 md:hidden">
            <button
              className=" dark:text-white rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              <BsList size={24} />
            </button>
          </div>
          <div
            className={`justify-self-center pb-3 md:hidden ${navbar ? 'block' : 'hidden'}`}
            style={{ position: 'absolute', top: '100%', right: 10, zIndex: 1 }}
          >
            <div className="bg-gray-800 mr-20 rounded-lg shadow-lg">
              <ul className="items-center justify-center md:flex flex-col">
                <li>
                  <Link href="/Resume">
                    <a className="text-gray-200 flex items-center py-2 px-4 block hover:text-cyan-500" onClick={() => setNavbar(!navbar)}>
                      Resume
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/Projects">
                    <a className="text-gray-200 flex items-center py-2 px-4 block hover:text-cyan-500" onClick={() => setNavbar(!navbar)}>
                      Projects
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/Contact">
                    <a className="text-gray-200 flex items-center py-2 px-4 block hover:text-cyan-500" onClick={() => setNavbar(!navbar)}>
                      Contact me
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <li class="dark:text-white" style={{ position: 'fixed', bottom: '20px', right: '40px' }}>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className=" cursor-pointer text-2xl"
          />
        </li>
      </nav>
    </div>
  );
}
