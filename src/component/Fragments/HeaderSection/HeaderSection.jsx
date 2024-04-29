export default function HeaderSection() {
  return (
    <div>
      <h2 className="orange-dark fw-bold  mb-5 text-center">
        Why Kelana Travel?
      </h2>
      <div className="row justify-content-center">
        <Card
          icon="images/undraw_travel.svg"
          title="Ultimate flexibility"
          description="You're in control, with free cancelation and payment options to safety any plan."
        />
        <Card
          icon="images/undraw_by_the_road.svg"
          title="Memoriable experience"
          description="Browse and book your next adventure with Kelana Travel anytime."
        />
        <Card
          icon="images/undraw_security_on.svg"
          title="Quality activities"
          description="High quality activities for your comfort and safety. Enjoy the adventure."
        />
        <Card
          icon="images/undraw_reviews.svg"
          title="Good testimonials"
          description="Thousands have been using Kelana Travel .Our customers are
      always happy with our services."
        />
      </div>
    </div>
  );
}

function Card({ icon, title, description }) {
  return (
    <div className="col-lg-3 col-6">
      <div>
        <img
          src={icon}
          alt="undraw"
          className="img-fluid w-50 mb-3"
          style={{ height: "100px" }}
        />
        <div>
          <h5 className="fw-bold">{title}</h5>
          <p className="text-muted d-none d-md-block">{description}</p>
        </div>
      </div>
    </div>
  );
}
