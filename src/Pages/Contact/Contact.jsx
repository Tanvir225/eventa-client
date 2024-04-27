import Banner from "../../Component/Share/Banner/Banner";
import Banner_1 from "../../Component/Share/Banner_1/Banner_1";
import Contact_Form from "./Contact_Form";

const Contact = () => {
  return (
    <div>
      <Banner_1
        heading="We are Eventa"
        text="We bring dream wedding to life!"
      ></Banner_1>
      <div className="px-7">
        <Contact_Form></Contact_Form>
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Contact;
