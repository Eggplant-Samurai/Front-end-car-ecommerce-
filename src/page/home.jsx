import Slide from "../components/components_home/slide";
import WhyMe from "../components/components_home/why_me";
import CarBrands from "../components/components_home/CarBrands";
import ScollNewCar from "../components/components_home/scollNewcar";
import { useRef, useEffect,useState } from "react";
import tokyoDrift from "../audio/tokyo drift.aac";
import { Search } from "../components/champ/search";
import { SearchMain } from "../components/champ/searchMain";
import Banner from "../components/components_home/banner";
import ScrollRandom from "../components/components_home/scrollRandom";

function Home() {
  const audioRef = useRef(null)



  
  // useEffect(() => {
  //   audioRef.current.play().catch(error => {
  //     console.log('Error playing audio:', error);
  //   });
  // }, []);

  return (
    <div className="flex justify-center">
      {/* <audio ref={audioRef} src={tokyoDrift} /> */}
      <div className="w-full">
        <Slide />
        <SearchMain />
        <div className="flex justify-center">
          <div className="w-[1128px]">
            <CarBrands />
            <Banner />
            <ScrollRandom />
            <ScollNewCar />
          </div>
        </div>
        <WhyMe />
      </div>
    </div>
  );
}

export default Home;