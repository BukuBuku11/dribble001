"use client"
import FirstBody from "./components/FirstBody";
import SecondBody from "./components/SecondBody";
import Cardss from "./components/Cardss";
import ThirdBody from "./components/ThirdBody";
import Slider from "./components/Slider";
import Slider2 from "./components/Slider2";


export default function Home() {
  return (
    <>
    <div className="bg-[#f8f7f4] w-auto h-auto relative">
      <section>
        <FirstBody/>
        <marquee behavior="alternate">
        <Slider/>
        </marquee>
        <SecondBody/>
        <Cardss/>
        <ThirdBody/>
        <marquee behavior="alternate">
        <Slider2/>
        </marquee>
      </section>
    </div>
    </>
  );
}
