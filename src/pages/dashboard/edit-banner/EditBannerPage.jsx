import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetData from "../../../hooks/useGetData";
import useUpdate from "../../../hooks/useUpdate";
import Layout from "../../../layouts/Layout";
import FormBanner from "../../../component/Fragments/FormBanner/FormBanner";

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
    try {
      await update(`update-banner/${params.id}`, data);
      navigate("/dashboard/banner");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="mt-5 container-lg">
        <div className="row py-5 align-items-center">
          <FormBanner banner={banner} onSubmit={handleUpdateBanner} />
        </div>
      </div>
    </Layout>
  );
}
