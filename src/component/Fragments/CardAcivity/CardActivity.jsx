import { Link } from "react-router-dom";
export default function CardActivity({ activity }) {
  return (
    <Link to={`/activity/${activity.id}`}>
      <div className="card">
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
              {` activity.city activity.province`}
            </p>
          </div>
          <div>
            <p>
              {activity.price.toLocaleString("id-ID", {
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
