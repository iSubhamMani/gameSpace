import Login from "../Login/Login";

const Navbar = () => {
  return (
    <nav
      className="bg-gradient-to-r from-bg-clr-light-1 to-bg-clr-light-2 sticky top-0 z-10 px-6 sm:px-12 py-4 sm:py-6 shadow-md 
      dark:bg-gradient-to-r dark:from-[#121114] dark:to-primary-color-dark"
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-bold text-xl sm:text-3xl text-primary-text-color">
            gameSpace
          </h2>
        </div>

        <Login />
      </div>
    </nav>
  );
};

export default Navbar;
