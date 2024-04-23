import "./CardUser.css";
export default function CardUser({ user, index, handleUpdateRole }) {
  const bg = index % 3 === 0 ? "bg1" : index % 3 === 1 ? "bg2" : "bg3";
  const bgBody =
    index % 3 === 0 ? "bg-body1" : index % 3 === 1 ? "bg-body2" : "bg-body3";
  return (
    <div
      className={`card my-3 ${bg} ${
        user.role === "admin" ? "bg_admin" : "bg_user"
      }`}
    >
      <div className="w-100 d-flex justify-content-center py-3">
        <img
          src={user.profilePictureUrl}
          className="card-img-top w-50 rounded-circle "
          style={{ objectFit: "cover", aspectRatio: "1/1" }}
          alt="profile picture"
        />
      </div>
      <div
        className={`card-body r d-flex flex-column gap-2 ${bgBody} bg-light `}
        style={{ borderRadius: "10px 10px 0 0" }}
      >
        <p className="card-text fw-semibold fs-4  m-0 ">{user.name}</p>
        <hr className={` ${bgBody} p-0 m-0`} />
        <p className="card-text m-0 p-0 small">
          <i className="bi bi-envelope-fill me-1"></i>
          {user.email}
        </p>
        <p className="card-text m-0 p-0 small">
          <i className="bi bi-telephone-fill me-1"></i>
          {user.phoneNumber}
        </p>
        <p
          className={`card-text m-0 p-0 fs-5 text-center ${
            user.role === "admin"
              ? "bg-success text-white p-1 rounded-3"
              : "bg_user text-dark p-1 rounded-3"
          }`}
        >
          {user.role === "admin" && (
            <i className="bi bi-person-fill-lock me-2"></i>
          )}
          {user.role === "user" && <i className="bi bi-person-dash me-2"></i>}
          {user.role}
        </p>
      </div>
      <div className="button-icon-container">
        <div
          className="button-icon btn-edit "
          onClick={() => handleUpdateRole(user)}
        >
          <i className="bi bi-pencil-square "></i>
        </div>
      </div>
    </div>
  );
}
