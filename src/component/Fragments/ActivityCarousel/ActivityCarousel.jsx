import useGetData from "../../../hooks/useGetData";
import { useEffect, useState } from "react";
import CardActivity from "../CardAcivity/CardActivity";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./ActivityCarousel.css";

export default function ActivityCarousel() {
  const [activities, setActivities] = useState([]);
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
      items: 3,
      itemsFit: "contain",
    },
  };
  useEffect(() => {
    getData("activities").then((res) => setActivities(res.data.data));
  }, []);

  return (
    <div className={`activities  container-fluid`}>
      <div className={`header`}>
        <div className="d-flex justify-content-start align-items-baseline">
          <div>
            <i className="bi bi-airplane-fill fs-2 me-2 text-orange"></i>
          </div>
          <div className="d-flex flex-column ">
            <h3 className="m-0 fw-bold">Explore All Activities</h3>
            <p className="m-0">
              &quot;Discover a Plethora of Activities to Explore&quot;
            </p>
          </div>
        </div>
      </div>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlay
        autoPlayInterval={2000}
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
        {activities.map((activity) => (
          <div key={activity.id} className="mx-3" onDragStart={handleDragStart}>
            <CardActivity key={activity.id} activity={activity} />
          </div>
        ))}
      </AliceCarousel>

      <div className="d-flex justify-content-center">
        <Link to="/activity">
          <button className="default-button btn-orange">
            See All Activities <i className="bi bi-arrow-right"></i>
          </button>
        </Link>
      </div>
    </div>
  );
}
