import { BiCategory } from "react-icons/bi";
import { LuGalleryThumbnails } from "react-icons/lu";
import { MdCallMerge, MdChatBubbleOutline, MdHomeMax, MdOutlineConnectWithoutContact } from "react-icons/md";
import { NavLink } from "react-router-dom";

const UserLink = () => {
  //links for guest
  const links = (
    <>
      <li className="">
        <NavLink to={"/"} className="flex flex-col justify-center items-center">
          <MdHomeMax size={26}></MdHomeMax>
          <p>Home</p>
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to={"/vendors"}
          className="flex flex-col justify-center items-center"
        >
          <MdOutlineConnectWithoutContact
            size={26}
          ></MdOutlineConnectWithoutContact>
          <p>Vendors</p>
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to={"/venue"}
          className="flex flex-col justify-center items-center"
        >
          <BiCategory size={26}></BiCategory>
          <p>Venue </p>
        </NavLink>
      </li>

      <li className="">
        <NavLink
          to={"/about"}
          className="hidden md:flex flex-col justify-center items-center "
        >
          <MdChatBubbleOutline 
            size={26}
          ></MdChatBubbleOutline >
          <p>About</p>
        </NavLink>
      </li>

      <li className="">
        <NavLink
          to={"/media"}
          className="flex flex-col justify-center items-center"
        >
          <LuGalleryThumbnails size={26}></LuGalleryThumbnails>
          <p>Media</p>
        </NavLink>
      </li>
      
      <li className="">
        <NavLink
          to={"/contact"}
          className="flex flex-col justify-center items-center"
        >
          <MdCallMerge 
            size={26}
          ></MdCallMerge >
          <p>Contact</p>
        </NavLink>
      </li>
    </>
  );
  return links
};

export default UserLink;
