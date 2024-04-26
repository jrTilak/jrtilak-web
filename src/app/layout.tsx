import "animate.css";
import "@/app/styles/globals.css";
import META_DATA from "@/assets/json/metaData";
import { ThemeProvider } from "@/context/ThemeProvider";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { GoogleAnalytics } from "@next/third-parties/google";
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
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string}
        />
      </body>
      {/* </ThemeProvider> */}
    </html>
  );
}
