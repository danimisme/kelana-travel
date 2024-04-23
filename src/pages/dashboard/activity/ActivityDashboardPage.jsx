import { Link } from "react-router-dom";
import Layout from "../../../layouts/Layout";

import useGetData from "../../../hooks/useGetData";
import { useEffect, useState } from "react";
import CardActivity from "../../../component/Fragments/DashboardCardActivity/CardActivity";

export default function ActivityDashboardPage() {
  const { getData } = useGetData();
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    getData("activities").then((res) => setActivities(res.data.data));
  }, []);

  console.log(activities);
  return (
    <Layout>
      <div className="container-lg mt-5">
        <div className="py-5">
          <div className="d-md-flex justify-content-between px-3 ">
            <h1 className="text-center " style={{ color: "#B67352" }}>
              <i className="bi bi-airplane-fill me-3"></i>Activity Data
            </h1>
            <Link
              to="/dashboard/activity/create-activity"
              className="text-decoration-none  d-flex justify-content-center align-items-center"
            >
              <div
                className=" button-create"
                style={{ backgroundColor: "#B67352", color: "white" }}
              >
                <i className="bi bi-plus-circle ms-2 fs-3"></i>
                <span className="fs-5 fw-bold px-1">Create Activity</span>
              </div>
            </Link>
          </div>
          <div className="row justify-content-center">
            {activities.map((activity) => (
              <div className="col-lg-4 col-md-6 col-10 mt-3" key={activity.id}>
                <CardActivity activity={activity} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
