/* eslint-disable react/prop-types */
import {Pagination} from 'swiper/modules'
import { SwiperSlide,Swiper } from "swiper/react";
import PopularCard from "../Share/Card/PopularCard";
import 'swiper/css';
import 'swiper/css/pagination';
const PopularSwiper = ({cards}) => {
  return (
    <div>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={2}
        pagination={{ clickable: true }}
      >
        {cards?.slice(0, 20)?.map((card, index) => (
          <SwiperSlide key={index} className="pb-5 lg:pb-10">
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
