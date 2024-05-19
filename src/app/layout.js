import "./globals.css";
import { Lora } from "next/font/google";

const Loraa = Lora({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--merriweather'
});

export const metadata = {
  title: "Dribble",
  description: "Discover designs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Loraa.className}>{children}</body>
    </html>
  );
}
