import Layout from "../../../layouts/Layout";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useState } from "react";
import CardUser from "../../../component/Fragments/DashboardCardUser/CardUser";
import ModalUpdateRole from "../../../component/Elements/Modals/ModalUpdateRole/ModalUpdateRole";
import { useDispatch } from "react-redux";
import { openModalUpdateRole } from "../../../redux/slice/ModalUpdateRoleSlice";
import useUpdate from "../../../hooks/useUpdate";

export default function UserDashboardPage() {
  const { userLog } = useAuth();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const { update } = useUpdate();

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
            {users.map((user, index) => (
              <div className="col-10 col-md-4 col-lg-3 mx-auto" key={user.id}>
                <CardUser
                  user={user}
                  index={index}
                  handleUpdateRole={handleUpdateRole}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
