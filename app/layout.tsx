import "@/public/styles/style.scss";
import CustomCursor from "@/ui/CustomCursor";
import ScrollToTop from "@/ui/ScrollToTop";
import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import "remixicon/fonts/remixicon.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--poppins-font",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--open-sans-font",
});

export const metadata: Metadata = {
  title: "Bellcom - Home ",
  description: "Welcome to Bellcom"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`__variable_4a3e9c ${poppins.variable} ${openSans.variable}`}>
        
        {children}
 
      </body>
    </html>
  );
}
