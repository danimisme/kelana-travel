import CardPromo from "../../component/Fragments/CardPromo/CardPromo";
import useGetData from "../../hooks/useGetData";
import { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import Pagination from "../../component/Elements/Pagination/Pagination";

export default function PromoPage() {
  const { getData } = useGetData();
  const [promos, setPromos] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(promos.length / itemsPerPage);
  useEffect(() => {
    getData("promos").then((res) => setPromos(res.data.data));
  });
  return (
    <Layout>
      <div className="mt-5 container-lg">
        <div className="py-5">
          <h1>Promo Page</h1>
          <div className="row">
            {promos.slice(startIndex, endIndex).map((promo) => (
              <CardPromo promo={promo} key={promo.id} />
            ))}
          </div>
          <Pagination setPage={setPage} page={page} pages={totalPages} />
        </div>
      </div>
    </Layout>
  );
}
