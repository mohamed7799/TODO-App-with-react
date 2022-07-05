import { useEffect, useState } from "react";
import Header from "../components/header";
import InputField from "../components/inputField";
const App = () => {
  //state
  const [mode, setMode] = useState("light");
  const [newTask, setNewTask] = useState("");

  //functions
  const toggleMode = () => {
    if (mode === "light") setMode("dark");
    else setMode("light");
  };

  //useEffects

  useEffect(() => {
    document.documentElement.classList = mode;
  }, [mode]);

  //jsx
  return (
    <div className="h-screen bg-contain bg-no-repeat flex justify-center bg-light_veryLightGray dark:bg-dark_VeryDarkBlue dark:md:bg-dark-desktop md:bg-light-desktop dark:bg-dark-mobile bg-light-mobile font-Montserrat">
      <section className="max-w-xl w-10/12 mx-2 mt-12">
        <Header mode={mode} changeMode={toggleMode}></Header>
        <InputField setNewTask={setNewTask} newTask={newTask}></InputField>
      </section>
    </div>
  );
};

export default App;
