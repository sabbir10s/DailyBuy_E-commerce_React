export const PrimaryButton = ({ title }) => {
  return (
    <button className="px-[25px] py-[10px] text-[10px] md:text-[12px] lg:text-[18px] uppercase relative rounded-3xl group font-medium  inline-flex items-center justify-center p-4  overflow-hidden text-primary-600 transition duration-300 ease-out border border-primary-500 shadow-md group">
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary-500 group-hover:translate-x-0 ease">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </span>
      <span className="absolute flex items-center justify-center w-full h-full text-primary-500 transition-all duration-300 transform group-hover:translate-x-full ease">
        {title}
      </span>
      <span className="relative invisible">{title}</span>
    </button>
  );
};
export const SecondaryButton = ({ title, w, handleAddToCart, product }) => {
  return (
    <button
      onClick={() => handleAddToCart(product)}
      className={`rounded-[5px] py-[4px] md:py-[9px] text-[10px] md:text-[14px] relative cursor-pointer border-[1.5px] font-medium border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white duration-300 ease-in-out ${(w =
        "full" ? "w-full" : "")}`}
    >
      {title}
    </button>
  );
};
