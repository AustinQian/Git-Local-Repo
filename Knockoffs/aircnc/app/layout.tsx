import "./globals.css";
import { Inter } from "next/font/google";
import { Nunito } from "next/font/google";
import Navbar from "./component/navbar/Navbar";
import ClientOnly from "./component/ClientOnly";
import Modal from "./component/modals/Modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aircnc",
  description: "Aircnc is a clone of Airbnb",
};

const font = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal isOpen />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
