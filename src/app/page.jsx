import Image from "next/image";
import { SwiperSlide } from "./components/swiperSlide";
import { TrendingCard } from "./components/trendingCard";
import { TopAiring } from "./components/topAiring";

export default function Home() {
  return (
    <div>
      <div>
        <SwiperSlide />
      </div>
      <div className=" flex justify-center mt-[30px]">
        <Image width={728} height={90} src="https://via.placeholder.com/728x90" />
      </div>
      <div className="w-[1440px] mx-auto">
        <div className="mt-[16px] mb-[24px] ml-[25px]">
          <p className="text-prime-color font-[600] text-[22px] leading-[28px]">Trending</p>
          </div>

      <div className="grid grid-cols-6 gap-5 ml-[23px]">
        <div>
          <TrendingCard title="One piece" ranking={1} image={"https://via.placeholder.com/100x200"}/>
        </div>
        <div>
          <TrendingCard title="One piece" ranking={2} image={"https://via.placeholder.com/100x200"}/>
        </div>
        <div>
          <TrendingCard title="One piece" ranking={3} image={"https://via.placeholder.com/100x200"}/>
        </div>
        <div>
          <TrendingCard title="One piece" ranking={4} image={"https://via.placeholder.com/100x200"}/>
        </div>
        <div>
          <TrendingCard title="One piece" ranking={5} image={"https://via.placeholder.com/100x200"}/>
        </div>
        <div>
          <TrendingCard title="One piece" ranking={6} image={"https://via.placeholder.com/100x200"}/>
        </div>
      </div>
      </div>
      <div>
        <TopAiring />
      </div>
      </div>
  );
}
