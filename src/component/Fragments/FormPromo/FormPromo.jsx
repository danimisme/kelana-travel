import { Link } from "react-router-dom";
import Input from "../../Elements/input/Input";
import Label from "../../Elements/input/Label";
import useUpload from "../../../hooks/useUpload";
import { useEffect, useState } from "react";
import "./FormPromo.css";

export default function FormPromo({ promo, onSubmit }) {
  const [file, setFile] = useState("");
  const [imagePromoUrl, setImagePromoUrl] = useState(null);
  const [messageImage, setMessageImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const { upload } = useUpload();
  useEffect(() => {
    setImagePromoUrl(promo?.imageUrl);
  }, [promo]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    if (!file.type.startsWith("image/")) {
      setMessageImage(
        "File harus berupa gambar dengan format JPEG, PNG, GIF, BMP, atau TIFF."
      );
      setIsLoading(true);
      setTimeout(() => {
        setMessageImage(null);
        setIsLoading(false);
        e.target.value = null;
      }, 3000);
    } else {
      setMessageImage(null);
      setIsLoading(false);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await upload("upload-image", formData);
      setImagePromoUrl(res.data.url);
      console.log(res);
      setIsLoading(false);
      setMessageImage(null);
      return res.data.url;
    } catch (error) {
      console.log(error);
      setMessageImage("Failed to upload image, try another image.");
      setIsLoading(true);
      setTimeout(() => {
        setMessageImage(null);
        setIsLoading(false);
        e.target.value = null;
      }, 3000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const promoData = {
      title: e.target.title.value,
      description: e.target.description.value,
      imageUrl: imagePromoUrl,
      terms_condition: e.target.terms_condition.value,
      promo_code: e.target.promo_code.value,
      promo_discount_price: Number(e.target.promo_discount_price.value),
      minimum_claim_price: Number(e.target.minimum_claim_price.value),
    };

    for (const key in promoData) {
      if (!promoData[key]) {
        setMessage("Failed to create promo, all fields are required");
        setTimeout(() => {
          setMessage(null);
        }, 3000);
        return;
      }
    }

    onSubmit(promoData);
  };

  return (
    <div className="mt-5 py-5  container-lg">
      <div className="form_promo_container ">
        <form onSubmit={handleSubmit}>
          <div className="row py-5 px-md-5 px-0">
            <h1 className="text-center mb-3 text-orange">
              {promo?.id ? "Edit Promo" : "Create Promo"}
            </h1>
            <div className="col-lg-6 col-10 mx-auto">
              <div className="mb-3">
                <Label htmlFor="title" className="form-label">
                  Title
                </Label>
                <Input
                  className="form-control"
                  id="title"
                  defaultValue={promo?.title}
                  placeholder="Example: Promo Hiking Family"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="description" className="form-label">
                  Description
                </Label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  defaultValue={promo?.description}
                  placeholder="Describe the promo trip"
                ></textarea>
              </div>
              <div className="mb-3">
                <Label htmlFor="promo_code" className="form-label">
                  Promo Code
                </Label>
                <Input
                  className="form-control"
                  id="promo_code"
                  defaultValue={promo?.promo_code}
                  placeholder="Example: HIKINGFAMILY"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="minimum_claim_price" className="form-label">
                  Minimum Claim Price
                </Label>
                <Input
                  type="number"
                  className="form-control"
                  id="minimum_claim_price"
                  defaultValue={promo?.minimum_claim_price}
                  placeholder="Example: 50000"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="terms_condition" className="form-label">
                  Terms & Conditions
                </Label>
                <Input
                  id="terms_condition"
                  defaultValue={promo?.terms_condition}
                  placeholder="Please give the terms and conditions"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="promo_discount_price" className="form-label">
                  Promo Discount Price
                </Label>
                <Input
                  type="number"
                  className="form-control"
                  id="promo_discount_price"
                  defaultValue={promo?.promo_discount_price}
                  placeholder="Example: 50000"
                />
              </div>
            </div>
            <div className="col-lg-6 col-10 mx-auto">
              {imagePromoUrl && (
                <img
                  src={imagePromoUrl}
                  alt={promo?.title}
                  className="img-fluid mt-3 rounded"
                />
              )}
              <div className="my-3">
                <Label className="form-label" htmlFor="imageUrl">
                  Image File
                </Label>
                <Input
                  type="file"
                  className="form-control"
                  id="imageUrl"
                  onChange={handleFileChange}
                />
                {messageImage && (
                  <div className="alert alert-danger d-flex justify-content-center align-items-center mt-3">
                    <div
                      className="spinner-border text-danger me-2"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    {messageImage}
                  </div>
                )}
                <button
                  className="default-button mt-2"
                  type="button"
                  onClick={handleUpload}
                  disabled={isLoading}
                  style={{ backgroundColor: "green" }}
                >
                  Upload Image
                </button>
              </div>
            </div>
            {message && (
              <>
                <div className="alert alert-danger d-flex justify-content-center align-items-center">
                  <div
                    className="spinner-border text-danger me-2"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  {message}
                </div>
              </>
            )}
            <div className="d-flex justify-content-center mt-3">
              <button
                type="submit"
                className="default-button btn-orange"
                disabled={isLoading}
              >
                {promo?.id ? "Update Promo" : "Create Promo"}
              </button>
              <Link to="/dashboard/promo">
                <button
                  className="default-button mx-2"
                  type="button"
                  style={{ backgroundColor: "red" }}
                >
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
