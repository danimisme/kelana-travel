import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../../component/Fragments/LoginForm/LoginForm";
import "./LoginPage.css";
import useAuth from "../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Animation from "../../utils/aos";

export default function LoginPage() {
  const navigate = useNavigate();
  const { auth } = useAuth();

  useEffect(() => {
    Animation();
  }, []);

  const handleLogin = async (data) => {
    try {
      const res = await auth("login", data);
      if (res.status === 200) {
        setTimeout(() => {
          navigate("/dashboard/user");
        }, 1500);
        toast.success("Login Success");
      }
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="login_page">
      <div className="row d-flex vh-100 align-items-center justify-content-center">
        <div
          className="col-lg-3 offset-md-1 col-md-4 col-10 my-5 login_form"
          data-aos="fade-down"
        >
          <LoginForm onSubmit={handleLogin} />
        </div>
        <div
          className="col-lg-6 offset-md-1 col-md-5 col-10 my-5 text-white d-none d-md-block"
          data-aos="fade-up"
        >
          <h1 className="text_shadow fs-1 fw-bold">
            Unlock your travels! Enter your credentials to access Kelana Web
            App.
          </h1>
          <div className="d-flex align-items-center gap-3">
            <h2 className="fw-bold">Or</h2>
            <Link to="/" className="text-decoration-none ">
              <button className="default-button btn-orange ">
                Continue as Guest
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        theme="light"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </main>
  );
}
