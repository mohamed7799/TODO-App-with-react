const InputField = ({ newTask, setNewTask, addTask }) => {
  const handleEnterKey = (e) => {
    if (e.key === "Enter" && newTask.length !== 0) {
      addTask(newTask);
      setNewTask("");
    }
  };

  return (
    <div className="bg-white text-light_VeryDarkGrayishBlue dark:text-dark_LightGrayishBlue dark:bg-dark_VeryDarkDesaturatedBlue rounded-md p-4 my-5">
      <input
        className="w-full bg-inherit focus:outline-none text-base"
        type="text"
        value={newTask}
        placeholder="Create new task and press enter"
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={handleEnterKey}
      />
    </div>
  );
};

export default InputField;
