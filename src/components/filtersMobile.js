const FiltersMobile = () => {
  return (
    <div className="flex gap-4 justify-center p-4 md:hidden mt-4 bg-white text-light_VeryDarkGrayishBlue dark:text-dark_LightGrayishBlue dark:bg-dark_VeryDarkDesaturatedBlue rounded-md  shadow-lg">
      <button className="hover:text-blue-500">All</button>
      <button className="hover:text-blue-500">Active</button>
      <button className="hover:text-blue-500">Completed</button>
    </div>
  );
};

export default FiltersMobile;
