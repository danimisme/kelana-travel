import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../../layouts/Layout";
import useGetData from "../../../hooks/useGetData";
import { useEffect, useState } from "react";
import FormCategory from "../../../component/Fragments/FormCategory/FormCategory";
import useUpdate from "../../../hooks/useUpdate";

export default function EditCategoryPage() {
  const params = useParams();
  const { getData } = useGetData();
  const [categories, setCategory] = useState([]);
  const { update } = useUpdate();
  const navigate = useNavigate();

  useEffect(() => {
    getData(`category/${params.id}`).then((res) =>
      setCategory(res?.data?.data)
    );
  }, []);

  const handleUpdateCategory = async (data) => {
    try {
      await update(`update-category/${params.id}`, data);
      navigate("/dashboard/category");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="mt-5 container-lg">
        <div className="row py-5 align-items-center">
          <FormCategory category={categories} onSubmit={handleUpdateCategory} />
        </div>
      </div>
    </Layout>
  );
}
