import "@/app/styles/globals.css";
import META_DATA from "@/assets/json/metaData";
import Scrollbar from "@/components/Scrollbar/Scrollbar";
import { ThemeProvider } from "@/context/ThemeProvider";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = META_DATA;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
        storageKey="theme"
      > */}
      <body className="h-full w-full">
        {children}
        <Toaster position="top-right" />
        <Scrollbar />
      </body>
      {/* </ThemeProvider> */}
    </html>
  );
}
