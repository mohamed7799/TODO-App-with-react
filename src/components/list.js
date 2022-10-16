import TodoItem from "./todoItem";

const List = ({ setTodoList, todoList, filter }) => {
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
        //filter the data then map through the tasks to render them
        todoList
          .filter((task) => {
            if (filter === "Completed") return task.completed;
            else if (filter === "Active") return !task.completed;
            else return true;
          })
          .map((item, index) => (
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
