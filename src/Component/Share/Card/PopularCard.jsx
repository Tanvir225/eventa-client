

import { FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PopularCard = ({name,price,location,image}) => {
    return (
        <div className='w-[170px] h-[200px] md:w-full md:h-full lg:px-7 space-y-3 text-[11px] md:text-base  text-gray-600'>
            <img src={image} className='w-full md:h-[200px] rounded-lg object-cover' alt="" />
            <h3 className="text-[14px] md:text-xl font-semibold">{name}</h3>
            <div className='flex items-center justify-between'>
                <p>৳ {price}</p>
                <Link to={"/"} className='flex items-center justify-center space-x-2 underline'><FaLocationArrow></FaLocationArrow> <span>Live Location</span></Link>
            </div>
        </div>
    );
};

export default PopularCard;