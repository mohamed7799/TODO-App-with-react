import { AiOutlineClose } from "react-icons/ai";
const TodoItem = () => {
  return (
    <>
      <li className="p-4 flex cursor-pointer items-center group">
        <span className="bg-no-repeat bg-center group-hover:bg-blue-400 group-hover:bg-check mr-2 w-6 h-6 dark:border-dark_DarkGrayishBlue border-light_LightGrayishBlue border-1 rounded-full inline-block"></span>
        <span className="group-hover:line-through group-hover:text-gray-400">
          item
        </span>
        <AiOutlineClose className="ml-auto md:hidden group-hover:block w-6 h-6" />
      </li>
      <hr className="dark:border-dark_VeryDarkGrayishBlue" />
    </>
  );
};

export default TodoItem;
