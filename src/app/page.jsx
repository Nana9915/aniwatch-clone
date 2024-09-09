import Image from "next/image";
import { SwiperSlide } from "./components/swiperSlide";

export default function Home() {
  return (
    <main>
      <section>
      <div>
        <SwiperSlide />
      </div>
      <div className=" flex justify-center mt-[30px]">
        <Image width={728} height={90} src="https://via.placeholder.com/728x90" />
      </div>
      </section>
    </main>
  );
}
