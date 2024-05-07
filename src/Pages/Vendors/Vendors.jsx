import { useEffect, useState } from "react";
import Banner from "../../Component/Share/Banner/Banner";
import Banner_1 from "../../Component/Share/Banner_1/Banner_1";
import Categories from "../../Component/Share/Categories/Categories";
import Heading from "../../Component/Share/Heading/Heading";
import PopularSwiper from "../../Component/PopularSwiper/PopularSwiper";
import ScrollTop from "../../Component/Share/ScrollTop/ScrollTop";

const Vendors = () => {
  //testing swiperslide state
  const [card, setCard] = useState([]);

  //useEffect
  useEffect(() => {
    fetch("./card.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  return (
    <div>
      <Banner_1
        heading="Our Vendors"
        text="We bring dream wedding to life!"
      ></Banner_1>
      <div className="px-5 my-4 md:my-10">
        {/* categories section */}
        <Heading text="Our Vendors"></Heading>
        <section className="flex justify-between gap-7 overflow-x-auto pb-3">
          <Categories text="cate-1"></Categories>
          <Categories text="cate-2"></Categories>
          <Categories text="cate-3"></Categories>
          <Categories text="cate-4"></Categories>
          <Categories text="cate-5"></Categories>
          <Categories text="cate-6"></Categories>
        </section>

        {/* popular photographer */}
        <div>
          <Heading text="Popular Photographer" seeAll="View All(85)"></Heading>
          <PopularSwiper cards={card}></PopularSwiper>
        </div>

        {/* Trending parlour */}
        <div>
          <Heading text="Trending Parlour" seeAll="View All(25)"></Heading>
          <PopularSwiper cards={card}></PopularSwiper>
        </div>
        {/* Featured decorator */}
        <div>
          <Heading text="Featured Decorators" seeAll="View All(20)"></Heading>
          <PopularSwiper cards={card}></PopularSwiper>
        </div>

        <Banner></Banner>

        {/* featured flower */}
        <div>
          <Heading text="Featured Flower" seeAll="View All(25)"></Heading>
          <PopularSwiper cards={card}></PopularSwiper>
        </div>
      </div>

      {/* scroll to top */}
      <div className="text-right py-2 px-5">
        <ScrollTop></ScrollTop>
      </div>
    </div>
  );
};

export default Vendors;
