import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Suspense } from "react";
import MenuContainer from "./components/Menu/MenuContainer";
import { Toaster } from "react-hot-toast";

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
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#888',
              color: '#fff',
              padding: "1rem 3rem",
              boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            },
            success: {
              style: {
                background: '#5a5',
                border: '2px solid green',
              },
            },
            error: {
              style: {
                background: '#a55',
                border: '2px solid darkred',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
