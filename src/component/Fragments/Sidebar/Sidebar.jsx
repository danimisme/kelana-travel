import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleSidebar } from "../../../redux/slice/sidebarSlice";
import "./Sidebar.css";
export default function Sidebar() {
  const sidebarShow = useSelector((state) => state.sidebar.sidebarShow);
  const dispacth = useDispatch();
  return (
    <div
      className={` sidebar ${sidebarShow ? "showSidebar" : "hideSidebar"}  `}
    >
      <div className="mt-3 py-3">
        <div className="mt-5 mb-3  dashboard-header">
          <h4 className="m-0 p-0">Setting</h4>
          <div className="button" onClick={() => dispacth(toggleSidebar())}>
            {sidebarShow ? (
              <i className="bi bi-arrow-left-circle fs-3 "></i>
            ) : (
              <i className="bi bi-arrow-right-circle fs-3 "></i>
            )}
          </div>
        </div>
        <div className="list-group list-group-flush ">
          <Link
            to="/dashboard/user"
            className="text-decoration-none text-dark "
          >
            <div className="list-group-item ">
              <p className="m-0 p-0">User</p>
              <div className="btn-dashboard">
                <i className="bi bi-person-circle me-1 mx-0"></i>
              </div>
            </div>
          </Link>
          <Link
            to="/dashboard/banner"
            className="text-decoration-none text-dark"
          >
            <div className="list-group-item">
              <p className="m-0 p-0">Banner</p>
              <div className="btn-dashboard">
                <i className="bi bi-image me-1"></i>
              </div>
            </div>
          </Link>
          <Link
            to="/dashboard/promo"
            className="text-decoration-none text-dark"
          >
            <div className="list-group-item">
              <p className="m-0 p-0">Promo</p>
              <div className="btn-dashboard">
                <i className="bi bi-percent me-1"></i>
              </div>
            </div>
          </Link>
          <Link
            to="/dashboard/category"
            className="text-decoration-none text-dark"
          >
            <div className="list-group-item">
              <p className="m-0 p-0">Category</p>
              <div className="btn-dashboard">
                <i className="bi bi-tags-fill me-1"></i>
              </div>
            </div>
          </Link>
          <Link
            to="/dashboard/activity"
            className="text-decoration-none text-dark"
          >
            <div className="list-group-item">
              <p className="m-0 p-0">Activity</p>
              <div className="btn-dashboard">
                <i className="bi bi-airplane-fill me-1"></i>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
