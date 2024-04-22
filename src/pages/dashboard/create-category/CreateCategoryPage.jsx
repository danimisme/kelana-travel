import Layout from "../../../layouts/Layout";
import FormCategory from "../../../component/Fragments/FormCategory/FormCategory";

export default function CreateCategoryPage() {
  return (
    <Layout>
      <div className="mt-5 container-lg">
        <div className="row py-5 align-items-center">
          <FormCategory />
        </div>
      </div>
    </Layout>
  );
}
