

const MediaCard = () => {
    return (
        <div className="w-full mx-auto rounded-2xl bg-slate-100/70 px-6 py-4 shadow-md ">
            {/* Card Image */}
            <img className="h-[190px] w-full rounded-2xl bg-gray-400" src={'https://source.unsplash.com/350x190/?furniture'} alt="card navigate ui" />
            {/* Card Heading */}
            <div className="space-y-2">
                <h2 className="text-slate-800 font-bold sm:text-lg md:text-xl dark:text-white/90">Lorem, ipsum.</h2>
                <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nisi...</p>
            </div>
            {/* Price and action button */}
            <div className="mt-5 flex items-center justify-between">
                <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-sm md:text-base">Read more</button>
            </div>
        </div>
    );
};

export default MediaCard;