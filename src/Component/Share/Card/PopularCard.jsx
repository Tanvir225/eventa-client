

import { FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PopularCard = ({name,price,location}) => {
    return (
        <div className='lg:px-7 space-y-3 w-full text-gray-600'>
            <img src="https://source.unsplash.com/400x200/?hall" className='w-full  h-[200px] rounded-lg object-cover' alt="pupularvenue" />
            <h3 className="text-xl font-semibold">{name}</h3>
            <div className='flex items-center justify-between'>
                <p>৳ {price}</p>
                <Link to={"/"} className='flex items-center justify-center space-x-2 underline'><FaLocationArrow></FaLocationArrow> <span>Live Location</span></Link>
            </div>
        </div>
    );
};

export default PopularCard;