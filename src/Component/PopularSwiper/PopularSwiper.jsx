/* eslint-disable react/prop-types */
import {Pagination} from 'swiper/modules'
import { SwiperSlide,Swiper } from "swiper/react";
import PopularCard from "../Share/Card/PopularCard";
import 'swiper/css';
import 'swiper/css/pagination';
const PopularSwiper = ({cards}) => {

  //responsive slide variable
  const isScreen = window.innerWidth > 1440
  const isSmallScreen = window.innerWidth < 375

  return (
    <div>
      <Swiper
        modules={[Pagination]}
        spaceBetween={`${isSmallScreen ? 80 : 20}`}
        slidesPerView={`${isScreen ? 3 : 2}`}
        pagination={{ clickable: true }}
      >
        {cards?.slice(0, 20)?.map((card, index) => (
          <SwiperSlide key={index} className=" lg:pb-10">
            <PopularCard
              image={card.image}
              name={card.name}
              price={card.price}
            ></PopularCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularSwiper;
