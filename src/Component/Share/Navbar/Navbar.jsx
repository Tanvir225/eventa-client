import { useEffect, useState } from "react";
import "../Navbar/css/Navbar.css";
import UserLink from "./UserLink";
// import Marqueee from "../Marqueee";
import Button from "../Button";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [navbarFixed, setNavbarFixed] = useState(false);

  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setNavbarFixed(true);
      } else {
        setNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={
          navbarFixed
            ? "navbar space-y-2 pb-2 px-7 bg-slate-50 border-b-2 border-sky-500 shadow-xl fixedd"
            : "navbar px-7 bg-neutral-900  bg-opacity-30 delay-300"
        }
      >
        {/* <Marqueee></Marqueee> */}
        {/* Your navbar content goes here */}
        <div className="flex items-center justify-between w-full">
          {navbarFixed ? (
            <h2 className="hidden lg:block">logo</h2>
          ) : (
            <h2 className="">logo</h2>
          )}
          <ul className="justify-center items-center gap-10 hidden lg:flex ">
            <UserLink> </UserLink>
          </ul>

          {navbarFixed ? (
            <div className="hidden lg:block">
              <Link to={"/login"}><Button width={"100"} text={"Login"}></Button></Link>
            </div>
          ) : (
            <Link to={"/login"}><Button width={"100"} text={"Login"}></Button></Link>
          )}
          {navbarFixed ? (
            <ul className=" justify-center flex w-full gap-4  items-center  lg:hidden ">
              <UserLink> </UserLink>
            </ul>
          ) : (
            ""
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
