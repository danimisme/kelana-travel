import { Link } from "react-router-dom";
import Layout from "../../../layouts/Layout";
import useGetData from "../../../hooks/useGetData";
import { useEffect, useState } from "react";
import CardActivity from "../../../component/Fragments/DashboardCardActivity/CardActivity";
import useDelete from "../../../hooks/useDelete";

export default function ActivityDashboardPage() {
  const { getData } = useGetData();
  const [activities, setActivities] = useState([]);
  const { deleteData } = useDelete();

  useEffect(() => {
    getData("activities").then((res) => setActivities(res.data.data));
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await deleteData(`delete-activity/${id}`);
      if (res.status === 200) {
        getData("activities").then((res) => setActivities(res.data.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(activities);
  return (
    <Layout>
      <div className="container-lg mt-5">
        <div className="py-5">
          <div className="d-md-flex justify-content-between px-3 ">
            <h1 className="text-center " style={{ color: "#FF6868" }}>
              <i className="bi bi-airplane-fill me-3"></i>Activity Data
            </h1>
            <Link
              to="/dashboard/activity/create-activity"
              className="text-decoration-none  d-flex justify-content-center align-items-center"
            >
              <div
                className=" button-create"
                style={{ backgroundColor: "#FF6868", color: "white" }}
              >
                <i className="bi bi-plus-circle ms-2 fs-3"></i>
                <span className="fs-5 fw-bold px-1">Create Activity</span>
              </div>
            </Link>
          </div>
          <div className="row justify-content-center">
            {activities.map((activity) => (
              <div className="col-lg-4 col-md-6 col-10 mt-3" key={activity.id}>
                <CardActivity activity={activity} handleDelete={handleDelete} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
