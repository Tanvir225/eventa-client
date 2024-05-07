import Banner from "../../Component/Share/Banner/Banner";
import Banner_1 from "../../Component/Share/Banner_1/Banner_1";
import ScrollTop from "../../Component/Share/ScrollTop/ScrollTop";
import CountDown from "./CountDown";
import HeadingUtility from "./HeadingUtility";
import Utility from "./Utility";

const About = () => {
  return (
    <div className="space-y-10">
      <Banner_1
        heading="We are Eventa"
        text="We bring dream weddings to life!"
      ></Banner_1>
      <div className="px-7 py-5 space-y-5">
        <HeadingUtility heading="About us"></HeadingUtility>
        <Utility
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ></Utility>

        <CountDown></CountDown>
        <HeadingUtility heading="What we offer us"></HeadingUtility>
        <Utility
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          direction={"row-reverse"}
        ></Utility>

        <HeadingUtility heading="Who we are"></HeadingUtility>
        <Utility
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ></Utility>

        <Banner></Banner>
      </div>

      {/* scroll to top */}
      <div className="text-right py-2 px-5">
        <ScrollTop></ScrollTop>
      </div>
    </div>
  );
};

export default About;
