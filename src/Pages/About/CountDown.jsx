import AnimatedUtility from "./AnimatedUtility";


const CountDown = () => {
    return (
        <div className="flex  rounded-lg my-10 justify-around gap-7 bg-indigo-400 text-neutral-800 shadow-lg p-10 items-center flex-wrap">
            <div className='text-xl text-center font-bold'>
                <AnimatedUtility number={20}></AnimatedUtility>
                <p>Vendors</p>
            </div>
            <div className='text-xl text-center font-bold'>
                <AnimatedUtility number={80}></AnimatedUtility>
                <p className="text-center">Wedding <br /> Completed</p>
            </div>
            <div className='text-xl text-center font-bold'>
                <AnimatedUtility number={100}></AnimatedUtility>
                <p>Venus</p>
            </div>
            <div className='text-xl text-center font-bold'>
                <AnimatedUtility number={200}></AnimatedUtility>
                <p>Users</p>
            </div>
        </div>
    );
};

export default CountDown;