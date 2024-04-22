import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useGetData from "../../../hooks/useGetData";
import useUpdate from "../../../hooks/useUpdate";
import Layout from "../../../layouts/Layout";
import FormPromo from "../../../component/Fragments/FormPromo/FormPromo";

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
    try {
      const res = await update(`update-promo/${params.id}`, data);
      if (res.status === 200) {
        navigate("/dashboard/promo");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <FormPromo promo={promo} onSubmit={handleUpdatePromo} />
    </Layout>
  );
}
