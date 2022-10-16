import Filters from "./filters";
import List from "./list";

const TodoContainer = ({ setTodoList, todoList, filter, selectFilter }) => {
  return (
    <div className="bg-white text-light_VeryDarkGrayishBlue dark:text-dark_LightGrayishBlue dark:bg-dark_VeryDarkDesaturatedBlue rounded-md  shadow-lg">
      <List
        filter={filter}
        setTodoList={setTodoList}
        todoList={todoList}
      ></List>
      <Filters
        filter={filter}
        selectFilter={selectFilter}
        length={todoList.length}
      ></Filters>
    </div>
  );
};

export default TodoContainer;
