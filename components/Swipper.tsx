import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"
import Image from "next/image"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

const Swipper = () => {
  return (
    <section className=" w-full overflow-x-hidden h-[350px] flex items-center overflow-y-hidden">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={5}
        className="h-[600px] w-full]"
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <figure className="w-full h-[600px]">
            <Image
              src="/grandesobras1.jpg"
              alt="obra1"
              width={1400}
              height={400}
              className="mx-auto h-full object-contain "
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="w-full h-[600px]">
            <Image
              src="/grandesobras2.jpg"
              alt="obra1"
              width={1400}
              height={400}
              className="mx-auto h-full object-contain "
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="w-full h-[600px]">
            <Image
              src="/electricidad1.jpg"
              alt="obra1"
              width={1400}
              height={400}
              className="mx-auto h-full object-contain "
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="w-full h-[600px]">
            <Image
              src="/electricidad2.jpg"
              alt="obra1"
              width={1400}
              height={400}
              className="mx-auto h-full object-contain "
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="w-full h-[600px]">
            <Image
              src="/plomeria1.jpg"
              alt="obra1"
              width={1400}
              height={400}
              className="mx-auto h-full object-contain "
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="w-full h-[600px]">
            <Image
              src="/plomeria2.jpg"
              alt="obra1"
              width={1400}
              height={400}
              className="mx-auto h-full object-contain "
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="w-full h-[600px]">
            <Image
              src="/plomeria3.jpeg"
              alt="obra1"
              width={1400}
              height={400}
              className="mx-auto h-full object-contain "
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="w-full h-[600px]">
            <Image
              src="/plomeria4.jpeg"
              alt="obra1"
              width={1400}
              height={800}
              className="mx-auto h-full object-contain "
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="w-full h-[600px]">
            <Image
              src="/obras3.jpg"
              alt="obra1"
              width={1400}
              height={400}
              className="mx-auto h-full object-contain "
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="w-full h-[600px]">
            <Image
              src="/obras4.jpeg"
              alt="obra1"
              width={1400}
              height={800}
              className="mx-auto h-full object-contain "
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="w-full h-[600px]">
            <Image
              src="/obras5.jpg"
              alt="obra1"
              width={1400}
              height={800}
              className="mx-auto h-full object-contain "
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="w-full h-[600px]">
            <Image
              src="/obras6.jpg"
              alt="obra1"
              width={1400}
              height={800}
              className="mx-auto h-full object-contain "
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="w-full h-[600px]">
            <Image
              src="/obras7.jpg"
              alt="obra1"
              width={1400}
              height={800}
              className="mx-auto h-full object-contain "
            />
          </figure>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
export default Swipper
