import { Link } from "react-router-dom";
import Layout from "../../../layouts/Layout";
import useGetData from "../../../hooks/useGetData";
import { useEffect, useState } from "react";
import CardCategory from "../../../component/Fragments/DashboardCardCategory/CardCategory";
import useDelete from "../../../hooks/useDelete";
export default function CategoryDashboardPage() {
  const { getData } = useGetData();
  const [categories, setCategories] = useState([]);
  const { deleteData } = useDelete();
  useEffect(() => {
    getData("categories").then((res) => setCategories(res.data.data));
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await deleteData(`delete-category/${id}`);
      if (res.status === 200) {
        getData("categories").then((res) => setCategories(res.data.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="mt-5 container-lg">
        <div className="py-5 ">
          <div className="d-md-flex justify-content-between px-3">
            <h1 className="text-center " style={{ color: "#FF6000" }}>
              <i className="bi bi-image me-1"> </i>Category Data
            </h1>
            <Link
              to="/dashboard/category/create-category"
              className="text-decoration-none d-flex justify-content-center align-items-center"
            >
              <div className=" button-create" style={{ color: "#FF6000" }}>
                <i className="bi bi-plus-circle-fill ms-2 fs-3"></i>
                <span className="fs-5 fw-bold px-1">Create Category</span>
              </div>
            </Link>
          </div>
          <div className="row justify-content-center">
            {categories.map((category) => (
              <div className="col-10 col-md-6 col-lg-4 my-3" key={category.id}>
                <CardCategory category={category} handleDelete={handleDelete} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
