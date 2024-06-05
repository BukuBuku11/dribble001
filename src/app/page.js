"use client"
import Search from "./components/Search";
import Login from "./components/Login";
import FirstBody from "./components/FirstBody";
import { DribbleLogo } from "./svgs";
import Mainnav from "./components/Mainnav";
import SecondBody from "./components/SecondBody";
import Cardss from "./components/Cardss";
import Footer from "./components/Footer";
import ThirdBody from "./components/ThirdBody";
import Slider from "./components/Slider";
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function Home() {
  return (
    <>
    <div className="bg-[#f8f7f4] w-auto h-auto relative">
      {/*--- Navigation Bar ---*/}
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
      {/* --- Main Body --- */}
      <section>
        <FirstBody/>
        <marquee behavior="alternate" onbounce>
          <Slider/>
        </marquee>
        <SecondBody/>
        <Cardss/>
        <ThirdBody/>
      </section>
      <foot>
      <Footer/>
      </foot>
    </div>
    </>
  );
}
