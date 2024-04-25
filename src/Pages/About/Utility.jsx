

const Utility = ({text,direction}) => {
    console.log(direction)
    return (
        <div className={`flex my-5  items-center gap-7 flex-col lg:${direction} justify-center`}>
            <p className="text-lg text-justify">{text}</p>
            <img src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-[300px] sm:w-full   md:h-[500px] lg:w-[450px] xl:w-[750px] xl:h-[600px] rounded-lg" alt="" />
        </div>
    );
};

export default Utility;