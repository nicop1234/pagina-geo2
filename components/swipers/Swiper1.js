import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { motion } from "framer-motion"
import Link from "next/link";


import "swiper/css";

import { Autoplay } from "swiper";

export const Swiper1 = () =>{
    return (
        <>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
        modules={[Autoplay,]}
        className="mySwiper"
      >
        <SwiperSlide>
            <motion.div
            initial={{y:100,x:20}}
            animate={{y:-100,x:0}}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 2
            }}
            viewport={{once:false}}
            >
              <a href="#merluza">
                <Image
                alt="a"
                className="imagen"
                width={1920}
                height={1159}
                layout='intrinsic'
                    src='/img/merluza.png'
                  />
              </a>
            </motion.div>
        </SwiperSlide>
        <SwiperSlide>
            <motion.div
            initial={{ y:100}}
            animate={{ y:-100}}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 2
            }}
            viewport={{once:false}}
            >
              <a href="#Anchoita">
                <Image
                alt="a"
                className="imagen"
                width={1920}
                height={1159}
                layout='intrinsic'
                    src='/img/anchoita.png'
                  />
              </a>
            </motion.div>
        </SwiperSlide>
        <SwiperSlide>
            <motion.div
            initial={{ y:100}}
            animate={{ y:-100}}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 2
            }}
            viewport={{once:false}}
            >
                <a href="#Anchoita">
                  <Image 
                  alt="a"
                  className="imagen"
                  width={1920}
                  height={1159}
                  layout='intrinsic'
                    src='/img/caballa.png'
                  />
                </a>
            </motion.div>
        </SwiperSlide>
        <SwiperSlide>
        <motion.div
        initial={{ y:100}}
            animate={{ y:-100}}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 2
            }}
            viewport={{once:false}}
        >
                <a href="#merluza-cola">
                  <Image
                  alt="a"
                  className="imagen"
                  width={1920}
                  height={1159}
                  layout='intrinsic'
                    src='/img/merluza-cola.png'
                  />
                </a>
            </motion.div>
        </SwiperSlide>
        <SwiperSlide>
        <motion.div
        initial={{ y:100}}
            animate={{ y:-100}}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 2
            }}
            viewport={{once:false}}
        >
                <a href="#merluza-cola">
                  <Image
                  alt="a"
                  className="imagen"
                  width={1920}
                  height={1159}
                  layout='intrinsic'
                    src='/img/corvina-blanca.png'
                  />
                </a>
            </motion.div>
        </SwiperSlide>
        <SwiperSlide>
        <motion.div
        initial={{ y:100}}
            animate={{ y:-100}}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 2
            }}
            viewport={{once:false}}
                >
                  <a href="#merluza">
                    <Image
                    alt="a"
                    className="imagen"
                    width={1920}
                    height={1159}
                    layout='intrinsic'
                    src='/img/merluza.png'
                  />
                  </a>
                
            </motion.div>
        </SwiperSlide>
      </Swiper>
        </>
    )
}
export default Swiper1
