"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";

import bg from "@/public/homeBackGround.png";
import bg2 from "@/public/homebackground2.jpeg";
import bg3 from "@/public/homeBackGround3.jpg";

function WelcomePageBackground() {
  const photos = [bg, bg2, bg3];
  return (
    <div className="absolute -z-20 h-dvh w-full">
      <Swiper
        className="relative h-full w-full"
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        loop
        speed={1500}
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <Image
              fill
              className="  object-cover object-center"
              placeholder="blur"
              alt="home background"
              src={photo}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default WelcomePageBackground;
