import Image from "next/image";
import Side from "./side";

export default function Sweet() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 justify-around items-center p-8 md:p-12 relative">
            <div className="flex justify-center items-center h-full relative py-8 md:py-0">

                <Image src="/images/Figure → relive-circle.png.png" alt="circle" width={50} height={50} className="absolute bottom-1 left-[-12px] w-8 h-8 sm:left[2] md:left-[-10px] lg:left-2 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                <Image
                    src="/images/Gradient.svg"
                    alt="background"
                    width={350}
                    height={320}
                    className="object-cover"
                />
                <Image
                    src="/images/relive-image.png.png"
                    alt="girl"
                    width={320}
                    height={300}
                    className="object-cover absolute pl-3"
                />
                <Image src="/images/Figure → relive-doted.png.png" alt="doted" width={50} height={50} className="absolute top-0 md:top-4 right-4" />
            </div>
            <div className="flex text-center relative">
                <Image
                    src="/images/Figure → relive-triangle.png.png"
                    alt="triangle"
                    width={30}
                    height={30}
                    className="absolute right-3 top-[-8px] md:right-4 md:top-20 lg:right-10 lg:top-16"
                />
                <Side
                    discoverText="Relive the Sweet Memories of Classic"
                    highlightText="Ice Creams"
                    description="From rich chocolate fudge to creamy vanilla sundaes, discover our menu of classic ice cream creations."
                    buttonText="Explore Our Menu"
                    buttonColor="bg-[#F83D8E]"
                    customClasses="text-2xl sm:text-3xl md:text-4xl"
                />
            </div>
            <div>
                <Image
                    src="/images/Figure → relive-rightbottomimage.png.png"
                    alt="bottomImg"
                    width={60}
                    height={60}
                    className="absolute right-4  md:right-8 bottom-[0px] w-16 h-8 md:w-24 md:h-11"
                />
            </div>
        </section>
    )
}