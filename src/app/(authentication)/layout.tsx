import type { Metadata } from "next";
import Script from 'next/script'
import { Geist, Geist_Mono } from "next/font/google";

//-- import style assets
import '@/assets/vendor/bootstrap/css/bootstrap.min.css';
import '@/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '@/assets/css/style.css';
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>
          {children}
        </main>

        <Script src="./assets/vendor/bootstrap/js/bootstrap.bundle.min.js" />
        <Script src="./assets/js/main.js" />
      </body>
    </html>
  );
}
