import CardPromo from "../../component/Fragments/CardPromo/CardPromo";
import useGetData from "../../hooks/useGetData";
import { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";

export default function PromoPage() {
  const { getData } = useGetData();
  const [promos, setPromos] = useState([]);
  useEffect(() => {
    getData("promos").then((res) => setPromos(res.data.data));
  });
  return (
    <Layout>
      <div className="mt-5 container-lg">
        <div className="py-5">
          <h1>Promo Page</h1>
          <div className="row">
            {promos.map((promo) => (
              <CardPromo promo={promo} key={promo.id} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
