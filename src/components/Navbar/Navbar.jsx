import { Link } from "react-router-dom";
import Login from "../Login/Login";
import Cart from "../Cart/Cart";

const Navbar = () => {
  return (
    <nav
      className="bg-bg-primary-clr-light sticky top-0 z-10 px-6 sm:px-12 py-4 sm:py-6 shadow-md 
      dark:bg-bg-primary-clr-dark"
    >
      <div className="flex justify-between items-center">
        <div>
          <Link to="/home">
            <h2 className="font-bold text-xl sm:text-3xl text-primary-color">
              gameSpace
            </h2>
          </Link>
        </div>
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          <Cart />
          <Login />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
