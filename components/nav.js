import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaDownload, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Link from "next/link";

export default function Nav({ darkMode, setDarkMode }) {
  return (
    <nav className="py-10 mb-12 flex justify-between dark:text-white fixed top-0 left-20 right-20 z-50">
      <Link href="/">
        <a className="font-burtons text-2xl">Istiaq Ahmed</a>
      </Link>
      <ul className="flex items-center">
        <li>
          <Link href="/Resume">
            <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8">
              Resume
            </a>
          </Link>
        </li>
        <li>
          <Link href="/Portfolio">
            <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8">
              Portfolio
            </a>
          </Link>
        </li>
        <li style={{ position: 'fixed', bottom: '20px', right: '40px' }}>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className=" cursor-pointer text-2xl"
          />
        </li>
        <li style={{ position: 'fixed', bottom: '20px', left: '40px' }}>
          <a href="https://rxresu.me/istiaqahmed87/istiaqs-professional-resume" download>
            <FaDownload className="text-2xl cursor-pointer" />
          </a>
        </li>
        <ul className="fixed bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center py-4">
          <li className="mx-4">
            <a href="https://twitter.com/yourtwitterhandle" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl" />
            </a>
          </li>
          <li className="mx-4">
            <a href="https://www.linkedin.com/in/yourlinkedinprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl" />
            </a>
          </li>
          <li className="mx-4">
            <a href="https://www.facebook.com/xo2415/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl" />
            </a>
          </li>
          <li className="mx-4">
            <a href="https://www.instagram.com/istiaqahmed_17/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl" />
            </a>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
