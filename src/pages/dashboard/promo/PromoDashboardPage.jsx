import { Link } from "react-router-dom";
import Layout from "../../../layouts/Layout";
import useGetData from "../../../hooks/useGetData";
import { useEffect, useState } from "react";
import CardPromo from "../../../component/Fragments/DashboardCardPromo/CardPromo";
import useDelete from "../../../hooks/useDelete";
import Pagination from "../../../component/Elements/Pagination/Pagination";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalDelete from "../../../component/Elements/Modals/ModalDelete/ModalDelete";
import { openModalDelete } from "../../../redux/slice/ModalDeleteSlice";
import { useDispatch } from "react-redux";

export default function PromoDashboardPage() {
  const { getData } = useGetData();
  const [promos, setPromos] = useState([]);
  const { deleteData } = useDelete();
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(promos.length / itemsPerPage);
  const dispatch = useDispatch();
  const [promoId, setPromoId] = useState(null);

  const handleDelete = async (id) => {
    setPromoId(id);
    dispatch(openModalDelete());
  };

  const deletePromo = async (id) => {
    const res = await deleteData(`delete-promo/${id}`);
    if (res.status === 200) {
      getData("promos").then((res) => setPromos(res.data.data));
      toast.success(res.data.message);
    } else {
      toast.error(res.response.data.message);
    }
  };

  useEffect(() => {
    getData("promos").then((res) => setPromos(res.data.data));
  }, []);

  return (
    <Layout>
      <div className="mt-5 container-lg">
        <div className=" py-5">
          <div className="d-md-flex justify-content-between px-3 ">
            <h1 className="text-center text-orange">
              <i className="bi bi-percent me-3"></i>Promo Data
            </h1>
            <Link
              to="/dashboard/promo/create-promo"
              className="text-decoration-none  d-flex justify-content-center align-items-center"
            >
              <div className=" button-create">
                <i className="bi bi-plus-circle-fill ms-2 fs-3"></i>
                <span className="fs-5 fw-bold px-1">Create Promo</span>
              </div>
            </Link>
          </div>
          <div className="row justify-content-center">
            {promos.slice(startIndex, endIndex).map((promo, index) => (
              <div className="col-lg-4 col-md-6 col-10 mt-3" key={promo.id}>
                <CardPromo
                  key={promo.id}
                  promo={promo}
                  index={index}
                  handleDelete={handleDelete}
                />
              </div>
            ))}
          </div>
          <Pagination pages={totalPages} page={page} setPage={setPage} />
        </div>
      </div>
      <ModalDelete id={promoId} onConfirm={deletePromo} />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Layout>
  );
}
