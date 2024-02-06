import Login from "../Login/Login";

const Navbar = () => {
  return (
    <nav
      className="bg-bg-clr-light sticky top-0 z-10 px-6 sm:px-12 py-4 sm:py-6 shadow-md 
      dark:bg-bg-primary-clr-dark"
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-bold text-xl sm:text-3xl text-primary-color">
            gameSpace
          </h2>
        </div>

        <Login />
      </div>
    </nav>
  );
};

export default Navbar;
