import Banner from "../../Component/Share/Banner/Banner";
import Banner_1 from "../../Component/Share/Banner_1/Banner_1";
import PopularCard from "../../Component/Share/Card/PopularCard";
import Categories from "../../Component/Share/Categories/Categories";
import Heading from "../../Component/Share/Heading/Heading";


const Vendors = () => {
  return (
    <div>
      <Banner_1
        heading="Our Vendors"
        text="We bring dream wedding to life!"
      ></Banner_1>
      <div className="px-7 my-10">
        {/* categories section */}
        <Heading text="Our Vendors"></Heading>
        <section className="flex justify-between gap-7 overflow-x-auto pb-5">
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
          <section className="grid grid-cols-2 gap-7 justify-center w-full">
            <PopularCard name="Picture Perfect" price="5000"></PopularCard>
            <PopularCard name="Picture Perfect" price="5000"></PopularCard>
            <PopularCard name="Picture Perfect" price="5000"></PopularCard>
            <PopularCard name="Picture Perfect" price="5000"></PopularCard>
          </section>
         
        </div>

        {/* Trending parlour */}
        <div>
            <Heading text="Trending Parlour" seeAll="View All(25)"></Heading>
            <section className="grid grid-cols-2 gap-7 justify-center w-full-6">
                <PopularCard name="Tereja Beauty Parlour" price="2000"></PopularCard>
                <PopularCard name="Tereja Beauty Parlour" price="2000"></PopularCard>
            </section>
           
        </div>
        {/* Featured decorator */}
        <div>
            <Heading text="Featured Decorators" seeAll="View All(20)"></Heading>
            <section className="grid grid-cols-2 gap-7 justify-center w-full">
                <PopularCard name="Khan Decoration" price="8000"></PopularCard>
                <PopularCard name="Khan Decoration" price="8000"></PopularCard>
      
            </section>
           
        </div>

        <Banner></Banner>
      </div>
    </div>
  );
};

export default Vendors;
