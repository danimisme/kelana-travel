import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.userLogged.user);
  console.log(user?.role);
  if (!token) {
    return <Navigate to="/login" />;
  }

  if (user?.role === "user") {
    return <Navigate to="/" />;
  }
  return <>{children || <Outlet />}</>;
}
