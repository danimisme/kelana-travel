import moment from "moment/moment";

export default function CardBanner({ banner, index }) {
  console.log(banner);
  return (
    <div className="card card-banner m-3">
      <div>
        <img
          src={banner.imageUrl}
          alt=""
          style={{ width: "100%", aspectRatio: "5/3", objectFit: "cover" }}
        />
      </div>
      <div className="btn-edit">
        <i className="bi bi-pencil-square "></i>
      </div>
      <div className="btn-delete">
        <i className="bi bi-trash-fill"></i>
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
