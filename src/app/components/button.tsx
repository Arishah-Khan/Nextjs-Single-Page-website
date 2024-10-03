// src/app/components/button.tsx

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Archivo } from "next/font/google";

const archivo = Archivo({
    subsets: ["latin"],
    display: "swap",
    weight: "600",
});

interface ButtonProps {
    text: string;
    bgColor: string;
}

export default function Button({ text, bgColor }: ButtonProps) {
    return (
        <div className="flex justify-center items-center"> {/* Parent container for centering */}
            <button
                className={`text-white rounded-3xl px-4 py-2 md:text-sm lg:text-base ${archivo.className} shadow-[0_4px_2px_-1px_#FFB2D5]  ${bgColor} 
                hover:bg-white hover:text-pink-500 hover:outline hover:outline-2 hover:outline-purple-400 flex items-center`} 
            >
                {text}
                <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2"
                />
            </button>
        </div>
    );
}
