
import Image from "next/image";
import Side from "./side";

export default function HeroSection() {
    return (
        <main className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 text-center items-center mt-3">
             <Side
        welcomeText="Welcome to The"
        discoverText="Discover"
        highlightText="Sweet"
        delightText="Delights"
        description="Relish the timeless taste of handcrafted ice cream, made with passion and the finest ingredients."
        buttonText="Browse Our Classic Flavors"
        buttonColor="bg-[#683292]"
        customClasses="text-4xl sm:text-5xl md:text-6xl"
      />
           <div className="flex justify-center items-center h-full order-1 md:order-2 relative">
    <Image
        src="/images/Gradient.svg"
        alt="background"
        width={350}
        height={320}
        className="object-cover w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]"
    />
    <Image
        src="/images/banner-image.png.svg"
        alt="Cone Image"
        width={320}
        height={300}
        className="object-cover absolute w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[340px] pl-5"
    />
</div>
        </main>
    );
}
