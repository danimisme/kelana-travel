export default function CardUser({ user }) {
  return (
    <div className="card my-3">
      <div className="w-100 d-flex justify-content-center py-3">
        <img
          src={user.profilePictureUrl}
          className="card-img-top w-50 rounded-circle "
          style={{ objectFit: "cover", aspectRatio: "1/1" }}
          alt="profile picture"
        />
      </div>
      <div className="card-body r d-flex flex-column gap-2">
        <p className="card-text fw-semibold fs-4 border-2 border-bottom m-0 ">
          {user.name}
        </p>
        <p className="card-text m-0">
          <i className="bi bi-envelope-fill me-1"></i>
          {user.email}
        </p>
        <p className="card-text m-0">
          <i className="bi bi-telephone-fill me-1"></i>
          {user.phoneNumber}
        </p>
        <p>
          <i className="bi bi-gear-fill me-1"></i>
          {user.role}
        </p>
      </div>
    </div>
  );
}
