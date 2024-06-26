import { useNavigate } from "react-router-dom";
import FormPromo from "../../../component/Fragments/FormPromo/FormPromo";
import Layout from "../../../layouts/Layout";
import useCreate from "../../../hooks/useCreate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreatePromoPage() {
  const navigate = useNavigate();
  const { create } = useCreate();
  const handleCreatePromo = async (data) => {
    const res = await create("create-promo", data);
    if (res.status === 200) {
      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/dashboard/promo");
      }, 1500);
    } else {
      toast.error(res.response.data.message);
    }
  };

  return (
    <Layout>
      <FormPromo onSubmit={handleCreatePromo} />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="light"
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
