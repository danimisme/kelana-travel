import Layout from "../../../layouts/Layout";
import FormActivity from "../../../component/Fragments/FormActivity/FormActivity";
import useCreate from "../../../hooks/useCreate";
import { useNavigate } from "react-router-dom";

export default function CreateActivityPage() {
  const { create } = useCreate();
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    try {
      const res = await create("create-activity", data);
      if (res.status === 200) {
        navigate("/dashboard/activity");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="container-lg mt-5">
        <div className="row py-5">
          <FormActivity onSubmit={handleCreate} />
        </div>
      </div>
    </Layout>
  );
}
