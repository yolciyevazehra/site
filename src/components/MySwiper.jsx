import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slideimg from '../assets/slider-bg.jpg';
import "../style.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

function MySwiper() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full h-[550px] flex items-center">
            <img src={slideimg} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="relative z-10 max-w-xl px-6 md:px-16 text-left">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-rose-500 mb-2">
                Sale 20% Off
              </h2>
              <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-slate-900 mb-4">
                On Everything
              </h1>
              <p className="text-sm md:text-base text-slate-700 mb-6 leading-relaxed">
                Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
              </p>
              <a
                href="#"
                className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-md transition-all shadow-md"
              >
                Shop Now
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[550px] flex items-center">
            <img src={slideimg} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="relative z-10 max-w-xl px-6 md:px-16 text-left">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-rose-500 mb-2">
                Sale 20% Off
              </h2>
              <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-slate-900 mb-4">
                On Everything
              </h1>
              <p className="text-sm md:text-base text-slate-700 mb-6 leading-relaxed">
                Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
              </p>
              <a
                href="#"
                className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-md transition-all shadow-md"
              >
                Shop Now
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[550px] flex items-center">
            <img src={slideimg} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="relative z-10 max-w-xl px-6 md:px-16 text-left">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-rose-500 mb-2">
                Sale 20% Off
              </h2>
              <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-slate-900 mb-4">
                On Everything
              </h1>
              <p className="text-sm md:text-base text-slate-700 mb-6 leading-relaxed">
                Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
              </p>
              <a
                href="#"
                className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-md transition-all shadow-md"
              >
                Shop Now
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default MySwiper;