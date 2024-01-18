import "@/app/styles/globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "jrTilak | Full Stack Developer",
  description:
    "🙋‍♂️ Greetings! I'm Tilak Thapa(jrTilak), a passionate web developer from Dang, Nepal. I specialize web development in React and Next.js. I'm also a huge fan of open-source. I'm currently looking for opportunities to work as a Full Stack Developer.",
  authors: [
    {
      name: "Tilak Thapa",
    },
  ],
  category: "Personal Website",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
      sizes: "16x16",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "manifest",
      url: "/site.webmanifest",
    },
  ],
  keywords: [
    "Tilak Thapa",
    "Thapa Tilak",
    "Tilak",
    "Thapa",
    "jrTilak",
    "thapatilak",
    "thapatilak.com.np",
    "jrtilak.dev",
    "programmer",
    "developer",
    "web developer",
    "full stack developer",
    "full-stack developer",
    "fullstack developer",
    "react developer",
    "next.js developer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "jrTilak | Full Stack Developer",
    description:
      "🙋‍♂️ Greetings! I'm Tilak Thapa(jrTilak), a passionate web developer from Dang, Nepal. I specialize web development in React and Next.js. I'm also a huge fan of open-source. I'm currently looking for opportunities to work as a Full Stack Developer.",
    images: [
      {
        url: "/jrtilak.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
        storageKey="theme"
      >
        <body className="h-full w-full">
          {children}
          <Toaster position="top-right" />
        </body>
      </ThemeProvider>
    </html>
  );
}
