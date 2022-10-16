import { AiOutlineClose } from "react-icons/ai";
const TodoItem = ({ item, deleteItem, markCompleted }) => {
  return (
    <>
      <li className="p-4 flex cursor-pointer items-center group">
        <span
          className={`bg-no-repeat bg-center  mr-2 w-6 h-6 dark:border-dark_DarkGrayishBlue border-light_LightGrayishBlue border rounded-full inline-block ${
            item.completed ? "bg-check bg-blue-400" : ""
          }`}
        ></span>
        <span
          onClick={() => markCompleted(item)}
          className={`${item.completed ? "line-through text-gray-500" : ""}`}
        >
          {item.data}
        </span>
        <AiOutlineClose
          onClick={() => deleteItem(item)}
          className="ml-auto md:hidden group-hover:block w-6 h-6"
        />
      </li>
      <hr className="dark:border-dark_VeryDarkGrayishBlue" />
    </>
  );
};

export default TodoItem;
