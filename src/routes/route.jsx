import DashboardLayout from "../layouts/DashboardLayout";
import ActivityPage from "../pages/activity/ActivityPage";
import DetailActivityPage from "../pages/detailActivity/DetailActivityPage";
import DetailPromoPage from "../pages/detailPromo/detailPromo";
import Home from "../pages/home/home";
import LoginPage from "../pages/login/loginPage";
import PromoPage from "../pages/promo/PromoPage";

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
    path: "/activity",
    element: <ActivityPage />,
  },
  {
    path: "activity/:id",
    element: <DetailActivityPage />,
  },
  {
    path: "/promo",
    element: <PromoPage />,
  },
  {
    path: "/promo/:id",
    element: <DetailPromoPage />,
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
