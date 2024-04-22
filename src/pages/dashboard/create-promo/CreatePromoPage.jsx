import { useNavigate } from "react-router-dom";
import FormPromo from "../../../component/Fragments/FormPromo/FormPromo";
import Layout from "../../../layouts/Layout";
import useCreate from "../../../hooks/useCreate";

export default function CreatePromoPage() {
  const navigate = useNavigate();
  const { create } = useCreate();
  const handleCreatePromo = async (data) => {
    try {
      await create("create-promo", data);
      navigate("/dashboard/promo");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <FormPromo onSubmit={handleCreatePromo} />
    </Layout>
  );
}
