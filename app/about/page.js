import AboutPage from "@/components/Aboutus";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { generateMetaTags } from "@/lib/ultimateSEO";

// 🚀 ABOUT PAGE SEO METADATA 🚀
export const metadata = generateMetaTags("about");

export default function About() {
  return (
    <>
      <Header />

      <AboutPage />
     
      <Footer />
    </>
  );
}