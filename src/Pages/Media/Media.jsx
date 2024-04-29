import Banner from "../../Component/Share/Banner/Banner";
import Banner_1 from "../../Component/Share/Banner_1/Banner_1";
import MediaCard from "../../Component/Share/Card/MediaCard";
import Heading from "../../Component/Share/Heading/Heading";
import Pagination from "../../Component/Share/Pagination/Pagination";

const Media = () => {
  return (
    <div className="">
      <Banner_1 heading="We are Eventa" text="Latest Media"></Banner_1>
      <div className="px-7 my-16">
        <Heading text="Happy moment"></Heading>
        <div className="flex flex-col lg:flex-row  items-center justify-center gap-10">
          <MediaCard></MediaCard>
          <MediaCard></MediaCard>
          <MediaCard></MediaCard>
          <MediaCard></MediaCard>
        </div>

        <Pagination></Pagination>

        <Banner></Banner>
      </div>
    </div>
  );
};

export default Media;
