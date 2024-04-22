import { Link } from "react-router-dom";
import Layout from "../../../layouts/Layout";

export default function PromoDashboardPage() {
  return (
    <Layout>
      <div className="mt-5 container-lg">
        <div className=" py-5">
          <div className="d-flex justify-content-between px-3">
            <h1 className="text-center text-orange">
              <i className="bi bi-percent me-3"></i>Promo Data
            </h1>
            <Link
              to="/dashboard/promo/create-promo"
              className="text-decoration-none"
            >
              <div className=" button-create">
                <i className="bi bi-plus-circle-fill ms-2 fs-3"></i>
                <span className="fs-5 fw-bold px-1">Create Promo</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
