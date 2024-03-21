import Footer from "@/components/Footer/Footer";
import NavbarComp from "@/components/Navbar/NavbarComp";
import Script from "next/script";
export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarComp />
      <main className="mt-[65px] sm:mt-[80px] h-full w-full px-4 sm:px-8 max-w-[1300px] mx-auto ">
        {children}
      </main>
      <Footer />
    </>
  );
}
