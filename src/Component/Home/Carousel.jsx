import { useEffect } from "react";
import { useState } from "react";
import Select from "./Select";
import Button from "../Share/Button";
//import Navbar from "../Share/Navbar/Navbar";

const Carousel = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    {
      img: "https://source.unsplash.com/1200x540/?convention hall",
      title: "Your Wedding , Your Way!",
    },
    {
      img: "https://source.unsplash.com/1200x540/?wedding",
      title: "Book with Us Today!",
    },
    {
      img: "https://source.unsplash.com/1200x540/?photographer",
      title: "Reserve Your Wedding Date!",
    },
    {
      img: "https://source.unsplash.com/1200x540/?hall",
      title: "Reserve Wedding Venue!",
    },
  ];

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentSlider(
          currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
        ),
      2500
    );
    return () => clearInterval(intervalId);
  }, [currentSlider, sliders.length]);

  //   options for  select component
  const options = [
    "Kakoli",
    "Banani",
    "Mohakhali",
    "Dhanmondi",
    "Gulshan",
    "Ajimpur",
    "Kakoli",
    "Banani",
    "Mohakhali",
    "Dhanmondi",
    "Gulshan",
    "Ajimpur",
  ];

  return (
    <section>
      <div
        className="w-full h-fit sm:h-96 md:h-[600px] object-cover pb-5 flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center  before:absolute before:bg-neutral-900/60 before:inset-0 transform duration-1000 ease-linear"
        style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}
      >
        {/* text container here */}
        <div className="drop-shadow-lg text-white text-center px-5 mt-28  md:mt-10">
          <h1 className="text-xl lg:text-3xl font-bold">
            {sliders[currentSlider].title}
          </h1>
        </div>

        {/* filter option */}
        <div className="flex flex-wrap justify-center gap-5 md:gap-7 opacity-70">
          <Select options={options} title="Category"></Select>
          <Select options={options} title="Location"></Select>
          {/* button component */}
          <div className="">
            <Button width={"200"} text={"Search"} color={"white"}></Button>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Carousel;
