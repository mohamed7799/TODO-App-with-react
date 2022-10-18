import { useEffect, useState } from "react";
import FiltersMobile from "../components/filtersMobile";
import Header from "../components/header";
import InputField from "../components/inputField";
import TodoContainer from "../components/todoContainer";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";
const App = () => {
  //state
  const [theme, setMode] = useLocalStorage("theme", "light");
  const [newTask, setNewTask] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("All");
  //functions
  const toggleTheme = () => {
    if (theme === "light") setMode("dark");
    else setMode("light");
  };
  const addTask = (newTask) => {
    setTodoList([
      ...todoList,
      { data: newTask, completed: false, id: uuidv4() },
    ]);
  };
  const selectFilter = (e) => {
    setFilter(e.target.textContent);
  };
  //useEffects

  useEffect(() => {
    document.documentElement.classList = theme;
  }, [theme]);

  //jsx
  return (
    <div className="min-h-full bg-contain bg-no-repeat flex justify-center bg-light_veryLightGray dark:bg-dark_VeryDarkBlue dark:md:bg-dark-desktop md:bg-light-desktop dark:bg-dark-mobile bg-light-mobile font-Montserrat">
      <section className=" max-w-lg w-11/12 mx-2 my-12">
        <Header theme={theme} toggleTheme={toggleTheme}></Header>
        <InputField
          addTask={addTask}
          setNewTask={setNewTask}
          newTask={newTask}
        ></InputField>
        <TodoContainer
          selectFilter={selectFilter}
          setFilter={setFilter}
          filter={filter}
          setTodoList={setTodoList}
          todoList={todoList}
        ></TodoContainer>
        <FiltersMobile
          selectFilter={selectFilter}
          filter={filter}
        ></FiltersMobile>
        <p className="text-center text-light_DarkGrayishBlue dark:text-dark_DarkGrayishBlue mt-6 text-sm">
          Drag and Drop to reorder the list
        </p>
      </section>
    </div>
  );
};

export default App;
