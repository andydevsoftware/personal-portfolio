import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata = {
  title: "Andy Avendaño | Frontend Developer",
  description:
    "Frontend Developer especializado en React, Next.js y Tailwind CSS. Portafolio con proyectos web modernos, responsivos y enfocados en UI/UX.",
  openGraph: {
    title: "Andy Avendaño | Frontend Developer",
    description:
      "Frontend Developer especializado en React, Next.js y Tailwind CSS. Portafolio con proyectos web modernos, responsivos y enfocados en UI/UX.",
    url: "https://andydevsoftware.vercel.app/",
    siteName: "Andy Avendaño · Software Developer",
    locale: "es_PE",
    type: "website",
  },

  verification: {
    google: "_BRN5ohpiwBvApGIYjRenjdaPpZm-6dwQQGS0Qykkts",
  },
  icons: {
    icon: "/favicon_dev.ico",
    shortcut: "/favicon_dev.ico",
    apple: "/apple-touch-favicon_dev.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-geist antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
