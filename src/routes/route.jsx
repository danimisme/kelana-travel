import DashboardLayout from "../layouts/DashboardLayout";
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
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "user",
        element: <div>User</div>,
      },
    ],
  },
];
