import CardPromo from "../../component/Fragments/CardPromo/CardPromo";
import useGetData from "../../hooks/useGetData";
import { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import Pagination from "../../component/Elements/Pagination/Pagination";
import "./PromoPage.css";

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
      <div
        className={`hero-promo d-flex align-items-center justify-content-center text-white `}
      >
        <h1 className={`text_shadow text-center fs-1 fw-bold`}>
          Discover Your Dream Getaway <br /> with Our Exclusive Promotions!
        </h1>
      </div>
      <div className="mt-5 container-lg">
        <div className="d-flex justify-content-start align-items-baseline px-3">
          <div>
            <i className="bi bi-ticket-perforated-fill me-2 fs-2 text-orange"></i>
          </div>
          <div className="d-flex flex-column">
            <h3 className=" fw-bold m-0">Special Promo For You !</h3>
            <p className="m-0 text-muted">
              &quot;Exclusive Offer Just for You! Don&apos;t Miss Out!&quot;
            </p>
          </div>
        </div>
        <div className="row">
          {promos.slice(startIndex, endIndex).map((promo, index) => (
            <CardPromo promo={promo} key={promo.id} index={index} />
          ))}
        </div>
        <Pagination setPage={setPage} page={page} pages={totalPages} />
      </div>
    </Layout>
  );
}
