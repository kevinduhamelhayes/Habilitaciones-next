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
                <section className="flex flex-row w-full  px-0 md:px-16 my-10 h-[500px] md:h-[700px] overflow-hidden  items-center overflow-y-hidden ">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  breakpoints={{
                    450: {
                      slidesPerView: 1,
                      spaceBetween: 10,
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
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
      <FaArrowRight className="text-white text-xl"/><FaArrowRight className="text-white text-xl"/><FaArrowRight className="text-white text-xl"/>
        <SwiperSlide className='w-full h-full'>
        <CardHabilitaciones/>
        </SwiperSlide>
        <SwiperSlide>
        <CardPlanos/>
        </SwiperSlide>
        <SwiperSlide>
        <CardDireccion/>
        </SwiperSlide>
        <SwiperSlide>
        <CardTecnicos/>
        </SwiperSlide>
      </Swiper>
    </section>
    </>
  )
}
export default Cards
