import Layout from "../../../layouts/Layout";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useState } from "react";
import CardUser from "../../../component/Fragments/DashboardCardUser/CardUser";
import ModalUpdateRole from "../../../component/Elements/Modals/ModalUpdateRole/ModalUpdateRole";
import { useDispatch } from "react-redux";
import { openModalUpdateRole } from "../../../redux/slice/ModalUpdateRoleSlice";
import useUpdate from "../../../hooks/useUpdate";
import Pagination from "../../../component/Elements/Pagination/Pagination";

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
  console.log(totalPages);

  const handleUpdateRole = (user) => {
    setUser(user);
    dispatch(openModalUpdateRole());
    console.log(user);
  };

  const updateRole = async (id, role) => {
    try {
      await update(`update-user-role/${id}`, role);
      userLog("all-user", setUsers);
    } catch (error) {
      console.log(error);
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
          <h1>User Dashboard</h1>
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
    </Layout>
  );
}
