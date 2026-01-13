import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata = {
  title: "Andy Avendaño - Developer Web",
  description: "Portfolio de Andy - Desarrollador Web",
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
