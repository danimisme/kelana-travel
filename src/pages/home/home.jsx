import ActivityCarousel from "../../component/Fragments/ActivityCarousel/ActivityCarousel";
import BannerCarousel from "../../component/Fragments/BannerCarousel/BannerCarousel";
import CategoryCarousel from "../../component/Fragments/CategoryCarousel/CategortCarousel";
import PromoCarousel from "../../component/Fragments/PromoCarousel/PromoCarousel";
import Layout from "../../layouts/Layout";
import "./home.css";

export default function Home() {
  return (
    <Layout>
      <main className="mt-5 py-5">
        <div className="row d-flex align-items-center justify-content-center my-5">
          <div className="col-lg-4  col-10 ">
            <h1 className=" fs-1 fw-bold">
              Adventure to Explore <br /> Through the Beautiful World
            </h1>
          </div>
          <div className="col-lg-5 col-10">
            <BannerCarousel />
          </div>
        </div>
        <div className="container-lg my-5 py-5 promo_section">
          <PromoCarousel />
        </div>
        <div className="category_section py-5 my-5">
          <CategoryCarousel />
        </div>
        <ActivityCarousel />
      </main>
    </Layout>
  );
}
