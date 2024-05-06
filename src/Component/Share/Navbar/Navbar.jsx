import { useEffect, useState } from "react";
import "../Navbar/css/Navbar.css";
import UserLink from "./UserLink";
// import Marqueee from "../Marqueee";
import Button from "../Button";
import { Link } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  //state
  const [navbarFixed, setNavbarFixed] = useState(false);

  //useAuth hook calling
  const { user, logOut } = useAuth();

  //logout functionality
  const logOutUser = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Logout");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error Occurred");
      });
  };

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
            : "navbar px-7 bg-neutral-900  bg-opacity-10 delay-300"
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
              {user ? (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-16 rounded-full">
                      <img
                        alt={`${user?.displayName} photo`}
                        src={user?.photoURL}
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="mt-1 z-[1] p-3 font-semibold shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-44 text-neutral-800"
                  >
                    <li className="border-b-2 ">
                      <a className="justify-between text-sky-400">
                        {user?.displayName}
                      </a>
                    </li>
                    <li>
                      <Link to={"/"}>Dashboard</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Setting</Link>
                    </li>
                    <li>
                      <button onClick={logOutUser}>Logout</button>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link to={"/login"}>
                  <Button width={"100"} text={"Login"}></Button>
                </Link>
              )}
            </div>
          ) : user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-16 rounded-full">
                  <img
                    alt={`${user?.displayName} photo`}
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-1 z-[1] p-3 font-semibold shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-44 text-neutral-800"
              >
                <li className="border-b-2 ">
                  <a className="justify-between text-sky-400">
                    {user?.displayName}
                  </a>
                </li>
                <li>
                  <Link to={"/"}>Dashboard</Link>
                </li>
                <li>
                  <Link to={"/"}>Setting</Link>
                </li>
                <li>
                  <button onClick={logOutUser}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to={"/login"}>
              <Button width={"100"} text={"Login"}></Button>
            </Link>
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
