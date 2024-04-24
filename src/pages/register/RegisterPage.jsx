import { useNavigate } from "react-router-dom";
import RegisterForm from "../../component/Fragments/RegisterForm/RegisterForm";
import useAuth from "../../hooks/useAuth";

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
    <div className="row d-flex vh-100 align-items-center justify-content-center">
      <div className="col-lg-6 col-md-8 offset-lg-3 col-10">
        <RegisterForm onSubmit={handleRegister} />
      </div>
    </div>
  );
}
