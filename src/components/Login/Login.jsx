import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useSelector } from "react-redux";
import logout from "../../assets/logout.png";

const Login = () => {
  const user = useSelector((store) => store.user);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {});
  };

  return (
    <div>
      {user?.userInfo ? (
        <button onClick={handleLogOut} className="w-5 sm:w-7 flex items-center">
          <img src={logout} alt="" />
        </button>
      ) : (
        <button
          onClick={handleSignIn}
          className="btn px-2 sm:px-4 py-[0.2em] sm:py-1 text-sm sm:text-lg font-bold rounded-md"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Login;
