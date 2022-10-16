import TodoItem from "./todoItem";

const List = ({ setTodoList, todoList }) => {
  const deleteItem = (item) => {
    setTodoList(todoList.filter((task) => task.data !== item.data));
  };

  const markCompleted = (item) => {
    setTodoList(
      todoList.map((task) => {
        if (task.data === item.data) {
          return { ...task, completed: !item.completed };
        }
        return task;
      })
    );
  };

  return (
    <ul>
      {todoList.length ? (
        todoList.map((item, index) => (
          <TodoItem
            deleteItem={deleteItem}
            markCompleted={markCompleted}
            item={item}
            key={index}
          ></TodoItem>
        ))
      ) : (
        <li className="capitalize text-center p-5">the list is empty</li>
      )}
    </ul>
  );
};

export default List;
