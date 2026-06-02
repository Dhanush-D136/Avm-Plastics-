import type { Metadata } from "next";
import { Poppins, Inter, Space_Grotesk, Mukta_Malar, Noto_Sans_Tamil, Hind_Madurai } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const tamil = Mukta_Malar({
  variable: "--font-tamil",
  subsets: ["tamil"],
  weight: ["400", "500", "600", "700"],
});

const notoTamil = Noto_Sans_Tamil({
  variable: "--font-noto-tamil",
  subsets: ["tamil"],
  weight: ["400", "500", "600", "700"],
});

const hindMadurai = Hind_Madurai({
  variable: "--font-hind-madurai",
  subsets: ["tamil"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AVM Plastics | Trusted Plastic & Rope Dealer Since 1986",
  description: "AVM Plastics, Krishnagiri's trusted plastic products, household items, agricultural ropes, borewell ropes, Nandi ropes and utility products dealer since 1986.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${spaceGrotesk.variable} ${tamil.variable} ${notoTamil.variable} ${hindMadurai.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

