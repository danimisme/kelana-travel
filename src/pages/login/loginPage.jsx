import LoginForm from "../../component/Fragments/LoginForm/LoginForm";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <main className="login_page">
      <div className="row d-flex vh-100 align-items-center justify-content-center">
        <div className="col-lg-3 col-md-6 col-10 my-5 login_form">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
