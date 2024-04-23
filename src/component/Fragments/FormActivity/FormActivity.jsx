import Input from "../../Elements/input/Input";
import Label from "../../Elements/input/Label";
import SelectOption from "../../Elements/SelectOption";
import { useEffect, useState } from "react";
import useUpload from "../../../hooks/useUpload";
import { Link } from "react-router-dom";
import "./FormActivity.css";
import useGetData from "../../../hooks/useGetData";

export default function FormActivity({ activity, onSubmit }) {
  const { getData } = useGetData();
  const [categories, setCategories] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [massageImage, setMassageImage] = useState(null);

  useEffect(() => {
    getData("categories").then((res) => {
      setCategories(res.data.data);
    });
  }, []);

  useEffect(() => {
    if (activity) {
      setImageUrls(activity.imageUrls);
    }
  }, [activity]);
  return (
    <form onSubmit={handleSubmit}>
      <div className="row py-5">
        <h1>{activity ? "Edit Activity" : "Create Activity"}</h1>
        <div className="col-lg-6 col-10 mx-auto">
          <div className="mb-3">
            <Label htmlFor="title">Title</Label>
            <Input id="title" defaultValue={activity?.title} />
          </div>
          <div className="mb-3">
            <Label htmlFor="category">Category</Label>
            <SelectOption
              selectItems={categories}
              id="select-categories"
              defaultValue={activity?.categoryId}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="description">Description</Label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              defaultValue={activity?.description}
            ></textarea>
          </div>
          <div className="mb-3">
            <Label htmlFor="price">Price</Label>
            <Input type="number" id="price" defaultValue={activity?.price} />
          </div>
          <div className="mb-3">
            <Label htmlFor="price_discount">Price Discount</Label>
            <Input
              type="number"
              id="price_discount"
              defaultValue={activity?.price_discount}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="rating">Rating</Label>
            <Input type="number" id="rating" defaultValue={activity?.rating} />
          </div>
          <div className="mb-3">
            <Label htmlFor="total_reviews ">Total Review</Label>
            <Input
              type="number"
              id="total_reviews"
              defaultValue={activity?.total_reviews}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="Facilities">Facilities</Label>
            <Input id="facilities" defaultValue={activity?.facilities} />
          </div>
        </div>
        <div className="col-lg-6 col-10 mx-auto">
          <div className="row mb-3">
            {imageUrls?.map((imageUrl, index) => (
              <div className={`col-5 image_container`} key={index}>
                <img
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  className="image"
                />
                <div
                  className="icon_remove"
                  onClick={() => handleRemoveImage(index)}
                >
                  <p className="p-0 m-0">Remove</p>
                  <i className={`bi bi-x-square-fill text-danger`}></i>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-3">
            <Label htmlFor="imageUrls">Image Files</Label>
            <Input id="imageUrls" type="file" onChange={handleFileChange} />
          </div>
          <div className="mb-3">
            {massageImage && <p className="text-danger">{massageImage}</p>}
            <button
              className="btn btn-outline-success me-2"
              onClick={handleUpload}
              type="button"
            >
              Add Image
            </button>
          </div>
          <div className="mb-3">
            <Label htmlFor="address">Address</Label>
            <textarea
              id="address"
              rows="3"
              defaultValue={activity?.address}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="city">City</Label>
            <Input id="city" defaultValue={activity?.city} />
          </div>
          <div className="mb-3">
            <Label htmlFor="province">Province</Label>
            <Input id="province" defaultValue={activity?.province} />
          </div>
          <div className="mb-3">
            <Label htmlFor="location_maps">Location Maps</Label>
            <textarea
              id="location_maps"
              rows="3"
              className="form-control"
              defaultValue={activity?.location_maps}
            />
          </div>
          <div className="mb-3">
            <button className="btn btn-success me-2">
              {activity ? "Update Activity" : "Create Activity"}
            </button>
            <Link href={`/dashboard/activity`}>
              <button className="btn btn-secondary">Cancel</button>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
