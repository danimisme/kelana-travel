import { useParams } from "next/navigation";
import Layout from "../../../layouts/Layout";

export default function EditCategoryPage() {
  const params = useParams();
  return (
    <Layout>
      <div className="mt-5 container-lg">
        <div className="row py-5 align-items-center">
          <h1>Edit Category : {params.id}</h1>
        </div>
      </div>
    </Layout>
  );
}
