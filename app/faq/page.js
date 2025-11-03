import FaqPage from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { generateMetaTags } from "@/lib/ultimateSEO";

// 🚀 FAQ PAGE SEO METADATA 🚀
export const metadata = generateMetaTags("faq");

export default function Faq() {
  return (
    <>
      <Header />
      
      <FaqPage />
     
      <Footer />
    </>
  );
}