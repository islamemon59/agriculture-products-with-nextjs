import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import Providers from "@/Providers/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Agro Product",
    template: "%s | Agro Product",
  },
    icons: {
    icon: '/Frame (5).png',
  },
  keywords: ["Next.js", "React", "JavaScript", "Learning", "Playground"],
  description: "This is my Agro Product first next js project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
        <Navbar />
          <div className="overflow-hidden min-h-screen">{children}</div>
        <Toaster position="top-center" reverseOrder={false} />
        <Footer />
        </Providers>
      </body>
    </html>
  );
}
