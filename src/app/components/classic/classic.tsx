import ClassicSecond from "./classic-second"
import Image from "next/image"


export default function Classic() {
    return (
        <section className="bg-[url('/images/Gradient.png')] bg-cover bg-center flex justify-between md:gap-7 pt-10 pb-[50px]">
            <div>
                <Image src="/images/classic-leftimage.png.png" alt="Ice-cream" width={150} height={150} />
            </div>
            <div>
                <ClassicSecond />
            </div>
            <div className="relative w-[150px] h-[1/2]">
                <Image
                    src="/images/classic-rightimage.png.png"
                    alt="Ice-cream"
                    width={150}
                    height={150}
                    objectFit="contain"
                    className="absolute bottom-0 w-[70px] h-[150px] sm:w-[100px] sm:h-[200px] md:w-[150px] md:h-[230px] right-0"
                />

            </div>
        </section>
    )
}