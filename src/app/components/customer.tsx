import { Berkshire_Swash } from "next/font/google";
import { Archivo } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

const berkshireSwash = Berkshire_Swash({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
});

const archivo = Archivo({
    subsets: ["latin"],
    display: "swap",
    weight: "500",
});

export default function Customer() {
    return (
        <section className="bg-[url('/images/Gradient.png')] bg-cover bg-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 items-center py-14">
            <div className="relative h-40 sm:h-50 md:h-70 lg:h-50">
                <Image
                    src="/images/Figure → testimonial-image1.png.png"
                    alt="Customer"
                    width={50}
                    height={50}
                    className="absolute right-1/3 md:bottom-[-20px] md:right-[30%]" 
                />
                <Image
                    src="/images/Figure → testimonial-image3.png.png"
                    alt="Customer"
                    width={50}
                    height={50}
                    className="absolute right-5  bottom-8 md:top-5 md:right-[30%]"
                />
                <Image
                    src="/images/Figure → testimonial-image2.png.png"
                    alt="Customer"
                    width={50}
                    height={50}
                    className="absolute left-1/4 sm:left-1/4 bottom-5 md:right-6 md:top-[-20px] md:transform -translate-x-1/2"                
                />
                <Image
                    src="/images/Figure → testimonial-image4.png.png"
                    alt="Customer"
                    width={50}
                    height={50}
                    className="absolute left-6 md:right-0 md:bottom-4"
                />
            </div>

            <div className="text-center px-4">
                <h1 className={`${berkshireSwash.className} text-[#0F0200] text-xl sm:text-2xl md:text-3xl`}>Hear from Our <span className="text-[#F83D8E]">Happy Ice Cream</span> Lovers</h1>
                <div className={`${archivo.className} text-xs md:text-sm lg:text-base py-8`}>
                    <p>Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas as pernatur aut odit aut fugit, sed beatae vitae dicta ripiscing elit, sed do euismod tempor incidunt. Labore et dolore magna aliqua ut enim ad minim adipiscing elit, sed do euismod tempor incidunt aut labore.</p>
                    <h6 className="text-[#F83D8E]">Kevin Andrew</h6>
                    <p className="text-[#646464] py-1">Happy Customer</p>
                </div>
                <div className="text-center">
                    {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} style={{ color: '#fbab2a', marginRight: '5px' }} />
                    ))}
                </div>
                <div className="flex gap-2 justify-center items-center py-6">
                    <button className="bg-gray-300 rounded-full w-3 h-3 flex items-center justify-center" />
                    <button className="bg-[#F83D8E] rounded-full w-4 h-4 flex items-center justify-center" />
                    <button className="bg-gray-300 rounded-full w-3 h-3 flex items-center justify-center" />
                </div>
            </div>

            <div className="relative h-40 sm:h-50 md:h-70 lg:h-50">
    <Image
        src="/images/Figure → testimonial-image5.png.png"
        alt="Customer"
        width={50}
        height={50}
        className="absolute left-5 bottom-1 md:left-4 md:bottom-[-20px]" 
    />
    <Image
        src="/images/Figure → testimonial-image7.png.png"
        alt="Customer"
        width={50}
        height={50}
        className="absolute right-1/3 bottom-2 md:left-6 md:top-5" 
    />
    <Image
        src="/images/Figure → testimonial-image6.png.png"
        alt="Customer"
        width={50}
        height={50}
        className="absolute right-1/2 md:left-1/2 md:top-[-20px] transform -translate-x-1/2" 
    />
    <Image
        src="/images/Figure → testimonial-image8.png.png"
        alt="Customer"
        width={50}
        height={50}
        className="absolute right-5 md:right-1/3 md:bottom-0"
    />
</div>
        </section>
    );
}
