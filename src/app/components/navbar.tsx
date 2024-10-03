"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBagShopping, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Archivo } from "next/font/google";
import { useState } from "react";
import Button from "./button";
import Logo from "./logo";

const archivo = Archivo({
    subsets: ["latin"],
    display: "swap",
    weight: "600",
});

export default function Navbar() {
    // State for managing menu toggle
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <nav className="flex justify-between md:justify-around px-4 sm:px-7 md:px-2 items-center py-3">
                <Logo />
                <div className="hidden md:flex content-center gap-x-11">
                    <ul className={`${archivo.className} flex justify-around items-center gap-x-7 md:text-sm lg:text-base mr-3`}>
                        <li className="text-[#F83D8E] cursor-pointer">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="text-gray-400 cursor-not-allowed">About Us</li>
                        <li className="text-gray-400 cursor-not-allowed">Pages</li>
                        <li className="text-gray-400 cursor-not-allowed">Blog</li>
                        <li className="text-gray-400 cursor-not-allowed">Faqs</li>
                    </ul>

                    <div className="flex justify-center items-center gap-x-4 ml-auto">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <FontAwesomeIcon icon={faBagShopping} />
                        <Button text="Contact Us" bgColor="bg-[#F83D8E]" />
                    </div>
                </div>

                {/* Burger Menu Toggle for Mobile */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[24px]">
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-[#F83D8E]" />
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center bg-white py-4">
                    <ul className={`${archivo.className} flex flex-col items-center gap-y-3 list-none`}>
                        <li className="text-[#F83D8E] cursor-pointer">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="text-gray-400 cursor-not-allowed">About Us</li>
                        <li className="text-gray-400 cursor-not-allowed">Pages</li>
                        <li className="text-gray-400 cursor-not-allowed">Blog</li>
                        <li className="text-gray-400 cursor-not-allowed">Faqs</li>
                    </ul>

                    <div className="flex justify-center items-center gap-x-4 mt-4">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <FontAwesomeIcon icon={faBagShopping} />
                        <Button text="Contact Us" bgColor="bg-[#F83D8E]" />
                    </div>
                </div>
            )}
        </header>
    );
}
