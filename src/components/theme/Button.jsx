export const PrimaryButton = ({ title }) => {
  return (
    <button className="px-5 py-2.5 uppercase relative rounded group font-medium text-white  inline-block">
      <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-primary-600 to-primary-500"></span>
      <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-primary-600 to-primary-500"></span>
      <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-primary-600 to-primary-500"></span>
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-primary-600 from-primary-500"></span>
      <span className="relative">{title}</span>
    </button>
  );
};
export const SecondaryButton = ({ title, w }) => {
  return (
    <button
      className={`rounded-md px-3.5 py-2 overflow-hidden relative group cursor-pointer border-2 font-medium border-primary-600 text-primary-600 ${(w =
        "full" ? "w-full" : "")}`}
    >
      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primary-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
      <span className="relative text-primary-600 transition duration-300 group-hover:text-white ease">{title}</span>
    </button>
  );
};
