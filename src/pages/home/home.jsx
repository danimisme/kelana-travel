import ActivityCarousel from "../../component/Fragments/ActivityCarousel/ActivityCarousel";
import BannerCarousel from "../../component/Fragments/BannerCarousel/BannerCarousel";
import CategoryCarousel from "../../component/Fragments/CategoryCarousel/CategortCarousel";
import PromoCarousel from "../../component/Fragments/PromoCarousel/PromoCarousel";
import Layout from "../../layouts/Layout";
import "./home.css";

export default function Home() {
  return (
    <Layout>
      <main>
        <div className="jumbotron d-flex align-items-center justify-content-center text-white ">
          <h1 className="text_shadow fs-1 fw-bold">
            Adventure to Explore <br /> Through the Beautiful World
          </h1>
        </div>
        <BannerCarousel />
        <PromoCarousel />
        <CategoryCarousel />
        <ActivityCarousel />
      </main>
    </Layout>
  );
}
