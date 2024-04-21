import "./CardUser.css";
export default function CardUser({ user, index }) {
  const bg = index % 3 === 0 ? "bg1" : index % 3 === 1 ? "bg2" : "bg3";
  const bgBody =
    index % 3 === 0 ? "bg-body1" : index % 3 === 1 ? "bg-body2" : "bg-body3";
  return (
    <div className={`card my-3 ${bg}`}>
      <div className="w-100 d-flex justify-content-center py-3">
        <img
          src={user.profilePictureUrl}
          className="card-img-top w-50 rounded-circle "
          style={{ objectFit: "cover", aspectRatio: "1/1" }}
          alt="profile picture"
        />
      </div>
      <div
        className={`card-body r d-flex flex-column gap-2 ${bgBody}`}
        style={{ borderRadius: "10px 10px 0 0" }}
      >
        <p className="card-text fw-semibold fs-4 border-2 border-bottom m-0 ">
          {user.name}
        </p>
        <p className="card-text m-0 p-0 small">
          <i className="bi bi-envelope-fill me-1"></i>
          {user.email}
        </p>
        <p className="card-text m-0 p-0 small">
          <i className="bi bi-telephone-fill me-1"></i>
          {user.phoneNumber}
        </p>
        <p className="card-text m-0 p-0 small">
          <i className="bi bi-gear-fill me-1"></i>
          {user.role}
        </p>
      </div>
    </div>
  );
}
