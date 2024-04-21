import Layout from "../../../layouts/Layout";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useState } from "react";
import CardUser from "../../../component/Fragments/DashboardCardUser/CardUser";

export default function UserDashboardPage() {
  const { userLog } = useAuth();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    userLog("all-user", setUsers);
  }, []);
  console.log(users);
  return (
    <Layout>
      <div className="mt-5 container-lg">
        <div className="py-5">
          <h1>User Dashboard</h1>
          <div className="row">
            {users.map((user) => (
              <div className="col-10 col-md-4 col-lg-3" key={user.id}>
                <CardUser user={user} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
