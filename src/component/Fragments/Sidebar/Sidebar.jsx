import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleSidebar } from "../../../redux/slice/sidebarSlice";
import "./Sidebar.css";
export default function Sidebar() {
  const sidebarShow = useSelector((state) => state.sidebar.sidebarShow);
  const dispacth = useDispatch();
  return (
    <div className={` sidebar ${sidebarShow ? "show" : "hide"}  `}>
      <div className="button" onClick={() => dispacth(toggleSidebar())}>
        {sidebarShow ? (
          <i className="bi bi-arrow-left-circle fs-1 "></i>
        ) : (
          <i className="bi bi-arrow-right-circle fs-1 "></i>
        )}
      </div>
      <h2 className="mt-5 ">Dashboard</h2>
      <ul className="list-group list-group-flush mt-5">
        <Link to="/dashboard/user" className="text-decoration-none text-dark">
          <li className="list-group-item bg-info-subtle">
            <i className="bi bi-person-circle me-1"></i>User
          </li>
        </Link>
        <Link to="/dashboard/banner" className="text-decoration-none text-dark">
          <li className="list-group-item bg-info-subtle">
            <i className="bi bi-image me-1"></i>Banner
          </li>
        </Link>
        <Link to="/dashboard/promo" className="text-decoration-none text-dark">
          <li className="list-group-item bg-info-subtle">
            <i className="bi bi-percent me-1"></i>Promo
          </li>
        </Link>
        <Link
          to="/dashboard/category"
          className="text-decoration-none text-dark"
        >
          <li className="list-group-item bg-info-subtle">
            <i className="bi bi-tags-fill me-1"></i>Categoty
          </li>
        </Link>
        <Link
          to="/dashboard/activity"
          className="text-decoration-none text-dark"
        >
          <li className="list-group-item bg-info-subtle">
            <i className="bi bi-airplane-fill me-1"></i>Activity
          </li>
        </Link>
      </ul>
    </div>
  );
}
