import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-between">
        <div className="container text-center text-md-start mt-5">
          <div>
            <a href="/" className="mr-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="mr-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="mr-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="/" className="mr-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" className="mr-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="/" className="mr-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem mr-3"></i>Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Products
              </h6>
              <p>
                <a href="/" className="text-reset">Angular</a>
              </p>
              <p>
                <a href="/" className="text-reset">React</a>
              </p>
              <p>
                <a href="/" className="text-reset">Vue</a>
              </p>
              <p>
                <a href="/" className="text-reset">Laravel</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="/" className="text-reset">Pricing</a>
              </p>
              <p>
                <a href="/" className="text-reset">Settings</a>
              </p>
              <p>
                <a href="/" className="text-reset">Orders</a>
              </p>
              <p>
                <a href="/" className="text-reset">Help</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home mr-3"></i> Los Angeles, CA 90001, US</p>
              <p>
                <i className="fas fa-envelope mr-3"></i>
                info@example.com
              </p>
              <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
            </div>

          </div>

        </div>
      </section>



      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2022 Copyright: 
        <a className="ml-1 text-reset fw-bold" href="/">Company.com</a>
      </div>

    </footer>
  );
};

export default Footer;
