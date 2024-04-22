// eslint-disable-next-line react/prop-types
const Button = ({ width, text,color }) => {
  let widthInt = Number(width);
  console.log(widthInt);
  return (
    <div>
      <button
        type="button"
        className="relative font-bold inline-block h-12 overflow-hidden border-sky-500 px-5 py-2  shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[90%] before:rounded-s-full before:bg-sky-500 before:duration-200 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[90%] after:rounded-e-full after:bg-sky-600 after:duration-500 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0"
        style={{ width: `${widthInt}px` , color: `${color}` }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
