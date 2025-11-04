import LoginPage from "@/components/Login";
import { generateMetaTags } from "@/lib/ultimateSEO";

// 🚀 LOGIN PAGE SEO METADATA 🚀
export const metadata = {
  title: "Login - B2W Infotech",
  description: "Sign in to your B2W Infotech account to access your dashboard and manage your projects.",
  robots: {
    index: false,
    follow: false,
  }
};

export default function Loginpage() {
    return (
        <>
            <LoginPage />
        </>
    );
}