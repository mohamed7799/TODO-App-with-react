const Filters = () => {
  return (
    <div className="flex justify-between p-4 text-sm items-center">
      <span className="text-light_DarkGrayishBlue">5 Tasks</span>
      <div className="gap-2 hidden md:flex">
        <button className="hover:text-blue-500">All</button>
        <button className="hover:text-blue-500">Active</button>
        <button className="hover:text-blue-500">Completed</button>
      </div>
      <button className="hover:text-blue-500">Clear Completed</button>
    </div>
  );
};

export default Filters;
