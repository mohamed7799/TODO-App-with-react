import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";
const Header = ({ toggleTheme, theme }) => {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-white tracking-[.5rem] font-bold text-[2rem]">
        TODO
      </h1>
      <button onClick={toggleTheme}>
        <img src={theme === "light" ? moon : sun} alt="mode" />
      </button>
    </header>
  );
};

export default Header;
