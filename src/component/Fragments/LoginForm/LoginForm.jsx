import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/slice/userLoggedSlice";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../Elements/input/Input";
import Label from "../../Elements/input/Label";
import CheckBox from "../../Elements/CheckBox";

export default function LoginForm({ onSubmit }) {
  const [showPassword, setShowPassword] = useState(false);
  const { userLog } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!e.target.email.value || !e.target.password.value) {
      setMessage("Email Or Password Is Cannot Be Empty");
      setTimeout(() => {
        setMessage(null);
        setIsLoading(false);
      }, 3000);
      return false;
    }

    e.preventDefault();
    const userData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const res = await onSubmit(userData);
      if (res.status === 200) {
        getUserLogged();
        setTimeout(() => {
          navigate("/dashboard/user");
          setMessage(null);
          setIsLoading(false);
        }, 1000);
      }
    } catch (error) {
      setMessage("Failed to login");
      setTimeout(() => {
        setMessage(null);
        setIsLoading(false);
      }, 2000);
      console.log(error);
    }
  };

  const getUserLogged = () => {
    if (localStorage.getItem("token")) {
      userLog("user", (res) => dispatch(setUser(res)));
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <p>Enter your credentials</p>
      {message && <div className="alert alert-danger">{message}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />
          <Label htmlFor="email"> Your Email </Label>
        </div>
        <CheckBox
          id={"showPassword"}
          onClick={() => setShowPassword(!showPassword)}
        >
          Show Password
        </CheckBox>
        <div className="form-floating mb-3">
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Your Password"
          />
          <Label htmlFor="password"> Your Password </Label>
        </div>
        <button className="default-button btn-orange" disabled={isLoading}>
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>
      <p className="mt-3  fs-5 text-center">
        Don&apos;t have an account?{" "}
        <Link to="/register" className="text-info fw-bold text-decoration-none">
          Register here
        </Link>
      </p>
    </div>
  );
}
