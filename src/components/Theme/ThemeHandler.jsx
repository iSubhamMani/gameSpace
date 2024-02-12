import light from "../../assets/light.png";
import dark from "../../assets/dark.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setTheme } from "../../utils/redux/slices/app";

const ThemeHandler = () => {
  const user = useSelector((store) => store.user);
  const { theme } = useSelector((store) => store.app);

  const dispatch = useDispatch();
  const element = document.documentElement;

  useEffect(() => {
    if (localStorage.getItem("theme") === "light") {
      dispatch(setTheme(localStorage.getItem("theme")));
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
      onClick={() =>
        theme === "light"
          ? dispatch(setTheme("dark"))
          : dispatch(setTheme("light"))
      }
      className="w-[18px] sm:w-7 hover:scale-90 transition duration-200 ease-in-out hover:cursor-pointer flex items-center"
    >
      <img src={theme === "light" ? dark : light} alt="" />
    </div>
  ) : null;
};

export default ThemeHandler;
