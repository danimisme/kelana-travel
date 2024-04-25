import FormBanner from "../../../component/Fragments/FormBanner/FormBanner";
import Layout from "../../../layouts/Layout";
import useCreate from "../../../hooks/useCreate";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreateBannerPage() {
  const { create } = useCreate();
  const navigate = useNavigate();
  const handleCreateBanner = async (data) => {
    const res = await create("create-banner", data);
    if (res.status === 200) {
      navigate("/dashboard/banner");
      toast.success(res.data.message);
    }
  };

  return (
    <Layout>
      <div className="mt-5 container-lg">
        <div className="row py-5 align-items-center">
          <FormBanner onSubmit={handleCreateBanner} />
        </div>
      </div>
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
