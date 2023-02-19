import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { FaDownload, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Link from "next/link";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio - Istiaq Ahmed</title>
        <meta name="description" content="Portfolio page for Istiaq Ahmed" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <nav className="py-10 mb-12 flex justify-between dark:text-white">
          <Link href="/" className="font-burtons text-xl">
            Istiaq Ahmed
          </Link>
          <ul className="flex items-center">
            <li style={{ position: 'fixed', bottom: '20px', right: '40px' }}>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className=" cursor-pointer text-2xl"
              />
            </li>
            <li>
              <Link
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                href="/Resume"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                href="/Portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                href="/Portfolio"
                >
                Portfolio
              </Link>
            </li>
            <li style={{ position: 'fixed', bottom: '20px', left: '40px' }}>
              <a href="/path/to/download" download>
                <FaDownload className="text-2xl cursor-pointer" />
              </a>
            </li>
            <ul className="fixed bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center py-4 z-10">
              <li className="mx-4">
                <a href="https://twitter.com/yourtwitterhandle" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-4xl" />
                </a>
              </li>
              <li className="mx-4">
                <a href="https://www.linkedin.com/in/yourlinkedinprofile" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-4xl" />
                </a>
              </li>
              <li className="mx-4">
                <a href="https://www.facebook.com/yourfacebookprofile" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-4xl" />
                </a>
              </li>
              <li className="mx-4">
                <a href="https://www.instagram.com/yourinstagramprofile" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-4xl" />
                </a>
              </li>
            </ul>

          </ul>
        </nav>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I&apos;ve done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talented people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Below are some examples of my work.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
                alt="web1"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
                alt="web2"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
                alt="web3"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
                alt="web4"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
                alt="web5"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
                alt="web6"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
