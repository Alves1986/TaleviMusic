import type { Metadata } from "next";
import { Playfair_Display, Work_Sans, Space_Mono, Cormorant } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-work-sans",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Destrave no Violão | Talevi Escola de Música",
  description: "Aprenda +100 Acordes e Supere Suas Dificuldades Musicais com Carlos Eduardo Dias Talevi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${playfair.variable} ${workSans.variable} ${spaceMono.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
