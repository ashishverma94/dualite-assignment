import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header/Component";
import Hero from "./components/HeroSection/Component";
import HeroSecond from "./components/HeroSecond/Component";
import Interior from "./components/Interiors/Component";
import ImageSection from "./components/ImageSection/Component";
import Footer from "./components/Footer/Component";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="px-[10px] py-8 md:px-[100px] ">
      <Header />
      <Hero />
      <h1 className="font-[600] mx-[30px] py-4 text-[34px]">Top Categories </h1>
      <HeroSecond/>
      <h1 className="font-[600] mx-[30px] py-4 text-[34px]">Interior by Urban Nest </h1>
      <Interior/>
      <ImageSection/>
      <Footer/>
    </div>
  );
}

export default App;
