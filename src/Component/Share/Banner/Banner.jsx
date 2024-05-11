
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className='bg-slate-100 w-full lg:h-[600px] p-7 rounded-lg shadow-lg  space-y-5 my-5'>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-14 '>
                <div className='relative'>
                    <img src="https://source.unsplash.com/500x350/?hall" alt="banner_image" className='w-full lg:w-[500px]  h-[300px] lg:h-[500px] rounded-lg object-cover' />
                    <img src="https://source.unsplash.com/300x300/?wedding" alt="banner_image" className='w-[300px] h-[300px] rounded-lg object-cover absolute -right-5 top-16' />
                </div>
                <div className='flex-1 leading-9 space-y-5 mt-5 w-full'>
                    <h2 className='text-[#66042D] text-2xl font-bold  lg:text-5xl'>this is heading</h2>
                    <p className='text-xl w-full lg:w-[90%] lg:mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugiat minus quos doloribus laudantium impedit debitis eveniet, harum expedita rerum esse aliquid consequatur nobis explicabo laborum repellat minima tempora quibusdam.</p>
                </div>
            </div>

            <div className='lg:text-right lg:w-[90%] mx-auto py-1'>
                <Link to={"/"} className='bg-[#66042D]  text-lg  hover:bg-black text-white px-12 py-4 rounded-lg'>Contact Us</Link>
            </div>
        </div>
    );
};


export default Banner;