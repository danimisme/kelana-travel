import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../../component/Fragments/LoginForm/LoginForm";
import "./LoginPage.css";
import useAuth from "../../hooks/useAuth";

export default function LoginPage() {
  const navigate = useNavigate();
  const { auth } = useAuth();

  const handleLogin = async (data) => {
    try {
      const res = await auth("login", data);
      if (res.status === 200) {
        navigate("/dashboard");
      }
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="login_page">
      <div className="row d-flex vh-100 align-items-center justify-content-center">
        <div className="col-lg-3 offset-md-1 col-md-4 col-10 my-5 login_form">
          <LoginForm onSubmit={handleLogin} />
        </div>
        <div className="col-lg-6 offset-md-1 col-md-5 col-10 my-5 text-white d-none d-md-block">
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
    </main>
  );
}
