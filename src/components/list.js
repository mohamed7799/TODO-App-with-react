import TodoItem from "./todoItem";

const List = ({ todoList }) => {
  return (
    <ul>
      {todoList.length ? (
        todoList.map((item, index) => (
          <TodoItem item={item} key={index}></TodoItem>
        ))
      ) : (
        <li className="capitalize text-center p-5">the list is empty</li>
      )}
    </ul>
  );
};

export default List;
