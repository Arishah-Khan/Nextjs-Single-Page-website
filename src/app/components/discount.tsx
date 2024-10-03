import { Berkshire_Swash } from "next/font/google";
import { Archivo } from "next/font/google";
import Button from "./button";
import Image from "next/image";

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


export default function Discount() {
  return (
    <section className="bg-[#683292] relative px-5 py-10  md:px-10 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-20 ">
      <div className="mt-9">
      <Image
          src="/images/Figure → special-triangle.png.png"
          alt="triangle"
          width={30}
          height={30}
          className="absolute left-4 md:left-9 top-4 md:top-10"
        />
        <Image src="/images/Figure → special-doted.png.png" alt="doted" width={50} height={50} className="absolute left-4 md:left-12 bottom-1/4 md:bottom-1/3" />
       
      </div>
      <div className="pl-0 md:pl-20 text-center md:text-left w-full md:w-auto">

        <h1 className={`${berkshireSwash.className} text-3xl sm:text-4xl md:text-5xl text-white`}>
          Summer Special!
        </h1>
        <h4 className={`${archivo.className} my-4 text-white text-sm md:text-base py-2` }>
          Buy One Sundae, Get One 50% Off!
        </h4>
        <Button text={"Get This Deal"} bgColor={"bg-[#F83D8E]"} />
      </div>
      
      <div className="absolute top-5  md:absolute md:bottom-1/2 md:top-1/2 md:left-1/2 md:right-1/3 md:pl-8 md:pt-5 lg:p-0">
        <Image
          src="/images/Paragraph+Background+Border.png"
          alt="paragraph"
          width={80}
          height={80}
          className=""
        />
      </div>


<div>
  <Image src="/images/special-rightimage.png.png" alt="cartoon" width={100} height={120}
  className="absolute right-0 bottom-1/4" />
</div>
    
    </section >
  )
}

