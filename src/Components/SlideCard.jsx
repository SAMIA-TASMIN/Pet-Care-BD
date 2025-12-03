import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { div } from "framer-motion/client";

const SlideCard = ({ data }) => {
  return (

    <div>
      <div className="max-w-7xl mx-auto py-10">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="rounded-2xl shadow-xl  h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px]"
        >
         {
            data.map(img=> <SwiperSlide>
            <img
              src={img.image}
              alt="Pet Grooming"
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>)
         }

         

          
        </Swiper>
      </div>
    </div>
  );
};

export default SlideCard;
