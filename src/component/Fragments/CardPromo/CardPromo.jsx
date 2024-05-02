import { Link } from "react-router-dom";
import Animation from "../../../utils/aos";
import { useEffect } from "react";

export default function CardPromo({ promo, index }) {
  useEffect(() => {
    Animation();
  }, []);
  return (
    <div
      className="col-md-3 col-sm-6 p-3"
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-once="true"
    >
      <Link to={`/promo/${promo.id}`} className="text-decoration-none">
        <div className={`card_promo card d-flex flex-column h-100`}>
          <img
            src={promo?.imageUrl}
            className={`card-img-top`}
            style={{ width: "100%", aspectRatio: "5/3", objectFit: "cover" }}
            alt="..."
          />
          <div className="card-body " style={{ backgroundColor: "#FFBB70" }}>
            <h6 className="card-title">{promo.title}</h6>
            {promo.promo_discount_price && (
              <p className="card-text text-decoration-line-through">
                {promo?.promo_discount_price?.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
