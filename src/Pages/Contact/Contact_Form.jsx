import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";

const Contact_Form = () => {

  //send email by email-js service
  const form = useRef()

  //email functionality
  const sendEmail = (e)=>{
    e.preventDefault();
    const formValue = e.target;

    emailjs.sendForm(
      "service_vmf5onq",
      'template_1jqv5xv',
      form.current,
      '2P5G46UnJ_c2jyJFO'
    )
    .then(
      (result) => {
        console.log(result.text);
        formValue.reset();
        toast.success("message send successfully");
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  return (
    <div className=" my-12 p-5 bg-slate-50 rounded-lg shadow-md sm:px-8 sm:py-10 lg:px-10 lg:py-16">
      <div className="w-full flex flex-col items-center sm:flex-row justify-center space-x-0 sm:space-x-12">
        <div className="w-full sm:w-1/2 mb-8 sm:mb-0 ">
          {/* Left side form */}
          <h2 className="text-2xl font-bold mb-6">Say hello!</h2>
          <form  ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col space-y-4 mb-4 ">
              <input
                className="flex h-12 w-full bg-white rounded-md border px-3 py-2 text-sm focus:outline-none"
                placeholder="Name"
                type="text"
                name="from_name"
              />
              <input
                className="flex h-12 w-full bg-white rounded-md border px-3 py-2 text-sm focus:outline-none"
                placeholder="Email"
                type="email"
                name="from_email"
              />
              <input
                className="flex h-12 w-full bg-white rounded-md border px-3 py-2 text-sm focus:outline-none"
                placeholder="Contact Number"
                name="from_contact"
                type="tel"
              />
              <textarea
                rows={6}
                placeholder="Enter your message..."
                name="message"
                className="flex bg-white  w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                type="tel"
              />
            </div>

            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-sky-400 text-white">
              Submit
            </button>
          </form>
        </div>
        {/* Right side content */}
        <div className="w-full sm:w-1/2 space-y-5">
          <h2 className="text-2xl font-bold mb-6">Vendors!</h2>
          <p className="bg-black text-white w-full lg:w-[70%] p-7 text-center rounded-lg">
            If you are a registered vendor or a business looking to promote your
            brand on our portal, please send in your queries at
            bookateventa@gmail.com
          </p>

          <h2 className="text-2xl font-bold mb-6">Careers!</h2>
          <p className="bg-blue-600 text-white w-full lg:w-[70%] p-7 text-center rounded-lg">
            We are a team of passionate young minds looking to reinvent the
            wedding space. Please check our careers page for current openings
            and email us at bookateventa@gmail.com
          </p>

          <h2 className="text-2xl font-bold mb-6">Customers!</h2>
          <p className="bg-blue-500 text-white w-full lg:w-[70%] p-7 text-center rounded-lg">
            We are a team of passionate young minds looking to reinvent the
            wedding space. Please check our careers page for current openings
            and email us at  bookateventa@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact_Form;
