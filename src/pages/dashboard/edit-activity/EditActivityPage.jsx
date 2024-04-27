import { useState, useEffect } from "react";
import useGetData from "../../../hooks/useGetData";
import useUpdate from "../../../hooks/useUpdate";
import FormActivity from "../../../component/Fragments/FormActivity/FormActivity";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../../layouts/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditActivityPage() {
  const [activity, setActivity] = useState({});
  const { getData } = useGetData();
  const { update } = useUpdate();
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getData(`activity/${params.id}`).then((res) => {
      setActivity(res.data.data);
    });
  }, []);

  const handleEditActivity = async (data) => {
    const res = await update(`update-activity/${params.id}`, data);
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
        <FormActivity activity={activity} onSubmit={handleEditActivity} />
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
