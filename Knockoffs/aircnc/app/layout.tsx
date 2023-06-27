import "./globals.css";
import { Inter } from "next/font/google";
import { Nunito } from "next/font/google";
import Navbar from "./component/navbar/Navbar";
import ClientOnly from "./component/ClientOnly";

import RegisterModal from "./component/modals/RegisterModal";
import RentModal from "./component/modals/RentModal";
import LoginModal from "./component/modals/LoginModal";

import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";
import UserMenu from "./component/navbar/UserMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aircnc",
  description: "Aircnc is a clone of Airbnb",
};

const font = Nunito({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
