import useGetData from "../../hooks/useGetData";
import { useEffect, useState } from "react";
import CardActivity from "../../component/Fragments/CardAcivity/CardActivity";
import SelectOption from "../../component/Elements/SelectOption/SelectOption";

export default function ActivityPage() {
  const { getData } = useGetData();
  const [activities, setActivities] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getData("activities").then((res) => setActivities(res.data.data));
    getData("categories").then((res) => setCategories(res.data.data));
  }, []);

  const handleReset = () => {
    const select = document.getElementById("select_categories");
    select.value = "Select";
    getData("activities").then((res) => setActivities(res.data.data));
  };

  const handleFilter = async () => {
    const select = document.getElementById("select_categories");
    const value = select.value;
    if (value === "Select") {
      handleReset();
      return;
    }
    getData(`activities-by-category/${value}`).then((res) =>
      setActivities(res.data.data)
    );
  };

  return (
    <>
      <div
        className={`jumbotron d-flex align-items-center justify-content-center text-white `}
      >
        <h1 className={`text_shadow text-center fs-1 fw-bold`}>
          Challenge, Adventure, Discovery. <br /> Explore the World with Us!
        </h1>
      </div>

      <div className={`header container-lg mt-2`}>
        <div className="d-flex justify-content-start align-items-baseline">
          <div>
            <i className="bi bi-airplane-fill fs-2 me-2 text-success"></i>
          </div>
          <div className="d-flex flex-column ">
            <h3 className="m-0 fw-bold">Explore All Activities</h3>
            <p className="m-0">
              &quot;Discover a Plethora of Activities to Explore&quot;
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-7 d-flex align-items-center justify-content-end ">
            <p className="m-0">Filter By Category</p>
          </div>
          <div className="col-5">
            <SelectOption selectItems={categories} id="select_categories" />
          </div>
        </div>
        <div className="d-flex gap-3">
          <button className="btn btn-success" onClick={handleFilter}>
            Filter
          </button>
          <button className="btn btn-secondary" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>

      <div className=" container-lg">
        <div className="row">
          {activities.length === 0 && (
            <div
              className="alert alert-info w-50 mx-auto text-center"
              role="alert"
            >
              No activities found
            </div>
          )}
          {activities.map((activity) => (
            <div className="col-md-6 col-lg-4 p-3" key={activity.id}>
              <CardActivity activity={activity} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
