import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useGetData from "../../../hooks/useGetData";
import useUpload from "../../../hooks/useUpload";
import useUpdate from "../../../hooks/useUpdate";
import Layout from "../../../layouts/Layout";
import Label from "../../../component/Elements/input/Label";
import Input from "../../../component/Elements/input/Input";

export default function EditBannerPage() {
  const { getData } = useGetData();
  const [banner, setBanner] = useState({});
  const [bannerImageUrl, setBannerImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { upload } = useUpload();
  const { update } = useUpdate();
  const [message, setMessage] = useState(null);
  const params = useParams();
  useEffect(() => {
    getData(`banner/${params.id}`).then((res) => setBanner(res?.data?.data));
  }, []);

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
      return res.data.url;
    } catch (error) {
      console.log(error);
      setMessage(
        "Failed to upload image, Maybe the image is too big, try another image."
      );
    }
  };

  const handleUpdateBanner = async (e) => {
    e.preventDefault();
    const bannerData = {
      name: e.target.name.value,
      imageUrl: bannerImageUrl || banner?.imageUrl,
    };
    try {
      await update(`update-banner/${params.id}`, bannerData);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="mt-5 container-lg">
        <div className="row py-3 align-items-center">
          <h1 className="mb-3 text-center">Edit Banner</h1>
          <div className="col-lg-6 col-10">
            <img src={bannerImageUrl || banner?.imageUrl} alt={banner?.title} />
          </div>
          <div className="col-lg-6 col-10">
            <form onSubmit={handleUpdateBanner}>
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
      </div>
    </Layout>
  );
}
