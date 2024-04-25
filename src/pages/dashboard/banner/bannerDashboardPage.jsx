import Layout from "../../../layouts/Layout";
import useGetData from "../../../hooks/useGetData";
import { useEffect, useState } from "react";
import CardBanner from "../../../component/Fragments/DashboardCardBanner/CardBanner";
import { Link } from "react-router-dom";
import useDelete from "../../../hooks/useDelete";
import Pagination from "../../../component/Elements/Pagination/Pagination";
import { useDispatch } from "react-redux";
import { openModalDelete } from "../../../redux/slice/ModalDeleteSlice";
import ModalDelete from "../../../component/Elements/Modals/ModalDelete/ModalDelete";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function BannerDashboardPage() {
  const { getData } = useGetData();
  const [banners, setBanners] = useState([]);
  const { deleteData } = useDelete();
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(banners.length / itemsPerPage);
  const dispatch = useDispatch();
  const [bannerId, setBannerId] = useState(null);

  const handleDelete = (id) => {
    setBannerId(id);
    dispatch(openModalDelete());
  };

  const deleteBanner = async (id) => {
    const res = await deleteData(`delete-banner/${id}`);
    if (res.status === 200) {
      getData("banners").then((res) => setBanners(res.data.data));
      toast.success("Banner has been deleted");
    }
  };

  useEffect(() => {
    getData("banners").then((res) => setBanners(res.data.data));
  }, []);
  return (
    <Layout>
      <div className="mt-5 container-lg">
        <div className="py-5 ">
          <div className="d-md-flex justify-content-between px-3">
            <h1 className="text-center text-orange">
              <i className="bi bi-image me-1"> </i>Banner Data
            </h1>
            <Link
              to="/dashboard/banner/create-banner"
              className="text-decoration-none d-flex justify-content-center align-items-center"
            >
              <div className=" button-create">
                <i className="bi bi-plus-circle-fill ms-2 fs-3"></i>
                <span className="fs-5 fw-bold px-1">Create Banner</span>
              </div>
            </Link>
          </div>
          <div className="row justify-content-center">
            {banners.slice(startIndex, endIndex).map((banner, index) => (
              <div className="col-10 col-md-6 col-lg-4 my-3" key={banner.id}>
                <CardBanner
                  banner={banner}
                  index={index}
                  handleDelete={handleDelete}
                />
              </div>
            ))}
          </div>
          <Pagination page={page} setPage={setPage} pages={totalPages} />
        </div>
      </div>
      <ModalDelete onConfirm={deleteBanner} id={bannerId} />
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
