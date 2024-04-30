
const Categories = ({text,src}) => {
    return (
        <div className="flex flex-col justify-center items-center text-center space-y-3">
            <img src="" alt="categories"  className="rounded-full w-[100px] h-[100px] lg:w-[125px] lg:h-[125px] bg-slate-400"/>
            <h3 className="font-semibold text-neutral-600 py-2 text-base md:text-xl border-b-4 border-sky-300">{text}</h3>
        </div>
    );
};

export default Categories;