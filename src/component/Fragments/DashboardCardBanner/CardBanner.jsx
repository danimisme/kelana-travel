import moment from "moment/moment";
import "./CardBanner.css";
import { Link } from "react-router-dom";

export default function CardBanner({ banner, index }) {
  return (
    <div className="card card-banner m-3 rounded">
      <div className="card-img-top">
        <img
          src={banner.imageUrl}
          alt=""
          style={{ width: "100%", aspectRatio: "5/3", objectFit: "cover" }}
        />
      </div>
      <div className="button-icon-container">
        <Link to={`/dashboard/banner/edit-banner/${banner.id}`}>
          <div className="button-icon btn-edit">
            <i className="bi bi-pencil-square "></i>
          </div>
        </Link>
        <div className="button-icon btn-delete">
          <i className="bi bi-trash-fill"></i>
        </div>
      </div>
      <div
        className="card-body text-white p-3"
        style={{ backgroundColor: "#8B322C" }}
      >
        <p className="card-text fw-bold">{banner.name}</p>
        <p className="card-text small  m-0 p-0">
          <span className="fw-bold">
            <i className="bi bi-alarm me-1"></i>Created At :
          </span>
          {moment(banner.createdAt).format("DD MMMM YYYY  HH:mm:ss")}
        </p>
        <p className="card-text small m-0 p-0">
          <span className="fw-bold">
            <i className="bi bi-alarm me-1"></i>Last Update :
          </span>
          {moment(banner.updatedAt).format("DD MMMM YYYY HH:mm:ss")}
        </p>
      </div>
    </div>
  );
}
