import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Section from "@/components/Section";
import Process from "@/components/process";
import Testimonials from "@/components/Testimonial";
import LowerSection from "@/components/LowerFooter";
import Footer from "@/components/Footer";
import Collaboration from "@/components/Collaboration";
import WhyChoose from "@/components/Whychoose";
import Services from "@/components/Services";
import Client from "@/components/Client";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import { generateMetaTags } from "@/lib/ultimateSEO";

// 🚀 HOME PAGE SEO METADATA 🚀
export const metadata = generateMetaTags("home");

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Section />
      <Process />
      <WhyChoose />
      <Collaboration />
      <Client />
      <Testimonials />
      <FaqSection />
      <ContactSection />
      <LowerSection />
      <Footer />
    </main>
  );
}