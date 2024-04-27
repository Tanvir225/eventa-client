

// eslint-disable-next-line react/prop-types
const Banner_1 = ({heading,text}) => {
    return (
        <div className="w-full relative h-96 sm:h-96 md:h-[550px] pb-5 flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center  before:absolute before:bg-neutral-900/60 before:inset-0 transform duration-1000 ease-linear"
            style={{ backgroundImage: `url(https://source.unsplash.com/1200x540/?wedding)`}}>
            <div className="absolute text-center text-white space-y-5">
                <h1 className="text-3xl xl:text-6xl font-bold">{heading}</h1>
                <p className="text-xl font-semibomd">{text}</p>
            </div>
        </div>
    );
};


export default Banner_1;