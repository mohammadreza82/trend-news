import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../../components/Nav/Nav";
import NavBar from "../../components/Nav/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MEGA.news",
  description: "MEGA.news",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
