import { Link } from "react-router-dom";
import "./CardActivity.css";
import Animation from "../../../utils/aos";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function CardActivity({ activity, index }) {
  useEffect(() => {
    Animation();
  }, []);

  const location = useLocation();
  const pathname = location.pathname;
  return (
    <Link to={`/activity/${activity.id} `} className="text-decoration-none">
      <div
        className="card"
        style={{ backgroundColor: "#FFC47E" }}
        data-aos={`${pathname === "/activity" ? "fade-up" : ""}`}
        data-aos-delay={`${pathname === "/activity" ? (index % 6) * 100 : ""}`}
        data-aos-once="true"
      >
        <img
          src={activity?.imageUrls[0]}
          className={` img card-img-top`}
          alt="..."
        />
        <p className="position-absolute top-0 end-0 bg-white m-1 px-2 py-1 rounded-pill ">
          <i className="bi bi-star-fill text-warning"></i> {activity?.rating}
        </p>
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <h6 className={` title card-title`}>{activity?.title}</h6>
            <p className={` text_location`}>
              <i className="bi bi-geo-alt-fill text-success"></i>
              {` ${activity?.city}, ${activity?.province}`}
            </p>
          </div>
          <div>
            {activity.price && (
              <p className="p-0 m-0 text-decoration-line-through">
                {activity?.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </p>
            )}
            {activity.price_discount && (
              <p>
                {activity?.price_discount.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
