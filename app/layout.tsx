import type { Metadata } from "next";
import { Geist, Geist_Mono, Kulim_Park } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kulimPark = Kulim_Park({
  variable: "--font-kulim-park", // Define a CSS variable for Kulim Park
  subsets: ["latin"],
  weight: ["300", "400", "600"], // Adjust weights as needed
});

export const metadata: Metadata = {
  title: {
    default: "Magna Events and Marketing",
    template: "%s | Magna Events and Marketing",
  },
  description:
    "A Marketing company that specializes in event planning, marketing, and providing medical solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kulimPark.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
