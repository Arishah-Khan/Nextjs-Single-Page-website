import Logo from "./logo";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneFlip, faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Archivo } from "next/font/google";

const archivo = Archivo({
    subsets: ["latin"],
    display: "swap",
    weight: "600",
});

export default function Footer() {
    return (
        <footer className="bg-[#683292] relative p-5 md:pt-16">
            <Image
                src="/images/footer-image.png.png"
                alt="cartoon"
                width={100}
                height={150}
                className="absolute left-0 bottom-0"
            />
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${archivo.className} text-white justify-center items-center md:px-8 pt-4 pb-10`}>
                <div className="flex items-center justify-center">
                    <Logo />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-lg font-bold pl-5 pb-2">Navigation</h3>
                    <div className="flex flex-row text-[#CFB6E2] gap-4">
                        <ul className="list-disc space-y-1 pl-5">
                            <li className="marker:text-[#F83D8E]">Home</li>
                            <li className="marker:text-[#F83D8E]">About</li>
                            <li className="marker:text-[#F83D8E]">Shop</li>
                        </ul>
                        <ul className="list-disc space-y-1 pl-5">
                            <li className="marker:text-[#F83D8E]">Products</li>
                            <li className="marker:text-[#F83D8E]">Blog</li>
                            <li className="marker:text-[#F83D8E]">Contact</li>
                        </ul>
                    </div>

                </div>
                <div className="flex flex-col justify-center pl-6 sm:pl-10 md:pl-0 mx-auto">
                    <div className="flex items-center gap-x-3 ">
                        <div>
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                style={{ color: '#ffffff' }}
                                className="rounded-full p-3 bg-[#77469d]"
                            />
                        </div>
                        <div>
                            <h4 className="py-1">Address:</h4>
                            <p className="text-[#CFB6E2]">121 King Street Melbourne, 3000, Australia</p>
                        </div>
                    </div>
                    <div className="flex items-center  gap-x-3">
                        <div>
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                style={{ color: '#ffffff' }}
                                className="rounded-full p-3 bg-[#77469d]"
                            />
                        </div>
                        <div>
                            <h4 className="py-1">Email:</h4>
                            <p className="text-[#CFB6E2]">info@example.com</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="flex mb-3 justify-center items-center">
                            <div>
                                <FontAwesomeIcon icon={faPhoneFlip} style={{ color: '#ffffff', fontSize: "28px" }} />
                            </div>
                            <div className="ml-2">
                                <h3>+123456780123</h3>
                                <p className="text-[#CFB6E2] py-2">Got Questions? Call us 24/7</p>
                            </div>
                        </div>
                        <div className="flex space-x-3 justify-center items-center">
                            <div>
                                <FontAwesomeIcon
                                    icon={faFacebookF}
                                    style={{ color: '#ffffff' }}
                                    className="rounded-full px-4 py-3 bg-[#77469d]"
                                />
                            </div>
                            <div>
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    style={{ color: '#ffffff' }}
                                    className="rounded-full px-4 py-3 bg-[#77469d]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5">
                <p className="text-[#CFB6E2]">Copyright © 2024 BlackRise Themes Inc All rights reserved.</p>
            </div>
        </footer>
    );
}
