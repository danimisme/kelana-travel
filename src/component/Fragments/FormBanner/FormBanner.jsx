import Label from "../../../component/Elements/input/Label";
import Input from "../../../component/Elements/input/Input";
import { useEffect, useState } from "react";
import useUpload from "../../../hooks/useUpload";
import { Link } from "react-router-dom";
import "./FormBanner.css";

export default function FormBanner({ banner, onSubmit }) {
  const [isLoading, setIsLoading] = useState(false);
  const [bannerImageUrl, setBannerImageUrl] = useState("");
  const { upload } = useUpload();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    setBannerImageUrl(banner?.imageUrl);
  }, [banner]);

  const handleFileChange = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      setMessage(
        "File harus berupa gambar dengan format JPEG, PNG, GIF, BMP, atau TIFF."
      );
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await upload("upload-image", formData);
      setBannerImageUrl(res.data.url);
      setIsLoading(false);
      setMessage(null);
      return res.data.url;
    } catch (error) {
      console.log(error);
      setMessage(
        "Failed to upload image, Maybe the image is too big, try another image."
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bannerData = {
      name: e.target.name.value,
      imageUrl: bannerImageUrl,
    };

    onSubmit(bannerData);
  };

  return (
    <div className="col-lg-6 col-10 mx-auto">
      <div className="form_banner_container">
        <form onSubmit={handleSubmit}>
          <h1 className="mb-3 text-center">Edit Banner</h1>
          <div className="my-3">
            <img
              src={bannerImageUrl}
              alt={banner?.title}
              style={{
                width: "100%",
                aspectRatio: "6/3",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="name" className="form-label">
              Banner Name
            </Label>
            <Input
              type="text"
              className="form-control"
              id="name"
              defaultValue={banner?.name}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="image" className="form-label">
              Image File
            </Label>
            <Input type="file" onChange={handleFileChange} id="image" />
          </div>
          {message && <p className="text-danger">{message}</p>}
          <button className="btn btn-success" disabled={isLoading}>
            Edit
          </button>
          <Link to="/dashboard/banner">
            <button className="btn btn-secondary ms-2">Back</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
