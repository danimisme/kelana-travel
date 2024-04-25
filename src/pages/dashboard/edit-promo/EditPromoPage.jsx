import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useGetData from "../../../hooks/useGetData";
import useUpdate from "../../../hooks/useUpdate";
import Layout from "../../../layouts/Layout";
import FormPromo from "../../../component/Fragments/FormPromo/FormPromo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditPromoPage() {
  const { getData } = useGetData();
  const [promo, setPromo] = useState({});

  const navigate = useNavigate();

  const { update } = useUpdate();
  const params = useParams();
  useEffect(() => {
    getData(`promo/${params.id}`).then((res) => setPromo(res?.data?.data));
  }, []);

  const handleUpdatePromo = async (data) => {
    const res = await update(`update-promo/${params.id}`, data);
    if (res.status === 200) {
      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/dashboard/promo");
      }, 1500);
    }
  };

  return (
    <Layout>
      <FormPromo promo={promo} onSubmit={handleUpdatePromo} />
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
