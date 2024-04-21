import Home from "../pages/home/home";
import LoginPage from "../pages/login/loginPage";

export const routeList = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
];
