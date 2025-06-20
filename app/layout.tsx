import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Damay Universe - Elite Community",
  description:
    "An exclusive gangster community where loyalty, respect, and brotherhood define our legacy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${inter.className} bg-black text-white`}
        suppressHydrationWarning
      >
        <div className="min-h-screen flex flex-col bg-black">
          <Header />
          <main className="flex-1 bg-black">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
