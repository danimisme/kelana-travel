import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../../layouts/Layout";
import useGetData from "../../../hooks/useGetData";
import { useEffect, useState } from "react";
import FormCategory from "../../../component/Fragments/FormCategory/FormCategory";
import useUpdate from "../../../hooks/useUpdate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditCategoryPage() {
  const params = useParams();
  const { getData } = useGetData();
  const [categories, setCategory] = useState([]);
  const { update } = useUpdate();
  const navigate = useNavigate();

  useEffect(() => {
    getData(`category/${params.id}`).then((res) =>
      setCategory(res?.data?.data)
    );
  }, []);

  const handleUpdateCategory = async (data) => {
    const res = await update(`update-category/${params.id}`, data);
    if (res.status === 200) {
      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/dashboard/category");
      }, 1500);
    } else {
      toast.error(res.response.data.message);
    }
  };
  return (
    <Layout>
      <div className="mt-5 container-lg">
        <div className="row py-5 align-items-center">
          <FormCategory category={categories} onSubmit={handleUpdateCategory} />
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
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
