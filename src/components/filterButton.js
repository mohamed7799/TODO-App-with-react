const FilterButton = ({ selectFilter, filter, filterType }) => {
  return (
    <button
      onClick={selectFilter}
      className={`hover:text-blue-500 ${
        filter === filterType ? "text-blue-500" : ""
      }`}
    >
      {filterType}
    </button>
  );
};

export default FilterButton;
