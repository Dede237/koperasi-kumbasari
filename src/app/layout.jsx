import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import KontakWA from "@/components/KontakWA";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: "--font-poppins"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata = {
  title: {
    default: "Koperasi Kumbasari",
    template: "%s | Koperasi Kumbasari",
  },
  description: "Website Resmi Koperasi Kumbasari",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-light text-dark"
      >
        <Navbar />
        {children}
        <KontakWA/>
        <Footer/>
      </body>
    </html>
  );
}
