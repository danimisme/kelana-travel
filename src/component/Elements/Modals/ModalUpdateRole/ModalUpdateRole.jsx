import { closeModalUpdateRole } from "../../../../redux/slice/ModalUpdateRoleSlice";
import { useDispatch, useSelector } from "react-redux";
export default function ModalUpdateRole({ user }) {
  const isOpen = useSelector((state) => state.modalUpdateRole.isOpen);
  const dispatch = useDispatch();
  return (
    <div
      className={`modal_container ${isOpen ? "show_modal" : " hide_modal"} row`}
    >
      <div
        className={`modal_dialog ${
          isOpen ? "show_dialog" : "hide_dialog"
        } col-lg-5 col-md-6 col-10 mx-auto`}
      >
        <div className="modal_header">
          <h3 className="text-center text-orange">Update Role</h3>
        </div>
        <div className="modal_body">
          <div className="d-flex  align-items-center">
            <div>
              <img
                src={user.profilePictureUrl}
                className="rounded-circle"
                style={{
                  aspectRatio: "1/1",
                  objectFit: "cover",
                  width: "100px",
                  height: "100px",
                }}
                alt={user.name}
              />
            </div>
            <div className="ms-3 w-100">
              <h4>{user.name}</h4>
              <select className="form-select">
                <option value="user" selected={user.role === "user"}>
                  User
                </option>
                <option value="admin" selected={user.role === "admin"}>
                  Admin
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="modal_footer d-flex gap-3 mt-3 justify-content-center">
          <button className="default-button btn-orange ">Confirm</button>
          <button
            className="default-button"
            style={{ backgroundColor: "red" }}
            onClick={() => dispatch(closeModalUpdateRole())}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
