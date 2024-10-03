import Image from "next/image";
import { Berkshire_Swash } from "next/font/google";

const berkshireSwash = Berkshire_Swash({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
});

export default function Logo(){
    return(
        <div className="flex items-center">
        <Image src="/images/logo@2x.png" alt="Logo" width={70} height={70} />
        <h3 className={`${berkshireSwash.className} text-2xl text-[#F83D8E]`}>IcyTales</h3>
    </div>
    )
}