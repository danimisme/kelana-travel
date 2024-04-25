import { useEffect, useState } from "react";
import useGetData from "../../../hooks/useGetData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./BannerCarousel.css";

export default function BannerCarousel() {
  const [banners, setBanners] = useState([]);
  const { getData } = useGetData();
  const handleDragStart = (e) => e.preventDefault();
  const responsive = {
    375: {
      items: 1,
    },
    568: {
      items: 1,
    },
    800: {
      items: 1,
      itemsFit: "cover",
    },
  };

  useEffect(() => {
    getData("banners").then((res) => setBanners(res.data.data));
  }, []);

  return (
    <div className="banner d-flex justify-content-center align-items-center ">
      <AliceCarousel
        mouseTracking
        autoPlay
        autoPlayInterval={2000}
        infinite
        disableButtonsControls
        disableDotsControls
        // onSlideChange={handleOnSlideChange}
        // onSlideChanged={handleOnSlideChanged}
        responsive={responsive}
      >
        {banners.map((banner) => (
          <div key={banner.id} className="banner-item">
            <img
              src={banner.imageUrl}
              alt={banner.title}
              onDragStart={handleDragStart}
              className="img-fluid"
            />
            <h3 className="text-center">{banner.name}</h3>
          </div>
        ))}
      </AliceCarousel>
    </div>
  );
}
