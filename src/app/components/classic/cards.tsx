import Image from "next/image";

interface CardProps {
    bgColor: string;
    figureImage: string;
    title: string;
    description: string;
    price: string;
}

export default function Cards({
    bgColor,
    figureImage,
    title,
    description,
    price,
}: CardProps) {
    return (
        <div className={`bg-white py-2 px-3 sm:p-4 rounded-2xl shadow-[0px_4px_8px_rgba(0,0,0,0.1)]`}>
            <div className={`relative py-2 sm:p-4 flex justify-center items-center ${bgColor} rounded-xl`}>
                <Image
                    src="/images/Background.png"
                    alt="Background"
                    width={40}
                    height={40}
                    className="absolute top-3 left-3 w-8 h-8"
                />
                <Image
                    src={figureImage}
                    alt="Figure2"
                    width={180}
                    height={180}
                    className="md:h-[120px] w-auto object-cover"
                />
            </div>

            <div className="flex justify-between text-black pt-4 pb-2  text-sm sm:text-base md:text-lg font-bold">
                <h4>
                    {title}
                </h4>
                <h6 className="flex gap-2 md:gap-3 pr-4 sm:pr-2">
                    <Image src="/images/Symbol.png" alt="Star" width={20} height={20} className="w-5 h-5" />
                    4.9/5
                </h6>

            </div>
            <p className="text-[#646464] text-sm md:text-base font-light">
                {description}
            </p>
            <div className="flex justify-between items-center py-2 sm:mb-3">
                <h5 className="text-[#F83D8E] text-sm sm:text-base md:text-lg font-bold">
                    {price}
                </h5>
                <Image src="/images/Link (1).png" alt="cart" width={30} height={30} />
            </div>
        </div>
    );
}

