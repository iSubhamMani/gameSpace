import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { Provider, useDispatch } from "react-redux";
import appStore from "./utils/redux/appStore";
import { addUserInfo } from "./utils/redux/slices/userSlice";
import GameDetails from "./pages/GameDetails/GameDetails";
import CartDetails from "./pages/CartDetails/CartDetails";
import UndefinedPage from "./components/Error/UndefinedPage";

const Layout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUserInfo({
            uid: user.uid,
            name: user.displayName,
          })
        );
        navigate("/home");
      } else {
        dispatch(addUserInfo(null));
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="app flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/game/:id",
        element: <GameDetails />,
      },
      {
        path: "/cart",
        element: <CartDetails />,
      },
    ],
    errorElement: <UndefinedPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
