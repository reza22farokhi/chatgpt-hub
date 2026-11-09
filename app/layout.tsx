import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({ 
  subsets: ["arabic"],
  weight: ["400", "500", "700", "900"]
});

export const metadata: Metadata = {
  title: "ChatGPT Mastery Hub | مرجع ترفندهای ChatGPT",
  description: "سایت فوق حرفه‌ای آموزش ترفندها و پرامپت‌های ChatGPT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
