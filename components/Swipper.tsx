import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from "swiper/modules"
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
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
const Swipper = () => {
  return (
    <section className=" w-full h-[500px] overflow-hidden flex items-center overflow-y-hidden bg-slate-800">
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
        className="h-[600px] w-full bg-slate-700]"
        navigation
        pagination={{ clickable: true}}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}

        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/grandesobras1.jpg"
              alt="obra1"
              width={1400}
              height={350}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/plomeria1.jpg"
              alt="obra1"
              width={1400}
              height={800}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/plomeria4.jpeg"
              alt="obra1"
              width={1400}
              height={800}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/obras3.jpg"
              alt="obra1"
              width={1400}
              height={800}
              className="block w-full h-[500px] object-cover"
            />
         </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/obras4.jpeg"
              alt="obra1"
              width={1400}
              height={800}
              className="block w-full h-[500px] object-cover"
            />
         </figure >
        </SwiperSlide>
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/obras5.jpg"
              alt="obra1"
              width={1400}
              height={800}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/obras6.jpg"
              alt="obra1"
              width={1400}
              height={800}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/obras7.jpg"
              alt="obra1"
              width={1400}
              height={800}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
export default Swipper
