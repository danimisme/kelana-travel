import { Outlet } from "react-router-dom";
import Sidebar from "../component/Fragments/Sidebar/Sidebar";

export default function DashboardLayout() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
}
