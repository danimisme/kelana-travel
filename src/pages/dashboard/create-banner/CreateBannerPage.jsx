import FormBanner from "../../../component/Fragments/FormBanner/FormBanner";
import Layout from "../../../layouts/Layout";
import useCreate from "../../../hooks/useCreate";
import { useNavigate } from "react-router-dom";

export default function CreateBannerPage() {
  const { create } = useCreate();
  const navigate = useNavigate();
  const handleCreateBanner = async (data) => {
    try {
      await create("create-banner", data);
      navigate("/dashboard/banner");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="mt-5 container-lg">
        <div className="row py-5 align-items-center">
          <FormBanner onSubmit={handleCreateBanner} />
        </div>
      </div>
    </Layout>
  );
}
