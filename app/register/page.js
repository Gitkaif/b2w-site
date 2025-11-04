import RegisterPage from "@/components/Register";
import { generateMetaTags } from "@/lib/ultimateSEO";

// 🚀 REGISTER PAGE SEO METADATA 🚀
export const metadata = {
  title: "Register - B2W Infotech",
  description: "Create your B2W Infotech account to get started with our software development services.",
  robots: {
    index: false,
    follow: false,
  }
};

export default function Registerpage() {
    return (
        <>
            <RegisterPage />
        </>
    );
}