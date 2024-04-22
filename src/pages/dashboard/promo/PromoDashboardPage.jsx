import { Link } from "react-router-dom";
import Layout from "../../../layouts/Layout";
import useGetData from "../../../hooks/useGetData";
import { useEffect, useState } from "react";

export default function PromoDashboardPage() {
  const { getData } = useGetData();
  const [promos, setPromos] = useState([]);
  useEffect(() => {
    getData("promos").then((res) => setPromos(res.data.data));
  }, []);

  return (
    <Layout>
      <div className="mt-5 container-lg">
        <div className=" py-5">
          <div className="d-md-flex justify-content-between px-3 ">
            <h1 className="text-center text-orange">
              <i className="bi bi-percent me-3"></i>Promo Data
            </h1>
            <Link
              to="/dashboard/promo/create-promo"
              className="text-decoration-none  d-flex justify-content-center align-items-center"
            >
              <div className=" button-create">
                <i className="bi bi-plus-circle-fill ms-2 fs-3"></i>
                <span className="fs-5 fw-bold px-1">Create Promo</span>
              </div>
            </Link>
          </div>
          <div className="row justify-content-center">
            {promos.map((promo) => (
              <div className="col-lg-4 col-md-6 col-10 mt-3" key={promo.id}>
                <Link
                  to={`/dashboard/promo/${promo.id}`}
                  className="text-decoration-none text-dark"
                >
                  <div className="card-promo">
                    <img
                      src={promo.imageUrl}
                      alt={promo.title}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{promo.title}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
