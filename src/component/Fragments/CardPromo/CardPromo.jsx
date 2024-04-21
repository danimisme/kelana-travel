import { Link } from "react-router-dom";

export default function CardPromo({ promo }) {
  return (
    <div className="col-md-3 col-sm-6 p-3">
      <Link to={`/promo/${promo.id}`} className="text-decoration-none">
        <div className={`card_promo card d-flex flex-column h-100`}>
          <img
            src={promo.imageUrl}
            className={`card-img-top`}
            style={{ width: "100%", aspectRatio: "5/3", objectFit: "cover" }}
            alt="..."
          />
          <div className="card-body " style={{ backgroundColor: "#FFBB70" }}>
            <h6 className="card-title">{promo.title}</h6>
            <p className="card-text text-decoration-line-through">
              {promo?.promo_discount_price?.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
