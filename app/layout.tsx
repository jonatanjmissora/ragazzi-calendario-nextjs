import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Suspense } from "react";
import MenuContainer from "./_components/Menu/MenuContainer";
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
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: 'favicon.ico.',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/_assets/favicon-light.ico',
      media: '(prefers-color-scheme: dark)',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col sm:flex-row h-dvh sm:min-h-dvh ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MenuContainer />
        <Suspense fallback={"Loading ..."}>
          {children}
        </Suspense>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#888',
              color: '#fff',
              padding: "1rem 3rem",
              boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            },
            success: {
              duration: 2000,
              style: {
                background: '#5a5',
                border: '2px solid green',
              },
            },
            error: {
              duration: 4000,
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
