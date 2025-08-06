import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });
const description =
  "SRM MUN 2025 - India's premier Model United Nations conference exploring global diplomacy, international relations, and youth leadership";
const ogImages = [
  {
    url: "/srmmun-24-white.png",
    width: 1200,
    height: 630,
    alt: "SRM MUN 2025",
  },
];

export const metadata: Metadata = {
  title: "SRM MUN 2025",
  metadataBase: new URL("https://srmmun2025.com"),
  authors: [
    {
      name: "SRM MUNSOC",
      url: "https://github.com/srm-munsoc",
    },
  ],
  publisher: "SRM MUNSOC",
  category: "education",
  keywords: ["MUN", "Model United Nations", "conference", "diplomacy", "international relations"],
  robots: {
    index: true,
    follow: true,
  },
  description: description,
  openGraph: {
    title: "SRM MUN 2025",
    description: description,
    images: ogImages,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SRM MUN 2025",
    description: description,
    site: "@srm_munsoc",
    creator: "@srm_munsoc",
    images: ogImages,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/symbol-white.png" type="image/png" />
        <Script src="https://tally.so/widgets/embed.js"></Script>
        <Script
          src={`https://cdn-cookieyes.com/client_data/6331baf83b563ec3150ad4bb/script.js`}
          strategy="beforeInteractive"
        ></Script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${montserrat.className} bg-black text-white overflow-x-hidden w-screen items-center justify-center`}
      >
        {" "}
        {/* FIX: Items center and justify-center are enforcing center alignment for everything*/}
        <Header />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
      
    </html>
  );
}
