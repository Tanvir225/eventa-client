import Carousel from "../../Component/Home/Carousel";
// import Card from "../../Component/Share/Card/Card";
import Heading from "../../Component/Share/Heading/Heading";
import Navbar from "../../Component/Share/Navbar/Navbar";

const Home = () => {
    return (
        <div className="">
             
            <Navbar></Navbar>
            <Carousel></Carousel>
            <Heading heading={"Browse By Category"}></Heading>
        </div>
    );
};



export default Home;