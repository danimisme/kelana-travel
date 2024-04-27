import { Link } from "react-router-dom";
import ActivityCarousel from "../../component/Fragments/ActivityCarousel/ActivityCarousel";
import BannerCarousel from "../../component/Fragments/BannerCarousel/BannerCarousel";
import CategoryCarousel from "../../component/Fragments/CategoryCarousel/CategortCarousel";
import PromoCarousel from "../../component/Fragments/PromoCarousel/PromoCarousel";
import Layout from "../../layouts/Layout";
import "./home.css";
import Animation from "../../utils/aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Animation();
  }, []);
  return (
    <Layout>
      <main className="mt-5 py-5">
        <div className="row d-flex align-items-center justify-content-center  header-section">
          <div className="col-lg-5  col-10 text-header " data-aos="fade-right">
            <h1 className="  fw-bold text-orange  m-3">
              Adventure to Explore <br /> Through the Beautiful World
            </h1>
            <Link to="/activity" className="mb-3">
              <button className="default-button btn-orange m-3">
                Explore Now<i className="bi bi-arrow-right ms-2"></i>
              </button>
            </Link>
          </div>
          <div
            className="col-lg-5 col-10 banner-container"
            data-aos="fade-left"
          >
            <BannerCarousel />
          </div>
        </div>
        <div
          className="container-lg my-5 py-5 promo_section"
          data-aos="fade-up"
        >
          <PromoCarousel />
        </div>
        <div className="category_section py-5 my-5" data-aos="fade-up">
          <CategoryCarousel />
        </div>
        <div className="activity_section py-5 mt-5" data-aos="fade-up">
          <ActivityCarousel />
        </div>
      </main>
    </Layout>
  );
}
