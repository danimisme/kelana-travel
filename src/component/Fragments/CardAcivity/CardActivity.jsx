import { Link } from "react-router-dom";
import "./CardActivity.css";
import Animation from "../../../utils/aos";
import { useEffect } from "react";
export default function CardActivity({ activity, index }) {
  useEffect(() => {
    Animation();
  }, []);
  return (
    <Link to={`/activity/${activity.id} `} className="text-decoration-none">
      <div
        className="card"
        style={{ backgroundColor: "#FFC47E" }}
        data-aos="fade-up"
        data-aos-delay={(index % 6) * 100}
      >
        <img
          src={activity.imageUrls[0]}
          className={` img card-img-top`}
          alt="..."
        />
        <p className="position-absolute top-0 end-0 bg-white m-1 px-2 py-1 rounded-pill ">
          <i className="bi bi-star-fill text-warning"></i> {activity.rating}
        </p>
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <h6 className={` title card-title`}>{activity.title}</h6>
            <p className={` text_location`}>
              <i className="bi bi-geo-alt-fill text-success"></i>
              {` ${activity.city}, ${activity.province}`}
            </p>
          </div>
          <div>
            <p className="p-0 m-0 text-decoration-line-through">
              {activity.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
            <p>
              {activity.price_discount.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
