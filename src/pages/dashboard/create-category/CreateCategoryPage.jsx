import Layout from "../../../layouts/Layout";
import FormCategory from "../../../component/Fragments/FormCategory/FormCategory";
import useCreate from "../../../hooks/useCreate";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreateCategoryPage() {
  const { create } = useCreate();
  const navigate = useNavigate();
  const handleCreateCategory = async (data) => {
    const res = await create("create-category", data);
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
          <FormCategory onSubmit={handleCreateCategory} />
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
