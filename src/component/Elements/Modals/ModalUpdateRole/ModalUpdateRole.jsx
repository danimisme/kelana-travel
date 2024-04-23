import { closeModalUpdateRole } from "../../../../redux/slice/ModalUpdateRoleSlice";
import { useDispatch, useSelector } from "react-redux";
export default function ModalUpdateRole() {
  const isOpen = useSelector((state) => state.modalUpdateRole.isOpen);
  const dispatch = useDispatch();
  console.log(isOpen);
  return (
    <div className={`modal_container ${isOpen ? "show_modal" : " hide_modal"}`}>
      <div
        className={`modal_dialog ${isOpen ? "show_dialog" : "hide_dialog"} `}
      >
        <div className="modal_header">
          <h3>Update Role</h3>
        </div>
        <div className="modal_body">
          <p>Are you sure you want to update this role?</p>
        </div>
        <div className="modal_footer">
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
