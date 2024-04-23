import React from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Reviews = ({ review, user_name, user_image }) => {
    return (
        <section
            className="bg-gradient-to-r from-[#ff8938] rounded-lg to-[#f00] flex flex-col gap-12 justify-center items-center px-10 lg:flex-row p-24">
            <div className=" space-y-5">
                <h2 className="text-5xl text-white font-bold">Meet Our Reviews</h2>
                <p className="text-base text-white font-light w-full lg:w-3/4">
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don't look even slightly believable.
                </p>
                <Link to={"/about"} className="p-4 btn bg-white text-[#66042D] w-64 rounded-lg">About us</Link>
            </div>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-full">
         
                    <SwiperSlide className="relative px-2 w-full">
                        {/* client review  */}
                        <div className=" mb-10  opacity-40">
                            <div className="card bg-base-100 shadow-xl relative z-20 w-[380px]">
                                <div className="card-body">
                                    <p className="space-y-4 text-[#777]">
                                        {review}
                                    </p>
                                    <div className>
                                        <p className="text-base font-extrabold">{user_name}</p>
                                    </div>
                                </div>
                                <div className="absolute -top-5 -left-5 rounded-lg ">
                                    <img src={`${user_image}`} alt className='w-[60px] h-[60px] rounded-full' />
                                </div>
                            </div>
                        </div>
                        {/* client review */}
                        <div className="">
                            <div
                                className="card bg-base-100 shadow-xl w-fit absolute left-5 lg:left-20 rounded-lg bottom-28 z-50 ">
                                <div className="card-body">
                                    <p className="space-y-4 text-[#777]">
                                        {review}
                                    </p>
                                    <div className>
                                        <p className="text-base font-extrabold">{user_name}</p>

                                    </div>
                                </div>
                                <div className="absolute -top-5 -left-5 rounded-lg ">
                                    <img src={`${user_image}`} alt className='w-[60px] h-[60px] rounded-full' />
                                </div>
                            </div>
                        </div>
                        {/* client review */}
                        <div className="px-10">
                            <div
                                className="card bg-base-100 shadow-xl relative opacity-40 z-20 w-[300px]">
                                <div className="card-body">
                                    <p className="space-y-4 text-[#777]">
                                        {review}
                                    </p>
                                    <div className>
                                        <p className="text-base font-extrabold">{user_name}</p>
                                    </div>
                                </div>
                                <div className="absolute -top-5 -left-5 rounded-lg ">
                                    <img src={`${user_image}`} alt="" className='w-[60px] h-[60px] rounded-full' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
         
                    <SwiperSlide className="relative px-2 w-full">
                        {/* client review  */}
                        <div className=" mb-10  opacity-40">
                            <div className="card bg-base-100 shadow-xl relative z-20 w-[380px]">
                                <div className="card-body">
                                    <p className="space-y-4 text-[#777]">
                                        {review}
                                    </p>
                                    <div className>
                                        <p className="text-base font-extrabold">{user_name}</p>
                                    </div>
                                </div>
                                <div className="absolute -top-5 -left-5 rounded-lg ">
                                    <img src={`${user_image}`} alt className='w-[60px] h-[60px] rounded-full' />
                                </div>
                            </div>
                        </div>
                        {/* client review */}
                        <div className="">
                            <div
                                className="card bg-base-100 shadow-xl w-fit absolute left-5 lg:left-20 rounded-lg bottom-28 z-50 ">
                                <div className="card-body">
                                    <p className="space-y-4 text-[#777]">
                                        {review}
                                    </p>
                                    <div className>
                                        <p className="text-base font-extrabold">{user_name}</p>

                                    </div>
                                </div>
                                <div className="absolute -top-5 -left-5 rounded-lg ">
                                    <img src={`${user_image}`} alt className='w-[60px] h-[60px] rounded-full' />
                                </div>
                            </div>
                        </div>
                        {/* client review */}
                        <div className="px-10">
                            <div
                                className="card bg-base-100 shadow-xl relative opacity-40 z-20 w-[300px]">
                                <div className="card-body">
                                    <p className="space-y-4 text-[#777]">
                                        {review}
                                    </p>
                                    <div className>
                                        <p className="text-base font-extrabold">{user_name}</p>
                                    </div>
                                </div>
                                <div className="absolute -top-5 -left-5 rounded-lg ">
                                    <img src={`${user_image}`} alt="" className='w-[60px] h-[60px] rounded-full' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
         
                   
               
            </Swiper>
        </section>
    );
};

export default Reviews;