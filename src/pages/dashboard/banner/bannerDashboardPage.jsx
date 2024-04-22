import Layout from "../../../layouts/Layout";
import useGetData from "../../../hooks/useGetData";
import { useEffect, useState } from "react";
import CardBanner from "../../../component/Fragments/DashboardCardBanner/CardBanner";
import "./bannerDashboardPage.css";
import { Link } from "react-router-dom";
export default function BannerDashboardPage() {
  const { getData } = useGetData();
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    getData("banners").then((res) => setBanners(res.data.data));
  }, []);
  return (
    <Layout>
      <div className="mt-5 container-lg">
        <div className="py-5 ">
          <div className="d-flex justify-content-between px-3">
            <h1 className="text-center text-orange">Banner Data</h1>
            <Link
              to="/dashboard/banner/create-banner"
              className="text-decoration-none"
            >
              <div className=" button-create">
                <i className="bi bi-plus-circle-fill ms-2 fs-3"></i>
                <span className="fs-5 fw-bold px-1">Create Banner</span>
              </div>
            </Link>
          </div>
          <div className="row justify-content-center">
            {banners.map((banner, index) => (
              <div className="col-10 col-md-6 col-lg-4 my-3" key={banner.id}>
                <CardBanner banner={banner} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
