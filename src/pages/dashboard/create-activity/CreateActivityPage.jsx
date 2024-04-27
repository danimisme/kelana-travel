import Layout from "../../../layouts/Layout";
import FormActivity from "../../../component/Fragments/FormActivity/FormActivity";
import useCreate from "../../../hooks/useCreate";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function CreateActivityPage() {
  const { create } = useCreate();
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    const res = await create("create-activity", data);
    if (res.status === 200) {
      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/dashboard/activity");
      }, 1500);
    } else {
      toast.error(res.response.data.message);
    }
  };
  return (
    <Layout>
      <div className="container-lg mt-5">
        <div className="row py-5">
          <FormActivity onSubmit={handleCreate} />
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
