import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const Swipper = () => {
  return (
    <section className='h-[800px] max-h-[800px]'>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      loop={true}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><Image src="/obras1.jpg" alt="obra1" width={1400} height={800} className='mx-auto h-full object-cover lg:object-contain'/></SwiperSlide>
      <SwiperSlide><Image src="/obras2.jpg" alt="obra2" width={1400} height={800} className='mx-auto h-full object-cover lg:object-contain'/></SwiperSlide>
      <SwiperSlide><Image src="/obras3.jpg" alt="obra3" width={1400} height={800} className='mx-auto h-full object-cover lg:object-contain'/></SwiperSlide>
      <SwiperSlide><Image src="/obras4.jpeg" alt="obra4" width={1400} height={800} className='mx-auto h-full object-cover lg:object-contain'/></SwiperSlide>
      <SwiperSlide><Image src="/obras5.jpg" alt="obra5" width={1400} height={800} className='mx-auto h-full object-cover lg:object-contain'/></SwiperSlide>
      <SwiperSlide><Image src="/obras6.jpg" alt="obra6" width={1400} height={800} className='mx-auto h-full object-cover lg:object-contain'/></SwiperSlide>
      <SwiperSlide><Image src="/obras7.jpg" alt="obra7" width={1400} height={800} className='mx-auto h-full object-cover lg:object-contain'/></SwiperSlide>
    </Swiper>
    </section>
  );
};
export default Swipper;
