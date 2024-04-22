import Label from "../../../component/Elements/input/Label";
import Input from "../../../component/Elements/input/Input";
import { useEffect, useState } from "react";
import useUpload from "../../../hooks/useUpload";
import { Link } from "react-router-dom";

export default function FormCategory({ category, onSubmit }) {
  const [isLoading, setIsLoading] = useState(false);
  const [categoryImageUrl, setCategoryImageUrl] = useState("");
  const { upload } = useUpload();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    setCategoryImageUrl(category?.imageUrl);
  }, [category]);

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
      setCategoryImageUrl(res.data.url);
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
    const categoryData = {
      name: e.target.name.value,
      imageUrl: categoryImageUrl,
    };

    onSubmit(categoryData);
  };

  return (
    <div className="col-lg-6 col-10 mx-auto">
      <div className="form_category_container">
        <form onSubmit={handleSubmit}>
          <h3 className="mb-3 text-center fw-bold">
            {category ? "Edit category" : "Create category"}
          </h3>
          {categoryImageUrl && (
            <div className="mb-3">
              <img
                src={categoryImageUrl}
                alt="category"
                style={{
                  width: "100%",
                  aspectRatio: "5/3",
                  objectFit: "cover",
                }}
              />
            </div>
          )}
          <div className="mb-3">
            <Label htmlFor="name" className="form-label">
              category Name
            </Label>
            <Input
              type="text"
              className="form-control"
              id="name"
              defaultValue={category?.name}
              placeholder="Input category Name"
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="image" className="form-label">
              Image File
            </Label>
            <Input type="file" onChange={handleFileChange} id="image" />
          </div>
          {message && <p className="text-danger">{message}</p>}
          <button className="default-button btn-orange" disabled={isLoading}>
            {category ? "Edit Category" : "Create Category"}
          </button>
          <Link to="/dashboard/category">
            <button className="default-button btn-gray ms-2">Back</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
