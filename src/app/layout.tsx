import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "300"]
});

export const metadata: Metadata = {
  title: "H - Data-driven Solutions",
  description: "Transform data into growth with our customized solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.className} antialiased`}>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
