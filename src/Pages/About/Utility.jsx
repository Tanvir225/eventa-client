

// eslint-disable-next-line react/prop-types
const Utility = ({text,direction}) => {
    console.log(direction)
    return (
        <div className={`space-y-5 lg:flex gap-7 items-center `} style={{flexDirection: direction ? direction : 'row'}}>
            <p className="text-lg text-justify text-neutral-800">{text}</p>
            <img src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-[300px] sm:w-full   md:h-[500px] lg:w-[450px] xl:w-[750px] xl:h-[600px] rounded-lg" alt="" />
        </div>
    );
};

export default Utility;