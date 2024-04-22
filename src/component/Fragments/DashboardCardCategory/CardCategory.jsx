import moment from "moment/moment";
import { Link } from "react-router-dom";

export default function CardCategory({ category, handleDelete }) {
  return (
    <div className="card card-category m-3 rounded">
      <div className="card-img-top">
        <img
          src={category.imageUrl}
          alt=""
          style={{ width: "100%", aspectRatio: "5/3", objectFit: "cover" }}
        />
      </div>
      <div className="button-icon-container">
        <Link to={`/dashboard/category/edit-category/${category.id}`}>
          <div className="button-icon btn-edit">
            <i className="bi bi-pencil-square "></i>
          </div>
        </Link>
        <div
          className="button-icon btn-delete"
          onClick={() => handleDelete(category.id)}
        >
          <i className="bi bi-trash-fill"></i>
        </div>
      </div>
      <div
        className="card-body text-white p-3"
        style={{ backgroundColor: "#FF6000" }}
      >
        <p className="card-text fw-bold">{category.name}</p>
        <p className="card-text small  m-0 p-0">
          <span className="fw-bold">
            <i className="bi bi-alarm me-1"></i>Created At :
          </span>
          {moment(category.createdAt).format("DD MMMM YYYY  HH:mm:ss")}
        </p>
        <p className="card-text small m-0 p-0">
          <span className="fw-bold">
            <i className="bi bi-alarm me-1"></i>Last Update :
          </span>
          {moment(category.updatedAt).format("DD MMMM YYYY HH:mm:ss")}
        </p>
      </div>
    </div>
  );
}
