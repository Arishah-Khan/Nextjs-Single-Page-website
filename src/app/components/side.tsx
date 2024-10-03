import { Berkshire_Swash } from "next/font/google";
import { Archivo } from "next/font/google";
import Button from "./button";

const berkshireSwash = Berkshire_Swash({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  weight: "600",
});

interface SideProps {
  welcomeText?: string;
  customClasses: string;
  highlightText: string;
  discoverText: string;
  delightText?: string;
  description: string;
  buttonText: string;
  buttonColor: string;
}

export default function Side({
  welcomeText,
  customClasses = "",
  highlightText,
  discoverText,
  delightText,
  description,
  buttonText,
  buttonColor,
}: SideProps) {
  return (
    <div className="order-2 md:order-1 mb-7">
      <h3 className={`${berkshireSwash.className} my-3 text-lg md:text-xl`}>
        {welcomeText}
      </h3>
      <h1 className={`${berkshireSwash.className} ${customClasses}`}>
      {discoverText} <span className="text-[#F83D8E]">{highlightText}</span> {delightText}
      </h1>
      <p className={`${archivo.className} my-4 text-center px-3 text-sm md:text-base`}>
        {description}
      </p>
      <Button text={buttonText} bgColor={buttonColor} />
    </div>
  );
}
