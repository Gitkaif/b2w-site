import ContactPage from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { generateMetaTags } from "@/lib/ultimateSEO";

// 🚀 CONTACT PAGE SEO METADATA 🚀
export const metadata = generateMetaTags("contact");

export default function Contact() {
  return (
    <>
      <Header />
      
      <ContactPage />
     
      <Footer />
    </>
  );
}