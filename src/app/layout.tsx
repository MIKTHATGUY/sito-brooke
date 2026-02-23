import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "THE BROOKE TIMES - War Sonnets",
  description: "A newspaper styled analysis of Rupert Brooke's sonnets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lora.variable} font-serif antialiased bg-[#f4f1ea] text-[#1a1a1a] overflow-x-hidden selection:bg-black selection:text-[#f4f1ea]`}
      >
        {children}
      </body>
    </html>
  );
}
