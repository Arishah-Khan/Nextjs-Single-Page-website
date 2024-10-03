
import { Berkshire_Swash } from "next/font/google";
import { Archivo } from "next/font/google";
import Cards from "./cards";

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


export default function ClassicSecond() {
    return (
        <div className="grid items-center pt-[60px] my-4 pb-[90px]">
            <h2 className={`${berkshireSwash.className} text-4xl md:text-5xl text-center`}>
                Our <span className="text-[#F83D8E]">Classic</span> Favorites!
            </h2>
            <p className={`${archivo.className} text-center text-base md:text-lg text-[#646464] py-4`}>
                Check out our top products that our customers love.
            </p>

            
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-5">
                    <Cards
                        bgColor="bg-[#F7F2F7]"
                        figureImage="/images/Figure2.png"
                        title="Chocolate Brownie Sundae"
                        description="Rich chocolate ice cream with chunks of brownie."
                        price="$5.49"
                    />
                    <Cards
                        bgColor="bg-[#FFEEEE]"
                        figureImage="/images/Figure → classic-image3.png.png"
                        title="Strawberry Shortcake"
                        description="Strawberry ice cream layered with shortcake."
                        price="$5.29"
                    />
                    <Cards
                        bgColor="bg-[#F6F9E1]"
                        figureImage="/images/Figure → classic-image4.png.png"
                        title="Mint Chocolate Chip Cone"
                        description="Refreshing mint ice cream with chocolate chips."
                        price="$3.99"
                    />
                    <Cards
                        bgColor="bg-[#FFFAF4]"
                        figureImage="/images/Figure → classic-image1.png.png"
                        title="Classic Vanilla Ice Cream"
                        description="Creamy vanilla ice cream topped with cherry."
                        price="$4.99"
                    />
                </div>
            
        </div>
    )
}