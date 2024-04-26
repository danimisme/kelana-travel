import useGetData from "../../../hooks/useGetData";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./CategoryCarousel.css";

export default function CategoryCarousel() {
  const [Categories, setCategories] = useState([]);
  const { getData } = useGetData();
  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    375: {
      items: 1,
    },
    568: {
      items: 2,
    },
    800: {
      items: 4,
      itemsFit: "contain",
    },
  };
  useEffect(() => {
    getData("categories").then((res) => setCategories(res.data.data));
  }, []);

  return (
    <div className={`categories mt-3 container-fluid `}>
      <div className="d-flex justify-content-start align-items-baseline p-3">
        <div>
          <i className="bi bi-geo-alt-fill fs-2 me-2 text-orange"></i>
        </div>
        <div>
          <h3 className="m-0 fw-bold">Find What You Love</h3>
          <p className="m-0">&quot;Let&apos;s Discover Your Passion&quot;</p>
        </div>
      </div>
      <AliceCarousel
        mouseTracking
        infinite
        disableDotsControls
        renderNextButton={() => (
          <i
            className={`bi bi-arrow-right-short fs-1 arrow_button arrow_button_right`}
          ></i>
        )}
        renderPrevButton={() => (
          <i
            className={`bi bi-arrow-left-short fs-1 arrow_button arrow_button_left`}
          ></i>
        )}
        responsive={responsive}
      >
        {Categories.map((category) => (
          <div key={category.id} className="mx-3" onDragStart={handleDragStart}>
            <p className="position-absolute p-3 fw-bold text-white bg-dark rounded bg-opacity-75">
              {category.name}
            </p>
            <img src={category.imageUrl} alt={category.name} className="img" />
          </div>
        ))}
      </AliceCarousel>
    </div>
  );
}
