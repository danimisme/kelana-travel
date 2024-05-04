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
import SearchInput from "../../../component/Elements/SearchInput/SearchInput";

export default function UserDashboardPage() {
  const { userLog } = useAuth();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { update } = useUpdate();
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

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
  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [users, search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <Layout>
      <ModalUpdateRole user={user} onConfirm={updateRole} />
      <div className="mt-5 container-lg">
        <div className="py-5">
          <div className="d-sm-flex justify-content-between align-items-center m-3">
            <h1 className="text-center mb-3 text-orange">
              <i className="bi bi-person-circle me-2"></i>User Data
            </h1>
            <div className="mx-lg-0 mx-5 ">
              <SearchInput placeholder="Search User" onChange={handleSearch} />
            </div>
          </div>
          <div className="row justify-content-center">
            {filteredUsers.slice(startIndex, endIndex).map((user, index) => (
              <div className="col-10 col-md-4 col-lg-3  " key={user.id}>
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
