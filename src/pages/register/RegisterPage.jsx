import { Link, useNavigate } from "react-router-dom";
import RegisterForm from "../../component/Fragments/RegisterForm/RegisterForm";
import useAuth from "../../hooks/useAuth";
import "./RegisterPage.css";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const handleRegister = async (data) => {
    try {
      const res = await auth("register", data);
      if (res.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="register_page">
      <div className="row d-flex vh-100 align-items-center ">
        <div className="col-xl-4 col-md-8 offset-1 col-10">
          <RegisterForm onSubmit={handleRegister} />
        </div>
        <div className="col-xl-5 offset-xl-1 d-none d-xl-block">
          <h1 className="text-white fs-1 fw-bold text_shadow">
            Join our platform today to connect with travelers and expand your
            reach
          </h1>
          <div className="d-flex align-items-center gap-3">
            <h2 className="fw-bold text-white text_shadow">Or</h2>
            <Link to="/" className="text-decoration-none ">
              <button className="default-button btn-orange ">
                Continue as Guest
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
