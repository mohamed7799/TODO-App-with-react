import Filters from "./filters";
import List from "./list";

const TodoContainer = ({ todoList }) => {
  return (
    <div className="bg-white text-light_VeryDarkGrayishBlue dark:text-dark_LightGrayishBlue dark:bg-dark_VeryDarkDesaturatedBlue rounded-md  shadow-lg">
      <List todoList={todoList}></List>
      <Filters></Filters>
    </div>
  );
};

export default TodoContainer;
