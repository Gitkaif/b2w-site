import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProfilePage from "@/components/Profile";

// 🚀 PROFILE PAGE SEO METADATA 🚀
export const metadata = {
  title: "Profile - B2W Infotech",
  description: "Manage your B2W Infotech account profile and settings.",
  robots: {
    index: false,
    follow: false,
  }
};

export default function Profile() {
  return (
    <>
      <Header />
      <ProfilePage/>
      <Footer />
    </>
  );
}