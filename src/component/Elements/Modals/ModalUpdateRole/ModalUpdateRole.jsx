import "./ModalUpdateRole.css";
export default function ModalUpdateRole() {
  return (
    <div className="modal_container">
      <div className="modal_update_role">
        <div className="modal_header">
          <h3>Update Role</h3>
        </div>
        <div className="modal_body">
          <p>Are you sure you want to update this role?</p>
        </div>
        <div className="modal_footer">
          <button className="default-button btn-orange ">Confirm</button>
          <button className="default-button" style={{ backgroundColor: "red" }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
