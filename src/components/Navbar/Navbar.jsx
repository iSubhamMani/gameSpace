import Login from "../Login/Login";

const Navbar = () => {
  return (
    <nav className="px-6 py-4 flex justify-between items-center">
      <div>
        <h2 className="font-bold text-xl sm:text-2xl">gameSpace</h2>
      </div>

      <Login />
    </nav>
  );
};

export default Navbar;
