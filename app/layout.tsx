import type { Metadata } from "next";
import { Vazirmatn, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { content, socials } from "@/lib/content";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: content.fa.meta.title,
  description: content.fa.meta.description,
  keywords: [
    "امیرحسین فلاح",
    "Amirhossein Fallah",
    "توسعه‌دهنده فرانت‌اند",
    "توسعه‌دهنده بک‌اند",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer Iran",
  ],
  authors: [{ name: "Amirhossein Fallah", url: `mailto:${socials.email}` }],
  openGraph: {
    title: content.fa.meta.title,
    description: content.fa.meta.description,
    type: "website",
    locale: "fa_IR",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: content.fa.meta.title,
    description: content.fa.meta.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable} ${jetbrainsMono.variable} font-sans bg-paper text-ink`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
