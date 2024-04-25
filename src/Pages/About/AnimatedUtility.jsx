import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


const AnimatedUtility = ({ number }) => {
    //state
    const [counter,setCounter] = useState(false)

    return (
        <ScrollTrigger onEnter={()=> setCounter(true)} onExit={()=> setCounter(false)}>
            {
                counter &&  <CountUp start={0} end={number} delay={0} duration={5} className='text-4xl text-center text-[#66042D] font-bold'>
                </CountUp>
            }
        </ScrollTrigger>
    );
};

export default AnimatedUtility;