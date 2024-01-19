import Login from "../Login/Login";

const Navbar = () => {
  return (
    <nav
      className="px-6 sm:px-12 py-4 sm:py-6 flex justify-between items-center
     dark:bg-primary-color-dark"
    >
      <div>
        <h2 className="font-bold text-xl sm:text-2xl text-primary-text-color">
          gameSpace
        </h2>
      </div>

      <Login />
    </nav>
  );
};

export default Navbar;
