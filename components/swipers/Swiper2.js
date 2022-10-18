import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export const Swiper2 = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="d-flex justify-content-center">
            <Image
            alt="a"
              width={1920}
              height={1159}
              layout="intrinsic"
              className="imagen"
              src="/img/barco-inidep.png"
            ></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex justify-content-center">
            <Image
            alt="a"
              width={1920}
              height={1159}
              layout="intrinsic"
              className="imagen"
              src="/img/barco-inidep2.png"
            ></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex justify-content-center">
            <Image
            alt="a"
              width={1920}
              height={1159}
              layout="intrinsic"
              className="imagen"
              src="/img/barco-inidep3.png"
            ></Image>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Swiper2;
