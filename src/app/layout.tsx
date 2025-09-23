import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChatWidget } from "@/components/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Desenrola",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} overflow-x-hidden`}>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
