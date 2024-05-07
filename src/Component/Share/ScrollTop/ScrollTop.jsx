import { FaArrowCircleUp } from "react-icons/fa";

const ScrollTop = () => {
  //scroll top function
  const scrollTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      className="btn btn-sm bg-indigo-600 text-white hover:bg-black"
    >
      <FaArrowCircleUp size={20}></FaArrowCircleUp>Scroll to top
    </button>
  );
};

export default ScrollTop;
