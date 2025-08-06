import { Geist, Geist_Mono } from "next/font/google";
import "./fonts.css";
import "./font-awesome.min.css";
// import "../micons/micons.css";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Roopesh Makwana - Full Stack Developer",
  description: "Portfolio of Roopesh Makwana, a Full Stack Developer with expertise in PHP, Laravel, Node js, and MySQL.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
