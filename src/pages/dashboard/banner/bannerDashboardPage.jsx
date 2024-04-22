import Layout from "../../../layouts/Layout";
import useGetData from "../../../hooks/useGetData";
import { useEffect, useState } from "react";
export default function BannerDashboardPage() {
  const { getData } = useGetData();
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    getData("banners").then((res) => setBanners(res.data.data));
  }, []);
  console.log(banners);
  return (
    <Layout>
      <div className="mt-5 container-lg">
        <div className="py-5">
          <h1 className="text-center text-orange">Banner Data</h1>
        </div>
      </div>
    </Layout>
  );
}
