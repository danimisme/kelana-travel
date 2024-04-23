import { Link } from "react-router-dom";
import Layout from "../../../layouts/Layout";
import useGetData from "../../../hooks/useGetData";
import { useEffect, useState } from "react";
import CardActivity from "../../../component/Fragments/DashboardCardActivity/CardActivity";
import useDelete from "../../../hooks/useDelete";
import Pagination from "../../../component/Elements/Pagination/Pagination";
import SelectOption from "../../../component/Elements/SelectOption/SelectOption";

export default function ActivityDashboardPage() {
  const { getData } = useGetData();
  const [activities, setActivities] = useState([]);
  const { deleteData } = useDelete();
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(activities.length / itemsPerPage);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getData("activities").then((res) => setActivities(res.data.data));
    getData("categories").then((res) => setCategories(res.data.data));
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

  const handleReset = () => {
    const select = document.getElementById("select_categories");
    select.value = "Select";
    getData("activities").then((res) => setActivities(res.data.data));
  };

  const handleFilter = async () => {
    const select = document.getElementById("select_categories");
    const value = select.value;
    if (value === "Select") {
      handleReset();
      return;
    }
    getData(`activities-by-category/${value}`).then((res) =>
      setActivities(res.data.data)
    );
  };

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

          <div className={`d-flex justify-content-center container-lg mt-2`}>
            <div className="d-flex align-items-center justify-content-center">
              <div className=" d-flex align-items-center ">
                <p className="m-0">Filter By Category</p>
              </div>
              <div className=" mx-3">
                <SelectOption selectItems={categories} id="select_categories" />
              </div>
            </div>
            <div className="d-flex gap-3">
              <button
                className="default-button btn-orange"
                onClick={handleFilter}
              >
                Filter
              </button>
              <button
                className="default-button "
                style={{ backgroundColor: "gray", color: "white" }}
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </div>

          <div className="row justify-content-center">
            {activities.slice(startIndex, endIndex).map((activity) => (
              <div className="col-lg-4 col-md-6 col-10 mt-3" key={activity.id}>
                <CardActivity activity={activity} handleDelete={handleDelete} />
              </div>
            ))}
          </div>
          <Pagination page={page} setPage={setPage} pages={totalPages} />
        </div>
      </div>
    </Layout>
  );
}
