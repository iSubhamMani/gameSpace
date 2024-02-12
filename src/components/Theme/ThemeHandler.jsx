import light from "../../assets/light.png";
import dark from "../../assets/dark.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ThemeHandler = () => {
  const user = useSelector((store) => store.user);

  const [theme, setTheme] = useState("dark");
  const element = document.documentElement;

  useEffect(() => {
    if (localStorage.getItem("theme") === "light") {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (localStorage.getItem("theme") === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme]);

  return user?.userInfo ? (
    <div
      onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
      className="w-5 sm:w-7 hover:cursor-pointer flex items-center"
    >
      <img src={theme === "light" ? dark : light} alt="" />
    </div>
  ) : null;
};

export default ThemeHandler;
