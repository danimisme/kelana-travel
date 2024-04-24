import { useNavigate } from "react-router-dom";
import RegisterForm from "../../component/Fragments/RegisterForm/RegisterForm";
import useAuth from "../../hooks/useAuth";

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const handleRegister = async (data) => {
    try {
      await register(data);
      navigate("/login");
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
