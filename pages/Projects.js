import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import Nav from "../components/nav";
import resumeData from "../public/resume.json";

export default function Projects() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Projects - Istiaq Ahmed</title>
        <meta name="description" content="Projects page for Istiaq Ahmed" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white dark:bg-gray-900 px-10 md:px-20 lg:px-40 pt-24 min-h-screen">
        <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
        <section className="py-10">
          <div>
            <h2 className="text-3xl -mt-12 font-medium py-4 dark:text-white text-center">
              Projects
            </h2>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-center">
              Since the beginning of my journey as a freelance designer and
              developer, I&apos;ve done remote work for{" "}
              <span className="text-teal-500">agencies</span>, consulted for{" "}
              <span className="text-teal-500">startups</span>, and collaborated
              with talented people to create digital products for both business
              and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-center">
              Below are some examples of my work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
  {resumeData.sections.projects.items.map((item) => (
    <div className="max-w-md mx-auto shadow-md rounded-md overflow-hidden h-96">
      <div className="bg-gray-200 dark:bg-gray-700 h-56 object-cover relative">
        <Image
          src="/projects/1.png"
          alt="Project Screenshot"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div key={item.id} className="p-4 md:p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          {item.name}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          {item.description}
        </p>
        <div className=" mt-8">
          <a
            href={item.url}
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md sm:ml-8 mt-4 sm:mt-0"
          >
            View Source Code
          </a>
        </div>
      </div>
    </div>
  ))}
</div>
        </section>
      </main>
    </div>
  );
}