import { useState } from "react";
import { Link } from "react-router-dom";
import useUpload from "../../../hooks/useUpload";
import Input from "../../Elements/input/Input";
import Label from "../../Elements/input/Label";
import CheckBox from "../../Elements/CheckBox";
import "./RegisterForm.css";

export default function RegisterForm({ onSubmit }) {
  const [showPassword, setShowPassword] = useState(false);
  const [section, setSection] = useState(1);
  const [profilePictureUrl, setProfilePictureUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const { upload } = useUpload();

  const changeSection = () => {
    setSection(section === 1 ? 2 : 1);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      setMessage(
        "File harus berupa gambar dengan format JPEG, PNG, GIF, BMP, atau TIFF."
      );
      setTimeout(() => {
        setMessage(null);
        setIsLoading(false);
        e.target.value = null;
      }, 3000);
      return false;
    }
    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await upload("upload-image", formData);
      setProfilePictureUrl(res.data.url);
      setIsLoading(false);
      setMessage(null);
      return res.data.url;
    } catch (error) {
      setProfilePictureUrl(null);
      setMessage(
        "Failed to upload image, Maybe the image is too big, try another image."
      );
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email: e.target.email.value,
      name: e.target.name.value,
      password: e.target.password.value,
      passwordRepeat: e.target.passwordRepeat.value,
      role: e.target.role.value,
      profilePictureUrl: profilePictureUrl,
      phoneNumber: e.target.phoneNumber.value,
    };

    for (const key in userData) {
      if (!userData[key]) {
        setMessage("Please input all fields");
        setTimeout(() => {
          setMessage(null);
        }, 3000);
        return;
      }
    }

    if (userData.password.length < 6) {
      setMessage("Password must be at least 6 characters");
      setTimeout(() => {
        setMessage(null);
      }, 3000);
      return;
    }

    if (userData.password !== userData.passwordRepeat) {
      setMessage("Password and Repeat Password does not match");
      setTimeout(() => {
        setMessage(null);
      }, 3000);
      return;
    }

    if (!profilePictureUrl) {
      setMessage("Please upload your profile picture");
      setTimeout(() => {
        setMessage(null);
      }, 3000);
      return;
    }

    onSubmit(userData);
  };

  return (
    <div className="container-lg register_form">
      <h1>Register</h1>
      <p>Please input your data </p>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div
            className={`col-md-6 col-xl-12  ${
              section === 1 ? "register_1" : "register_1_hide"
            }`}
          >
            <div className="form-floating mb-3">
              <Input type="email" name="email" id="email" placeholder="Email" />
              <Label htmlFor="email">Email </Label>
            </div>
            <div className="form-floating mb-3">
              <Input name="name" id="name" placeholder="Full Name" />
              <Label htmlFor="email"> Full Name </Label>
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
                placeholder="Password"
              />
              <Label htmlFor="password">Password</Label>
            </div>
            <div className="form-floating mb-3">
              <Input
                type={showPassword ? "text" : "password"}
                name="passwordRepeat"
                id="passwordRepeat"
                placeholder="Repeat Password"
              />
              <Label htmlFor="passwordRepeat">Repeat Password</Label>
            </div>
          </div>
          <div
            className={`col-md-6 col-xl-12 ${
              section === 2 ? "register_2" : "register_2_hide"
            }`}
          >
            <div className="form-floating mb-3">
              <Input
                type="number"
                name="phoneNumber"
                id="phone"
                placeholder="Phone Number"
              />
              <Label htmlFor="phoneNumber">Phone Number</Label>
            </div>
            <div className=" mb-3">
              <Label htmlFor="role">Select Role</Label>
              <select className="form-select" id="select-role" name="role">
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>

            {profilePictureUrl && (
              <div>
                <img
                  src={profilePictureUrl}
                  alt="profilePictureUrl"
                  width={100}
                />
              </div>
            )}
            <div className="form-floating mb-3">
              <Input
                type="file"
                name="profilePictureUrl"
                id="profilePictureUrl"
                placeholder="profilePictureUrl"
                onChange={handleUpload}
              />
              <Label htmlFor="profilePictureUrl">Profil Picture URL</Label>
            </div>
          </div>
          {message && (
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          )}
        </div>
        <button
          type="button"
          className={`btn-next-form default-button me-3 ${
            section === 1 ? " btn-blue" : "btn-red"
          }`}
          onClick={() => changeSection()}
        >
          {section === 1 ? "Next" : "Back"}
        </button>
        <button
          type="submit"
          className={` default-button btn-orange ${
            section === 2 ? "btn_register" : "btn_register_hide"
          }`}
          disabled={isLoading}
        >
          Register
        </button>
      </form>
      <p className=" mt-3 fs-5">
        Already have an account?{" "}
        <Link to="/login" className="text-decoration-none text-info fw-bold ">
          Login here
        </Link>
      </p>
    </div>
  );
}
