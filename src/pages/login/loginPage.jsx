import { Link } from "react-router-dom";
import LoginForm from "../../component/Fragments/LoginForm/LoginForm";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <main className="login_page">
      <div className="row d-flex vh-100 align-items-center justify-content-center">
        <div className="col-lg-3 offset-md-1 col-md-4 col-10 my-5 login_form">
          <LoginForm />
        </div>
        <div className="col-lg-6 offset-md-1 col-md-5 col-10 my-5 text-white d-none d-md-block">
          <h1 className="text_shadow fs-1 fw-bold">
            Unlock your travels! Enter your credentials to access Kelana Apps.
          </h1>
          <div className="d-flex align-items-center gap-3">
            <h2 className="fw-bold">Or</h2>
            <Link className="text-decoration-none ">
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
