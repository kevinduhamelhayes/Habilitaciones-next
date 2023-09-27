import React from 'react'
import Card1 from './CardPlanos'
import Image from "next/image"
import "swiper/css"
import 'swiper/css/autoplay';
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/effect-fade"
import "swiper/css/autoplay"
import 'swiper/css/zoom';
import "swiper/css/scrollbar"
import { FaArrowRight } from "react-icons/fa";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from "swiper/modules"

import { Swiper, SwiperSlide } from "swiper/react"

import CardTecnicos from './CardTecnicos'
import CardDireccion from './CardDireccion'
import CardHabilitaciones from './CardHabilitaciones'
import CardPlanos from './CardPlanos'

const Cards = () => {
  return (
    <>
                <section className="flex flex-row w-full px-0 md:px-16 my-10 h-[500px] md:h-[700px] items-center">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  breakpoints={{
                    450: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    1280: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                  }}
                  className="h-[500px] md:h-[600px] w-full mb-0 "
                  navigation
                  pagination={{ clickable: true}}
                  autoplay={{
                    delay: 7500,
                    disableOnInteraction: false,
                  }}
                  scrollbar={{ draggable: true }}
                  onSlideChange={() => console.log("slide change")}
                >
        <SwiperSlide className='mx-auto'>
          <CardHabilitaciones className="max-w-[500px] mx-auto w-[500] shadow-xl shadow-slate-700 h-[460px] md:max-w-[370px] md:h-[470px] bg-[#fff] mt-4 text-white transform transition-transform duration-300 ease-in-out lg:hover:scale-105"/>
        </SwiperSlide>
        <SwiperSlide>
          <CardPlanos className="max-w-[500px] mx-auto w-[500] shadow-xl shadow-slate-700 h-[460px] md:max-w-[370px] md:h-[470px] bg-[#111] mt-4 text-white transform transition-transform duration-300 ease-in-out lg:hover:scale-105"/>
        </SwiperSlide>
        <SwiperSlide>
          <CardDireccion className="max-w-[500px] mx-auto w-[500] shadow-xl shadow-slate-700 h-[460px] md:max-w-[370px] md:h-[470px] bg-[#111] mt-4 text-white transform transition-transform duration-300 ease-in-out lg:hover:scale-105" />
        </SwiperSlide>
        <SwiperSlide>
          <CardTecnicos className="max-w-[500px] mx-auto w-[500] shadow-xl shadow-slate-700 h-[460px] md:max-w-[370px] md:h-[470px] bg-[#111] mt-4 text-white transform transition-transform duration-300 ease-in-out lg:hover:scale-105"/>
        </SwiperSlide>
      </Swiper>
    </section>
    </>
  )
}
export default Cards
