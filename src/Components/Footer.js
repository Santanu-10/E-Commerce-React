import React from "react";

function Footer() {
  return (
    <div>
      {/* <!-- Footer Start --> */}
      <div className="container-fluid bg-dark text-secondary mt-5 pt-5">
        <div className="row px-xl-5 pt-5">
          <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
            <h5 className="text-secondary text-uppercase mb-4">Get In Touch</h5>
            <p className="mb-4">
              No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et
              et dolor sed dolor. Rebum tempor no vero est magna amet no
            </p>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt text-primary mr-3"></i>123
              Street, New York, USA
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope text-primary mr-3"></i>
              info@example.com
            </p>
            <p className="mb-0">
              <i className="fa fa-phone-alt text-primary mr-3"></i>+012 345
              67890
            </p>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-md-4 mb-5">
                <h5 className="text-secondary text-uppercase mb-4">
                  Quick Shop
                </h5>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-secondary mb-2" href="/">
                    <i className="fa fa-angle-right mr-2"></i>Home
                  </a>
                  <a className="text-secondary mb-2" href="/">
                    <i className="fa fa-angle-right mr-2"></i>Our Shop
                  </a>
                  <a className="text-secondary mb-2" href="/">
                    <i className="fa fa-angle-right mr-2"></i>Shop Detail
                  </a>
                  <a className="text-secondary mb-2" href="/">
                    <i className="fa fa-angle-right mr-2"></i>Shopping Cart
                  </a>
                  <a className="text-secondary mb-2" href="/">
                    <i className="fa fa-angle-right mr-2"></i>Checkout
                  </a>
                  <a className="text-secondary" href="/">
                    <i className="fa fa-angle-right mr-2"></i>Contact Us
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="text-secondary text-uppercase mb-4">
                  My Account
                </h5>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-secondary mb-2" href="/">
                    <i className="fa fa-angle-right mr-2"></i>Home
                  </a>
                  <a className="text-secondary mb-2" href="/">
                    <i className="fa fa-angle-right mr-2"></i>Our Shop
                  </a>
                  <a className="text-secondary mb-2" href="/">
                    <i className="fa fa-angle-right mr-2"></i>Shop Detail
                  </a>
                  <a className="text-secondary mb-2" href="/">
                    <i className="fa fa-angle-right mr-2"></i>Shopping Cart
                  </a>
                  <a className="text-secondary mb-2" href="/">
                    <i className="fa fa-angle-right mr-2"></i>Checkout
                  </a>
                  <a className="text-secondary" href="/">
                    <i className="fa fa-angle-right mr-2"></i>Contact Us
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="text-secondary text-uppercase mb-4">
                  Newsletter
                </h5>
                <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                <form action="">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Email Address"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary">Sign Up</button>
                    </div>
                  </div>
                </form>
                <h6 className="text-secondary text-uppercase mt-4 mb-3">
                  Follow Us
                </h6>
                <div className="d-flex">
                  <a className="btn btn-primary btn-square mr-2" href="https://twitter.com/i/flow/login">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-square mr-2"
                    href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569849%7Cb%7Cfacebook%20%27%7C&placement=&creative=589460569849&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-327195741349%26loc_physical_ms%3D9061839%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjwjryjBhD0ARIsAMLvnF-vKpT7cjCKLlHUgM_QTZWZzHQUFq7t97TKuePgp5N3xGWromS_hp0aAhacEALw_wcB"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-primary btn-square mr-2" href="https://in.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-square"
                    href="https://www.instagram.com/accounts/login/"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row border-top mx-xl-5 py-4"
          style={{ borderColor: "rgba(256, 256, 256, .1) !important," }}
        >
          <div className="col-md-6 px-xl-0">
            <p className="mb-md-0 text-center text-md-left text-secondary">
              &copy;{" "}
              <a className="text-primary" href="/">
                Domain
              </a>
              . All Rights Reserved. Designed by Sosta dokan
              <a className="text-primary" href="https://htmlcodex.com">
                HTML Codex
              </a>
            </p>
          </div>
          <div className="col-md-6 px-xl-0 text-center text-md-right">
            <img className="img-fluid" src="images/payments.png" alt="" />
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}

      {/* <!-- Back to Top --> */}
      <a href="/" className="btn btn-primary back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </a>
    </div>
  );
}

export default Footer;
