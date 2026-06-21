import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#050816]/70 border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
            <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
                <Image
                    src="/logo.png"
                    alt="Yusuf Digital Studio"
                    width={70}
                    height={70}
                />

                <div className="hidden md:flex gap-8 text-white">
                    <a href="#" className="hover:text-purple-400 transition-all duration-300">Home</a>
                    <a href="#about" className="hover:text-purple-400 transition-all duration-300">About</a>
                    <a href="#services" className="hover:text-purple-400 transition-all duration-300">Services</a>
                    <a href="#portfolio" className="hover:text-purple-400 transition-all duration-300">Portfolio</a>
                    <a href="#pricing" className="hover:text-purple-400 transition-all duration-300">Pricing</a>
                    <a href="#contact" className="hover:text-purple-400 transition-all duration-300">Contact</a>
                </div>

                <a
  href="tel:+918438657768"
  className="
    px-5
    py-3
    rounded-xl
    bg-gradient-to-r
    from-blue-500
    to-purple-600
    hover:scale-105
    transition-all
    duration-300
  "
>
  Get Free Consultation
</a>

            </div>
        </nav>
    );
}