import { useEffect, useState } from "react";
import Carousel from "../../Component/Home/Carousel";
import Reviews from "../../Component/Home/Reviews";
import Banner from "../../Component/Share/Banner/Banner";
import MediaCard from "../../Component/Share/Card/MediaCard";
import PopularCard from "../../Component/Share/Card/PopularCard";
import Categories from "../../Component/Share/Categories/Categories";
import Heading from "../../Component/Share/Heading/Heading";
import Navbar from "../../Component/Share/Navbar/Navbar";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';


const Home = () => {
  //testing swiperslide state
  const [card, setCard] = useState([]);

  //useEffect
  useEffect(() => {
    fetch("./card.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);



  return (
    <div className="">
      <Navbar></Navbar>
      <Carousel></Carousel>
      <div className="px-7">
        {/* heading */}
        <Heading text={"Browse By Category"}></Heading>

        {/* categories section */}
        <section className="flex justify-around gap-10 lg:gap-0 items-center py-5 overflow-x-auto ">
          <Categories text={"categories-1"}></Categories>
          <Categories text={"categories-2"}></Categories>
          <Categories text={"categories-3"}></Categories>
          <Categories text={"categories-4"}></Categories>
          <Categories text={"categories-5"}></Categories>
          <Categories text={"categories-6"}></Categories>
        </section>

        {/* popular venue section */}
        <section>
          <Heading text={"Popular Venue"} seeAll={"View All (100)"}></Heading>

          {/* swperSlide */}
          <Swiper
          modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={2}
            pagination={{clickable:true}} 

          >
            {card.slice(0,20)?.map((card, index) => (
              <SwiperSlide key={index} className="pb-5 lg:pb-10">
                <PopularCard image={card.image} name={card.name} price={card.price}>
                </PopularCard>
              </SwiperSlide>
              
            ))}
          </Swiper>
          
        </section>

        {/* shared banner section */}
        <section className="flex justify-center items-center h-fit">
          <Banner></Banner>
        </section>

        {/* Featured venus section*/}
        <section>
          <Heading
            text={"Featured Venue"}
            subHeading={"Lower price user Choice"}
          ></Heading>
         <Swiper
          modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={2}
            pagination={{clickable:true}} 
           
          >
            {card.slice(0,20)?.map((card, index) => (
              <SwiperSlide key={index} className="pb-5 lg:pb-10">
                <PopularCard image={card.image} name={card.name} price={card.price}>
                </PopularCard>
              </SwiperSlide>
              
            ))}
          </Swiper>
        </section>

        {/* reviews section */}

        <section>
          <Heading text={"Reviews"}></Heading>
          <Reviews
            user_name={"Tanvir"}
            user_image={"https://source.unsplash.com/60x60/?men"}
            review={
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected"
            }
          ></Reviews>
        </section>

        {/* latest media section */}
        <section className="mb-10">
          <Heading text={"Lates media"} seeAll={"view All(250)"}></Heading>
          <div className="flex  flex-col lg:flex-row  justify-center items-center gap-10">
            <MediaCard></MediaCard>
            <MediaCard></MediaCard>
            <MediaCard></MediaCard>
            <MediaCard></MediaCard>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
