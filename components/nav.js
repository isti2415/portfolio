import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaDownload} from 'react-icons/fa';
import Link from "next/link";
import { useState } from "react";

export default function Nav({ darkMode, setDarkMode }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="py-10 mb-12 flex justify-between dark:text-white fixed top-0 left-10 right-10 z-50">
      <Link href="/">
        <a className="font-burtons text-2xl">Istiaq Ahmed</a>
      </Link>
      <div className="flex items-center">
        <button
          className="block sm:hidden cursor-pointer text-2xl mr-8"
          onClick={handleMenuToggle}
        >
          <span className="sr-only">Toggle menu</span>
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              className={`${showMenu ? 'hidden' : 'block'}`}
              d="M4 6h16M4 12h16M4 18h16"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className={`${showMenu ? 'block' : 'hidden'}`}
              d="M6 18L18 6M6 6l12 12"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <ul
          className={`${showMenu ? 'block' : 'hidden'} sm:block sm:flex sm:items-center`}
        >
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
        <li style={{ position: 'fixed', bottom: '20px', right: '40px' }}>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className=" cursor-pointer text-2xl"
          />
        </li>
      </div>
    </nav>
  );
}
