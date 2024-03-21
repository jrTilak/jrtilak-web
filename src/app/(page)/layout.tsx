import Footer from "@/components/Footer/Footer";
import NavbarComp from "@/components/Navbar/NavbarComp";
import NextTopLoader from 'nextjs-toploader';
export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarComp />
      <NextTopLoader />
      <main className="mt-[65px] sm:mt-[80px] h-full w-full px-4 sm:px-8 max-w-[1300px] mx-auto ">
        {children}
      </main>
      <Footer />
    </>
  );
}
