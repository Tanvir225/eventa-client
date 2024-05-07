import Banner from "../../Component/Share/Banner/Banner";
import Banner_1 from "../../Component/Share/Banner_1/Banner_1";
import ScrollTop from "../../Component/Share/ScrollTop/ScrollTop";
import Contact_Form from "./Contact_Form";

const Contact = () => {
  return (
    <div>
      <Banner_1
        heading="We are Eventa"
        text="We bring dream wedding to life!"
      ></Banner_1>
      <div className="px-5">
        <Contact_Form></Contact_Form>
        <Banner></Banner>
      </div>

       {/* scroll to top */}
       <div className="text-right py-2 px-5">
        <ScrollTop></ScrollTop>
      </div>
    </div>
  );
};

export default Contact;
