import Carousel from "../../Component/Home/Carousel";
import PopularCard from "../../Component/Share/Card/PopularCard";
import Categories from "../../Component/Share/Categories/Categories";
// import Card from "../../Component/Share/Card/Card";
import Heading from "../../Component/Share/Heading/Heading";
import Navbar from "../../Component/Share/Navbar/Navbar";
import Pagination from "../../Component/Share/Pagination/Pagination";

const Home = () => {
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
                        
                        <div className="flex justify-between gap-5 items-center flex-col lg:flex-row  w-full">
                            <PopularCard name={"Tolarbag Convention hall"} price={"10000"}></PopularCard>
                            <PopularCard name={"Tolarbag Convention hall"} price={"10000"}></PopularCard>
                            <PopularCard name={"Tolarbag Convention hall"} price={"10000"}></PopularCard>
                            <PopularCard name={"Tolarbag Convention hall"} price={"10000"}></PopularCard>
                        </div>
                        <Pagination></Pagination>
                </section>
            </div>
        </div>
    );
};



export default Home;