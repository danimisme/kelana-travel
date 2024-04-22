import { useParams } from "react-router-dom";
import Layout from "../../../layouts/Layout";
import useGetData from "../../../hooks/useGetData";
import { useEffect, useState } from "react";
import FormCategory from "../../../component/Fragments/FormCategory/FormCategory";

export default function EditCategoryPage() {
  const params = useParams();
  const { getData } = useGetData();
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    getData(`category/${params.id}`).then((res) =>
      setCategory(res?.data?.data)
    );
  }, []);
  return (
    <Layout>
      <div className="mt-5 container-lg">
        <div className="row py-5 align-items-center">
          <FormCategory category={categories} />
        </div>
      </div>
    </Layout>
  );
}
