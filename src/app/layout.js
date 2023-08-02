import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Relish Developers",
  description: "Turning your buisness digital",
};

export const dynamicParams = false;


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="calendly"></div>
        {children}
      </body>
    </html>
  );
}
