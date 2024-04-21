import { Link } from "react-router-dom";

export default function CardPromo({ promo }) {
  return (
    <div className="col-md-3 col-sm-6 p-3">
      <div className={`card_promo card`}>
        <img
          src={promo.imageUrl}
          className={`card-img-top`}
          style={{ width: "100%", aspectRatio: "5/3", objectFit: "cover" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{promo.title}</h5>
          <p className="card-text">{promo.description}</p>
          <Link href={`/promo/${promo.id}`}>
            <button className="btn btn-outline-success">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
