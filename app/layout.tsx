import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Suspense } from "react";
import MenuContainer from "./components/Menu/MenuContainer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ragazzi",
  description: "registro de movimientos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex h-screen overflow-hidden ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MenuContainer />
        <Suspense fallback={"Loading ..."}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
