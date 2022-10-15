import TodoItem from "./todoItem";

const List = ({ setTodoList, todoList }) => {
  const deleteItem = (item) => {
    setTodoList(todoList.filter((task) => task.data !== item.data));
  };

  return (
    <ul>
      {todoList.length ? (
        todoList.map((item, index) => (
          <TodoItem deleteItem={deleteItem} item={item} key={index}></TodoItem>
        ))
      ) : (
        <li className="capitalize text-center p-5">the list is empty</li>
      )}
    </ul>
  );
};

export default List;
