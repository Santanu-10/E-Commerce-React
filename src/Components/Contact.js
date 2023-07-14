import React from "react";
import Navbar from "../Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <div>
      {/*<!-- Topbar Start -->*/}
      <Navbar />
      {/*<!-- Navbar End -->*/}

      {/*<!-- Breadcrumb Start -->*/}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              {/* <Link to = "/" className="breadcrumb-item text-dark" >
                Home
              </Link> */}
              <span className="breadcrumb-item active">Contact</span>
            </nav>
          </div>
        </div>
      </div>
      {/*<!-- Breadcrumb End -->*/}

      {/*<!-- Contact Start -->*/}
      <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Contact Us</span>
        </h2>
        <div className="row px-xl-5">
          <div className="col-lg-7 mb-5">
            <div className="contact-form bg-light p-30">
              <div id="success"></div>
              <form
                name="sentMessage"
                id="contactForm"
                novalidate="novalidate"
                action="https://formspree.io/f/xlekznpy"
                method="POST"
              >
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required="required"
                    data-validation-required-message="Please enter your name"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required="required"
                    data-validation-required-message="Please enter your email"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    required="required"
                    data-validation-required-message="Please enter a subject"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <textarea
                    className="form-control"
                    rows="8"
                    id="message"
                    name="message"
                    placeholder="Message"
                    required="required"
                    data-validation-required-message="Please enter your message"
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div>
                  <button
                    className="btn btn-primary py-2 px-4"
                    type="submit"
                    id="sendMessageButton"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 mb-5">
            <div className="bg-light p-30 mb-30">
              <iframe
                style={{ width: "100%", height: "350px", border: "0" }}
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.7432998021186!2d88.41237027497336!3d22.476278779560534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02722b05a38e87%3A0x276c0d30e6be12ea!2sNetaji%20Subhash%20Engineering%20College!5e0!3m2!1sen!2sin!4v1684261396424!5m2!1sen!2sin"
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
            <div className="bg-light p-30 mb-3">
              <p className="mb-2">
                <i className="fa fa-map-marker-alt text-primary mr-3"></i>123
                Street, Netaji Subhas Engineering collage, India
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope text-primary mr-3"></i>
                info@example.com
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt text-primary mr-3"></i>+012 345
                67890
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- Contact End -->*/}

      {/*<!-- Footer Start -->*/}
      <Footer />
      {/*<!-- Footer End -->*/}

      {/*<!-- Back to Top -->*/}
      <a href="/" className="btn btn-primary back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </a>
    </div>
  );
}

export default Contact;
