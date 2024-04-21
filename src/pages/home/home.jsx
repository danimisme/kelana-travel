import ActivityCarousel from "../../component/Fragments/ActivityCarousel/ActivityCarousel";
import BannerCarousel from "../../component/Fragments/BannerCarousel/BannerCarousel";
import PromoCarousel from "../../component/Fragments/PromoCarousel/PromoCarousel";
import "./home.css";

export default function Home() {
  return (
    <main>
      <div className="jumbotron d-flex align-items-center justify-content-center text-white ">
        <h1>
          Adventure to Explore <br /> Through the Beautiful World
        </h1>
      </div>
      <BannerCarousel />
      <PromoCarousel />
      <ActivityCarousel />
    </main>
  );
}
