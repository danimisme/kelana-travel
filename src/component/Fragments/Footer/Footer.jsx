function Footer() {
  return (
    <footer className="footer py-3 mt-5" style={{ backgroundColor: "#FFEC9E" }}>
      <div className="container">
        <div className="d-flex align-items-center mb-3">
          <img
            src="images/logo.png"
            alt=""
            className="img-fluid"
            style={{ height: "50px" }}
          />
          <h3 className=" m-0 ms-3 p-0">Kelana</h3>
        </div>
        <div className="border border-1 border-dark opacity-25 mb-3"></div>
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p className="text-muted">
              Kelana: Aplikasi perjalanan yang memudahkan Anda menemukan,
              merencanakan, dan menikmati petualangan tanpa batas.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <address className="text-muted">
              <p className="mb-0">123 Travel Street</p>
              <p className="mb-0">City, Country</p>
              <p className="mb-0">Email: info@example.com</p>
              <p className="mb-0">Phone: +1234567890</p>
            </address>
          </div>
          <div className="col-md-4">
            <h5>Social Media</h5>
            <ul className="list-unstyled">
              <li className="pb-1">
                <a href="#" className="text-decoration-none text-muted">
                  <i className="bi bi-facebook me-1"></i> Facebook
                </a>
              </li>
              <li className="pb-1">
                <a href="#" className="text-decoration-none text-muted">
                  <i className="bi bi-twitter me-2"></i>Twitter
                </a>
              </li>
              <li className="pb-1">
                <a href="#" className="text-decoration-none text-muted">
                  <i className="bi bi-instagram me-2"></i>Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; 2024 Kelana. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
