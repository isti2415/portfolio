import Head from "next/head";
import { useState } from "react";
import Nav from "../components/nav";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import qrcode from "../public/istiaqahmed.png";
import Image from "next/image";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Contact() {
    const [darkMode, setDarkMode] = useState(true);

    async function copyPersonalEmail() {
        var email = "istiaqahmed87@gmail.com";
        try {
            await navigator.clipboard.writeText(email);
            alert("Email copied to clipboard: " + email);
        } catch (err) {
            console.error("Could not copy email: ", err);
        }
    }

    async function copyUniversityEmail() {
        var email = "2021462@iub.edu.bd";
        try {
            await navigator.clipboard.writeText(email);
            alert("Email copied to clipboard: " + email);
        } catch (err) {
            console.error("Could not copy email: ", err);
        }
    }


    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Contact - Istiaq Ahmed</title>
                <meta name="description" content="Contact page for Istiaq Ahmed" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 pt-24 min-h-screen">
                <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
                <div className="mt-8 flex flex-col sm:flex-row justify-between w-full">
                    <div className="w-full sm:w-6/12 mt-4 sm:mt-0">
                        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
                            <div className="px-4 py-4 flex justify-center">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Email me</h3>
                            </div>
                            <div className="mt-4 flex flex-col md:flex-row md:justify-center">
                                <button onClick={() => copyPersonalEmail()} className="px-4 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md text-white mb-2 md:mb-0 md:mr-2">
                                    Personal<br></br> Email Address
                                </button>
                                <button onClick={() => copyUniversityEmail()} className="px-4 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md text-white">
                                    University<br></br> Email Address
                                </button>
                            </div>
                            <div className="px-4 pt-4">
                                <h3 className="flex justify-center pt-8 text-lg font-semibold text-gray-800 dark:text-white">Follow me on social media</h3>
                                <ul className="flex justify-center mt-8">
                                    <li className="mx-4">
                                        <a href="https://www.facebook.com/xo2415/" target="_blank" rel="noopener noreferrer">
                                            <FaFacebook className="text-3xl text-black dark:text-white" />
                                        </a>
                                    </li>
                                    <li className="mx-4">
                                        <a href="https://www.instagram.com/istiaqahmed_17/" target="_blank" rel="noopener noreferrer">
                                            <FaInstagram className="text-3xl text-black dark:text-white" />
                                        </a>
                                    </li>
                                    <li className="mx-4">
                                        <a href="https://twitter.com/IstiaqA01586361" target="_blank" rel="noopener noreferrer">
                                            <FaTwitter className="text-3xl text-black dark:text-white" />
                                        </a>
                                    </li>
                                    <li className="mx-4">
                                        <a href="https://www.linkedin.com/in/istiaq-ahmed-382225212/" target="_blank" rel="noopener noreferrer">
                                            <FaLinkedin className="text-3xl text-black dark:text-white" />
                                        </a>
                                    </li>
                                    <li className="mx-4">
                                        <a href="https://api.whatsapp.com/send?phone=8801611160290" target="_blank" rel="noopener noreferrer">
                                            <FaWhatsapp className="text-3xl text-black dark:text-white" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="mx-auto bg-white w-60 h-60 relative overflow-hidden mt-10 mb-10 md:h-60 md:w-60">
                                <Image src={qrcode} alt="QR Code" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-6/12 px-4 mt-4 sm:mt-0">
                        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
                            <div className="px-4 py-4">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Leave a Message</h3>
                                <form className="flex flex-col gap-6 mt-6" style={{ maxWidth: "30rem" }}>
                                    <label htmlFor="name" className="text-gray-800 dark:text-gray-200">Name</label>
                                    <input type="text" id="name" name="name" className="px-4 py-2 rounded-lg dark:bg-white bg-gray-200 dark:border-gray-400 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                                    <label htmlFor="email" className="text-gray-800 dark:text-gray-200">Email</label>
                                    <input type="email" id="email" name="email" className="px-4 py-2 rounded-lg dark:bg-white bg-gray-200 dark:border-gray-400 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                                    <label htmlFor="message" className="text-gray-800 dark:text-gray-200">Message</label>
                                    <textarea id="message" name="message" className="px-4 py-2 resize-y max-h-128 rounded-lg dark:bg-white bg-gray-200 dark:border-gray-400 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" rows="6" required></textarea>
                                    <button type="submit" className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md">
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}