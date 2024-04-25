import Layout from "../../../layouts/Layout";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useState } from "react";
import CardUser from "../../../component/Fragments/DashboardCardUser/CardUser";
import ModalUpdateRole from "../../../component/Elements/Modals/ModalUpdateRole/ModalUpdateRole";
import { useDispatch } from "react-redux";
import { openModalUpdateRole } from "../../../redux/slice/ModalUpdateRoleSlice";
import useUpdate from "../../../hooks/useUpdate";
import Pagination from "../../../component/Elements/Pagination/Pagination";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UserDashboardPage() {
  const { userLog } = useAuth();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const { update } = useUpdate();
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(users.length / itemsPerPage);

  const handleUpdateRole = (user) => {
    setUser(user);
    dispatch(openModalUpdateRole());
  };

  const updateRole = async (user, role) => {
    const res = await update(`update-user-role/${user.id}`, role);
    if (res.status === 200) {
      setUsers([]);
      userLog("all-user", setUsers);
      toast.success(`${user.name} role has been updated to ${role.role}`);
    }
  };

  useEffect(() => {
    userLog("all-user", setUsers);
  }, []);
  return (
    <Layout>
      <ModalUpdateRole user={user} onConfirm={updateRole} />
      <div className="mt-5 container-lg">
        <div className="py-5">
          <h1 className="text-center mb-3 text-orange">
            <i className="bi bi-person-circle me-2"></i>User Dashboard
          </h1>
          <div className="row">
            {users.slice(startIndex, endIndex).map((user, index) => (
              <div className="col-10 col-md-4 col-lg-3 mx-auto" key={user.id}>
                <CardUser
                  user={user}
                  index={index}
                  handleUpdateRole={handleUpdateRole}
                />
              </div>
            ))}
          </div>
          <Pagination page={page} setPage={setPage} pages={totalPages} />
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        theme="colored"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Layout>
  );
}
