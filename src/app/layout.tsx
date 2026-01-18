import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Hemant Kumar | Full-Stack Developer",

  description:
    "Full-stack developer skilled in React, Next.js, Node.js, MongoDB and competitive programming. Building end-to-end web applications.",

  openGraph: {
    title: "Hemant Kumar | Full-Stack Developer",
    description:
      "Full-stack developer | React • Next.js • Node • MongoDB | Competitive Programming | GSSoC'24 Contributor",
    url: "https://hemant28.me",
    siteName: "Hemant Kumar Portfolio",
    images: [
      {
        url: "https://hemant28.me/og.png", 
        width: 1200,
        height: 630,
        alt: "Hemant Kumar Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hemant Kumar | Full-Stack Developer",
    description:
      "Portfolio of Hemant Kumar – Full-stack developer & competitive programmer",
    images: ["https://hemant28.me/og.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white font-sans antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
