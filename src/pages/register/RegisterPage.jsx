import RegisterForm from "../../component/Fragments/RegisterForm/RegisterForm";

export const metadata = {
  title: "Register",
  description: "Register to your account",
};

export default function RegisterPage() {
  return (
    <div className="row d-flex vh-100 align-items-center justify-content-center">
      <div className="col-lg-6 col-md-8 offset-lg-3 col-10">
        <RegisterForm />
      </div>
    </div>
  );
}
