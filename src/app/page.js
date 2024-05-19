"use client"
import Search from "./components/Search";
import Login from "./components/Login";
import Ham from "./components/Ham";
import FirstBody from "./components/FirstBody";
import { Hamburger, DribbleLogo } from "./svgs";
import Mainnav from "./components/Mainnav";
import { useState } from "react";
import SecondBody from "./components/SecondBody";
import Cardss from "./components/Cardss";
import Footer from "./components/Footer";
import ThirdBody from "./components/ThirdBody";
import Slider from "./components/Slider";

export default function Home() {
  const [isOpen, makeOpen] = useState(false);
  function toggleMenu(){
    makeOpen(!isOpen);
  }
  return (
    <div className="bg-[#f8f7f4] w-auto h-auto relative">
      {/*--- Navigation Bar ---*/}
      <navbar className="flex items-center justify-between mx-6 relative">
        <button onClick={toggleMenu} className="md:hidden">
          <Hamburger className='size-6'/>
        </button>
        <Ham isOpen={isOpen}/>
        <DribbleLogo className="size-24"/>
        <Mainnav/>
        <ul className="flex gap-6 items-center">
          <li><Search /></li>
          <li><Login/></li>
        </ul>
      </navbar>
      <Ham/>
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
  );
}
