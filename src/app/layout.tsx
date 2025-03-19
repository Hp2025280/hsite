
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "300"]
});

export const metadata: Metadata = {
  title: "H Performance",
  description: "H Performance: Soluções integradas de marketing e automação que impulsionam transformam leads em clientes e processos em resultados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.className} ${montserrat.className} antialiased`}>
      <body>
        {children}
      </body>
    </html>
  );
}
