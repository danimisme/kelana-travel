import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useAuth from "../../hooks/useAuth";
import Layout from "../../layouts/Layout";
import { toggleFormUser } from "../../redux/slice/FormUserSlice";
import EditUserForm from "../../component/Fragments/FormUser/FormUser";
import useUpdate from "../../hooks/useUpdate";
export default function ProfilePage() {
  const { userLog } = useAuth();
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const { update } = useUpdate();
  useEffect(() => {
    userLog("user", (res) => {
      setUser(res);
    });
  }, []);

  const updateUser = async (data) => {
    try {
      await update(`update-profile/`, data);
      userLog("user", (res) => {
        setUser(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="mt-5 container-lg py-5">
        <div
          className="row bg-light py-2 rounded-lg mx-3"
          style={{
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "15px",
          }}
        >
          <h2 className="text-center text-orange my-2"> My Profile </h2>
          <div className="col-lg-4 col-offset-lg-1 col-10 mx-auto p-3">
            <img
              src={user?.profilePictureUrl}
              alt={user?.name}
              className="img-fluid rounded mb-3 w-100"
            />
          </div>
          <div className="col-lg-7 col-10 mx-auto p-3 d-flex flex-column justify-content-center">
            <h3 className="text-orange mb-3">{user?.name}</h3>
            <p className="fs-5 ">
              <span className="fw-bold"> Email : </span>
              {user?.email}
            </p>
            <p className="fs-5 ">
              <span className="fw-bold"> Phone : </span>
              {user?.phoneNumber}
            </p>
            <p className="fs-5 ">
              <span className="fw-bold"> Role : </span>
              {user?.role}
            </p>
            <button
              className="default-button btn-orange w-50"
              onClick={() => dispatch(toggleFormUser())}
            >
              Edit Profile
            </button>
          </div>
        </div>
        <EditUserForm user={user} onSubmit={updateUser} />
      </div>
    </Layout>
  );
}
