import { Link } from "react-router-dom";
import Layout from "../../../layouts/Layout";
import useGetData from "../../../hooks/useGetData";
import { useEffect, useState } from "react";
export default function CategoryDashboardPage() {
  const { getData } = useGetData();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getData("categories").then((res) => setCategories(res.data.data));
  }, []);
  console.log(categories);
  return (
    <Layout>
      <div className="mt-5 container-lg">
        <div className="py-5 ">
          <div className="d-md-flex justify-content-between px-3">
            <h1 className="text-center text-orange">
              <i className="bi bi-image me-1"> </i>Category Data
            </h1>
            <Link
              to="/dashboard/category/create-category"
              className="text-decoration-none d-flex justify-content-center align-items-center"
            >
              <div className=" button-create">
                <i className="bi bi-plus-circle-fill ms-2 fs-3"></i>
                <span className="fs-5 fw-bold px-1">Create Category</span>
              </div>
            </Link>
          </div>
          <div className="row justify-content-center"></div>
        </div>
      </div>
    </Layout>
  );
}
