import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetData from "../../../hooks/useGetData";
import useUpdate from "../../../hooks/useUpdate";
import Layout from "../../../layouts/Layout";
import FormBanner from "../../../component/Fragments/FormBanner/FormBanner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditBannerPage() {
  const { getData } = useGetData();
  const [banner, setBanner] = useState({});
  const { update } = useUpdate();
  const navigate = useNavigate();

  const params = useParams();
  useEffect(() => {
    getData(`banner/${params.id}`).then((res) => setBanner(res?.data?.data));
  }, []);

  const handleUpdateBanner = async (data) => {
    const res = await update(`update-banner/${params.id}`, data);
    if (res.status === 200) {
      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/dashboard/banner");
      }, 1500);
    } else {
      toast.error(res.response.data.message);
      console.log(res.response.data.message);
    }
  };

  return (
    <Layout>
      <div className="mt-5 container-lg">
        <div className="row py-5 align-items-center">
          <FormBanner banner={banner} onSubmit={handleUpdateBanner} />
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
