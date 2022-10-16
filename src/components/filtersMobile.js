import FilterButton from "./filterButton";
const FiltersMobile = ({ filter, selectFilter }) => {
  return (
    <div className="flex gap-4 justify-center p-4 md:hidden mt-4 bg-white text-light_VeryDarkGrayishBlue dark:text-dark_LightGrayishBlue dark:bg-dark_VeryDarkDesaturatedBlue rounded-md  shadow-lg">
      <FilterButton
        filter={filter}
        selectFilter={selectFilter}
        filterType="All"
      ></FilterButton>
      <FilterButton
        filter={filter}
        selectFilter={selectFilter}
        filterType="Active"
      ></FilterButton>
      <FilterButton
        filter={filter}
        selectFilter={selectFilter}
        filterType="Completed"
      ></FilterButton>
    </div>
  );
};

export default FiltersMobile;
