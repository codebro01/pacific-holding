import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Pacific Holdings Limited | Powering Nigeria's Future",
  description: "Pacific Holdings Limited is a diversified Nigerian conglomerate specializing in power generation, freight logistics, and infrastructure. Leading the energy sector with ethical, progressive, and global business practices.",
  keywords: "Pacific Holdings, Nigeria, power generation, energy, freight logistics, infrastructure, Omotosho, Olorunsogo, Ajebandele",
  openGraph: {
    title: "Pacific Holdings Limited | Powering Nigeria's Future",
    description: "A diversified Nigerian conglomerate with an exceptional reputation for ethical, progressive, and global business best practices.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <style>{`
          :root {
            --font-body: ${inter.style.fontFamily}, system-ui, sans-serif;
            --font-heading: ${poppins.style.fontFamily}, system-ui, sans-serif;
          }
        `}</style>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
