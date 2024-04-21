function Footer() {
  return (
    <footer className="footer py-3 mt-5" style={{ backgroundColor: "#FFEC9E" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              Kelana: Aplikasi perjalanan yang memudahkan Anda menemukan,
              merencanakan, dan menikmati petualangan tanpa batas.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <address>
              <p className="mb-0">123 Travel Street</p>
              <p className="mb-0">City, Country</p>
              <p className="mb-0">Email: info@example.com</p>
              <p className="mb-0">Phone: +1234567890</p>
            </address>
          </div>
          <div className="col-md-4">
            <h5>Social Media</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; 2024 Travel App. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
