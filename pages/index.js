import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import propic from "../public/pro-pic.png";
import Typewriter from "typewriter-effect";
import Nav from "../components/nav";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Istiaq Ahmed</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 pt-24 min-h-screen">
        <section>
          <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <Image src={propic} alt="" layout="fill" objectFit="cover" />
          </div>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              <Typewriter
                onInit={(typewriter) => { typewriter.typeString("Istiaq Ahmed").start(); }}
              />
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Student of Computer Science at <br />
              Independent University, Bangladesh
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            I am excited to continue learning and applying my skills to create innovative solutions in the field of technology.
            <br /> Feel free to look around and discover more about me.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
