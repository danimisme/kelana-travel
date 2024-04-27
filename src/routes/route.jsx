import { Outlet } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import ActivityPage from "../pages/activity/ActivityPage";
import ActivityDashboardPage from "../pages/dashboard/activity/ActivityDashboardPage";
import BannerDashboardPage from "../pages/dashboard/banner/bannerDashboardPage";
import CategoryDashboardPage from "../pages/dashboard/category/CategoryDashboardPage";
import CreateActivityPage from "../pages/dashboard/create-activity/CreateActivityPage";
import CreateBannerPage from "../pages/dashboard/create-banner/CreateBannerPage";
import CreateCategoryPage from "../pages/dashboard/create-category/CreateCategoryPage";
import CreatePromoPage from "../pages/dashboard/create-promo/CreatePromoPage";
import EditActivityPage from "../pages/dashboard/edit-activity/EditActivityPage";
import EditBannerPage from "../pages/dashboard/edit-banner/EditBannerPage";
import EditCategoryPage from "../pages/dashboard/edit-category/EditCategoryPage";
import EditPromoPage from "../pages/dashboard/edit-promo/EditPromoPage";
import PromoDashboardPage from "../pages/dashboard/promo/PromoDashboardPage";
import UserDashboardPage from "../pages/dashboard/user/userDashboardPage";
import DetailActivityPage from "../pages/detailActivity/DetailActivityPage";
import DetailPromoPage from "../pages/detailPromo/detailPromo";
import Home from "../pages/home/home";
import LoginPage from "../pages/login/loginPage";
import ProfilePage from "../pages/profile/ProfilePage";
import PromoPage from "../pages/promo/PromoPage";
import RegisterPage from "../pages/register/RegisterPage";
import { ProtectedRoute } from "./ProtectedRoute";

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
    path: "/register",
    element: <RegisterPage />,
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
    path: "/profile",
    element: (
      <ProtectedRoute>
        <ProfilePage />
      </ProtectedRoute>
    ),
  },

  {
    path: "/dashboard/user",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
        <UserDashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/banner",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
        <BannerDashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/banner/edit-banner/:id",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
        <EditBannerPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/banner/create-banner",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
        <CreateBannerPage />
      </ProtectedRoute>
    ),
  },

  {
    path: "/dashboard/promo",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
        <PromoDashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/promo/edit-promo/:id",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
        <EditPromoPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/promo/create-promo",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
        <CreatePromoPage />
      </ProtectedRoute>
    ),
  },

  {
    path: "/dashboard/category",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
        <CategoryDashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/category/edit-category/:id",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
        <EditCategoryPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/category/create-category",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
        <CreateCategoryPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/activity",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
        <ActivityDashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/activity/edit-activity/:id",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
        <EditActivityPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/activity/create-activity",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
        <CreateActivityPage />
      </ProtectedRoute>
    ),
  },

  // {
  //   path: "/dashboard",
  //   element: (
  //     <ProtectedRoute>
  //       <DashboardLayout />
  //     </ProtectedRoute>
  //   ),
  //   children: [
  //     {
  //       path: "user",
  //       element: <UserDashboardPage />,
  //     },
  //     {
  //       path: "banner",
  //       element: <BannerDashboardPage />,
  //     },
  //     {
  //       path: "banner/edit-banner/:id",
  //       element: <EditBannerPage />,
  //     },
  //     {
  //       path: "banner/create-banner",
  //       element: <CreateBannerPage />,
  //     },
  //     {
  //       path: "promo",
  //       element: <PromoDashboardPage />,
  //     },
  //     {
  //       path: "promo/edit-promo/:id",
  //       element: <EditPromoPage />,
  //     },
  //     {
  //       path: "promo/create-promo",
  //       element: <CreatePromoPage />,
  //     },
  //     {
  //       path: "category",
  //       element: <CategoryDashboardPage />,
  //     },
  //     {
  //       path: "category/edit-category/:id",
  //       element: <EditCategoryPage />,
  //     },
  //     {
  //       path: "category/create-category",
  //       element: <CreateCategoryPage />,
  //     },
  //     {
  //       path: "activity",
  //       element: <ActivityDashboardPage />,
  //     },
  //     {
  //       path: "activity/edit-activity/:id",
  //       element: <EditActivityPage />,
  //     },
  //     {
  //       path: "activity/create-activity",
  //       element: <CreateActivityPage />,
  //     },
  //   ],
  // },
];
