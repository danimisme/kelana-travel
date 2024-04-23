import moment from "moment";
import { Link } from "react-router-dom";

export default function CardActivity({ activity, handleDelete }) {
  return (
    <div className="card card-activity m-3 rounded">
      <div className="card-img-top">
        <img
          src={activity.imageUrls[0]}
          alt=""
          style={{ width: "100%", aspectRatio: "5/3", objectFit: "cover" }}
        />
      </div>
      <div className="button-icon-container">
        <Link to={`/dashboard/activity/edit-activity/${activity.id}`}>
          <div className="button-icon btn-edit">
            <i className="bi bi-pencil-square "></i>
          </div>
        </Link>
        <div
          className="button-icon btn-delete"
          onClick={() => handleDelete(activity.id)}
        >
          <i className="bi bi-trash-fill"></i>
        </div>
      </div>
      <div
        className="card-body text-white p-3"
        style={{ backgroundColor: "#FF6868" }}
      >
        <p className="card-text fw-bold">{activity.title}</p>
        <p className="card-text small  m-0 p-0">
          <span className="fw-bold">
            <i className="bi bi-alarm me-1"></i>Created At :
          </span>
          {moment(activity.createdAt).format("DD MMMM YYYY  HH:mm:ss")}
        </p>
        <p className="card-text small m-0 p-0">
          <span className="fw-bold">
            <i className="bi bi-alarm me-1"></i>Last Update :
          </span>
          {moment(activity.updatedAt).format("DD MMMM YYYY HH:mm:ss")}
        </p>
      </div>
    </div>
  );
}
