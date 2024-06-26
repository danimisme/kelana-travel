import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toggleFormUser } from "../../../redux/slice/FormUserSlice";
import useUpload from "../../../hooks/useUpload";
import useUpdate from "../../../hooks/useUpdate";
import Input from "../../Elements/input/Input";
import Label from "../../Elements/input/Label";
import "./FormUser.css";

export default function EditUserForm({ user, onSubmit }) {
  const dispatch = useDispatch();
  const isFormUserOpen = useSelector((state) => state.formUser.isFormUserOpen);
  const [file, setFile] = useState(null);
  const [profilePictureUrl, setProfilePictureUrl] = useState(null);
  const { upload } = useUpload();
  const { update } = useUpdate();
  const [isLoading, setIsLoading] = useState(false);
  const [massageImage, setMassageImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    if (!file.type.startsWith("image/")) {
      setIsLoading(true);
      setMassageImage(
        "File harus berupa gambar dengan format JPEG, PNG, GIF, BMP, atau TIFF"
      );
    } else {
      setIsLoading(false);
      setMassageImage(null);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await upload("upload-image", formData);
      setProfilePictureUrl(res.data.url);
      setIsLoading(false);
      setMassageImage(null);
      return res.data.url;
    } catch (error) {
      console.log(error);
      setMassageImage("Failed to upload image, try another image");
      setIsLoading(true);
      setTimeout(() => {
        setMassageImage(null);
        setIsLoading(false);
        e.target.value = null;
      }, 3000);
    }
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    const userData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phoneNumber: e.target.phoneNumber.value,
      profilePictureUrl: profilePictureUrl || user?.profilePictureUrl,
    };
    await onSubmit(userData);
    handleCloseForm();
  };

  const handleCloseForm = () => {
    dispatch(toggleFormUser());
    setProfilePictureUrl(null);
    setFile(null);
    user = null;
  };

  return (
    <div
      className={` form_user_container ${
        isFormUserOpen ? "show_form" : "hide_form"
      }`}
    >
      <form className="form_user" onSubmit={handleUpdateUser}>
        <h2>Edit User</h2>
        <i
          className=" close_btn_form bi bi-x-circle fs-3"
          onClick={() => handleCloseForm()}
        ></i>
        <div className="mb-3 d-flex align-items-center gap-3">
          <img
            src={profilePictureUrl || user?.profilePictureUrl}
            alt="Profile Picture"
            className="image_user"
          />
          <div>
            <Input
              type="file"
              name="profilePictureUrl"
              id="profilePictureUrl"
              onChange={handleFileChange}
            />
            {massageImage && (
              <p className="text-danger small">{massageImage}</p>
            )}
            <button
              className="default-button mt-2"
              style={{ backgroundColor: "#FB6D48" }}
              onClick={handleUpload}
              disabled={isLoading}
            >
              Upload
            </button>
          </div>
        </div>
        <div className=" mb-3">
          <Label htmlFor="name">Name</Label>
          <Input type="text" name="name" id="name" defaultValue={user?.name} />
        </div>
        <div className=" mb-3">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            defaultValue={user?.email}
          />
        </div>
        <div className=" mb-3">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            defaultValue={user?.phoneNumber}
          />
        </div>
        <button
          className="default-button mx-2"
          style={{ backgroundColor: "green" }}
          type="submit"
          disabled={isLoading}
        >
          Submit
        </button>
        <button
          className="default-button mx-2"
          onClick={() => handleCloseForm()}
          type="button"
          style={{ backgroundColor: "salmon" }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
