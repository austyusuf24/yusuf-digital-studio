import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050816] text-white overflow-x-hidden">

      <ParticlesBackground />

      <div className="relative z-10">

        <Navbar />

        <div className="max-w-[1400px] mx-auto px-6">

          <Hero />

            <About />
          

         
            <Services />
          

         
            <TechStack />
          

         
            <Portfolio />
          

         
            <Pricing />
          

         
            <Testimonials />
          

         
            <Contact />
          

        </div>

        <Footer />

        <WhatsApp />

      </div>

    </main>
  );
}