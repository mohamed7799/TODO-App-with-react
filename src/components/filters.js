import FilterButton from "./filterButton";

const Filters = ({ length, filter, selectFilter, clearCompleted }) => {
  return (
    <div className="flex justify-between p-4 text-sm items-center">
      <span className="text-light_DarkGrayishBlue">{length} Tasks</span>
      <div className="gap-2 hidden md:flex">
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
      <button onClick={clearCompleted} className="hover:text-blue-500">
        Clear Completed
      </button>
    </div>
  );
};

export default Filters;
