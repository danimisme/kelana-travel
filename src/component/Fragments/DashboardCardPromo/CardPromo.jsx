import moment from "moment";
import { Link } from "react-router-dom";

export default function CardPromo({ promo }) {
  return (
    <div className="card card-promo m-3 rounded">
      <div className="card-img-top">
        <img
          src={promo.imageUrl}
          alt=""
          style={{ width: "100%", aspectRatio: "5/3", objectFit: "cover" }}
        />
      </div>
      <div className="button-icon-container">
        <Link to={`/dashboard/promo/edit-promo/${promo.id}`}>
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
        style={{ backgroundColor: "#FB6D48" }}
      >
        <p className="card-text fw-bold">{promo.title}</p>
        <p className="card-text small  m-0 p-0">
          <span className="fw-bold">
            <i className="bi bi-alarm me-1"></i>Created At :
          </span>
          {moment(promo.createdAt).format("DD MMMM YYYY  HH:mm:ss")}
        </p>
        <p className="card-text small m-0 p-0">
          <span className="fw-bold">
            <i className="bi bi-alarm me-1"></i>Last Update :
          </span>
          {moment(promo.updatedAt).format("DD MMMM YYYY HH:mm:ss")}
        </p>
      </div>
    </div>
  );
}
