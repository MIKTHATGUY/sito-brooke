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
  title: "The Brooke Times — Sonetti di Guerra",
  description:
    "Un'analisi in stile giornale d'epoca dei sonetti di guerra di Rupert Brooke: Peace, The Dead, The Soldier. Testo originale inglese con traduzione italiana.",
  metadataBase: new URL("https://sito-brooke.vercel.app"),
  openGraph: {
    title: "The Brooke Times — Sonetti di Guerra",
    description:
      "Un'analisi in stile giornale d'epoca dei sonetti di guerra di Rupert Brooke con traduzione italiana.",
    url: "https://sito-brooke.vercel.app",
    siteName: "The Brooke Times",
    images: [
      {
        url: "/home.jpg",
        width: 1200,
        height: 630,
        alt: "The Brooke Times — copertina",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Brooke Times — Sonetti di Guerra",
    description:
      "Sonetti di guerra di Rupert Brooke con traduzione italiana interattiva.",
    images: ["/home.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
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
        className={`${playfair.variable} ${lora.variable} font-serif antialiased bg-[#f4f1ea] text-[#1a1a1a] overflow-x-hidden selection:bg-black selection:text-[#f4f1ea]`}
      >
        {children}
      </body>
    </html>
  );
}
