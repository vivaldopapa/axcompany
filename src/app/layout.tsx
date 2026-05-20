import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AXCompany — Tráfego Pago, Branding & Copywriting",
  description: "Soluções de tráfego pago, branding estratégico e copywriting desenhados para acelerar o seu crescimento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
