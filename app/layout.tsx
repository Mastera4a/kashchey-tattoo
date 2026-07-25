import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kashchey Tattoo",
  description:
    "Авторские татуировки в готическом стиле. Индивидуальные эскизы и профессиональный подход.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}