import NavBar from "@/component/NavBar";
import "../styles/index.scss";
import { Inter } from "next/font/google";
import Header from "@/component/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "accueil",
  description: "page d'accueil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <NavBar />
        <Header />
        <section>{children}</section>
      </body>
    </html>
  );
}
