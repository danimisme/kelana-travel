import Layout from "../../../layouts/Layout";
import FormCategory from "../../../component/Fragments/FormCategory/FormCategory";
import useCreate from "../../../hooks/useCreate";
import { useNavigate } from "react-router-dom";

export default function CreateCategoryPage() {
  const { create } = useCreate();
  const navigate = useNavigate();
  const handleCreateCategory = async (data) => {
    try {
      await create("create-category", data);
      navigate("/dashboard/category");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="mt-5 container-lg">
        <div className="row py-5 align-items-center">
          <FormCategory onSubmit={handleCreateCategory} />
        </div>
      </div>
    </Layout>
  );
}
