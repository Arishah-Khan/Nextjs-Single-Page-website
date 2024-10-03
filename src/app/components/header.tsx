import Navbar from "./navbar"
import HeroSection from "./heroSec";



export default function Header() {
    return (
        <header className="bg-[url('/images/Gradient.png')] bg-cover bg-center">
            <Navbar />
            <HeroSection />
        </header>
    );
}
