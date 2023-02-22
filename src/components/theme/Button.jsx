export const PrimaryButton = ({ title }) => {
  return (
    <button className="px-[25px] py-[10px] text-[10px] md:text-[12px] lg:text-[18px] uppercase relative rounded group font-medium text-white  inline-block">
      <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-primary-600 to-primary-500"></span>
      <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-primary-600 to-primary-500"></span>
      <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-primary-600 to-primary-500"></span>
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-primary-600 from-primary-500"></span>
      <span className="relative">{title}</span>
    </button>
  );
};
export const SecondaryButton = ({ title, w, handleAddToCart, product }) => {
  // console.log(products)
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
