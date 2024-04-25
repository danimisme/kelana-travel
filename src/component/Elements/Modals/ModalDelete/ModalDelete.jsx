import { useDispatch, useSelector } from "react-redux";
import { closeModalDelete } from "../../../../redux/slice/ModalDeleteSlice";

export default function ModalDelete() {
  const isOpen = useSelector((state) => state.modalDelete.isOpen);
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
        <div className="bg-light border-1 border-bottom mb-3">
          <h3 className="text-orange">Delete</h3>
        </div>
        <div className="modal_body text-center">
          <div className="my-3">
            <p className="fw-bold fs-5">
              Are you sure you want to delete this data?
            </p>
          </div>
        </div>
        <div className="modal_footer d-flex gap-3 mt-3 justify-content-end">
          <button className="default-button btn-orange ">Confirm</button>
          <button
            className="default-button"
            style={{ backgroundColor: "red" }}
            onClick={() => dispatch(closeModalDelete())}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
