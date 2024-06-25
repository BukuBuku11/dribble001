import "./globals.css";
import { Lora } from "next/font/google";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Login from "./components/Login";
import { DribbleLogo } from "./svgs";
import Mainnav from "./components/Mainnav";
import { GoogleOAuthProvider } from '@react-oauth/google';

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
      <body className={Loraa.className}>
        <div className="bg-[#f8f7f4] w-auto h-auto relative">
      <navbar className="flex items-center justify-between mx-6 relative">
      <Mainnav/>
        <DribbleLogo className="size-24"/>
        <ul className="flex gap-6 items-center">
          <li><Search /></li>
          <li>
          <GoogleOAuthProvider clientId="985823329913-taihlmsa4bom934loeh6dbh5tbnumk82.apps.googleusercontent.com">
            <Login/>
         </GoogleOAuthProvider>  
          </li>
        </ul>
      </navbar>
        {children}
        <Footer/>
        </div>
      </body>
      
    </html>
  );
}
