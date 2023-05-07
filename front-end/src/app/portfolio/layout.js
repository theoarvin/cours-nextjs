import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "portfolio",
  description: "page du portfolio",
};

export default function RootLayout({ children }) {
  return <div className={inter.className}>{children}</div>;
}
