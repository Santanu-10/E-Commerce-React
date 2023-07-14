import React from "react";
import Navbar from "../Navbar";
import Footer from "./Footer";


function Shop() {
  return (
    <div>
      <Navbar />

      <h5 className="section-title position-relative text-uppercase mb-3">
        <span className="bg-secondary pr-3">Filter by size</span>
      </h5>
      <div className="bg-light p-4 mb-30">
        <form>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              checked
              id="size-all"
            />
            <label className="custom-control-label" for="size-all">
              All Size
            </label>
            <span className="badge border font-weight-normal">1000</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="size-1"
            />
            <label className="custom-control-label" for="size-1">
              XS
            </label>
            <span className="badge border font-weight-normal">150</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="size-2"
            />
            <label className="custom-control-label" for="size-2">
              S
            </label>
            <span className="badge border font-weight-normal">295</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="size-3"
            />
            <label className="custom-control-label" for="size-3">
              M
            </label>
            <span className="badge border font-weight-normal">246</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="size-4"
            />
            <label className="custom-control-label" for="size-4">
              L
            </label>
            <span className="badge border font-weight-normal">145</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
            <input
              type="checkbox"
              className="custom-control-input"
              id="size-5"
            />
            <label className="custom-control-label" for="size-5">
              XL
            </label>
            <span className="badge border font-weight-normal">168</span>
          </div>
        </form>
      </div>

      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Featured Products</span>
        </h2>
        <div className="row px-xl-5">
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="images/product-1.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="/">
                    <i className="fa fa-shopping-cart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="/">
                    <i className="far fa-heart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="/">
                    <i className="fa fa-sync-alt"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="/">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="/">
                  Product Name Goes Here
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>₹123.00</h5>
                  <h6 className="text-muted ml-2">
                    <del>₹123.00</del>
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="images/product-2.jpg"
                  alt=""
                />
                <div className="product-action">
                  {/* <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-search"></i></a> */}
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="/">
                  Product Name Goes Here
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>₹123.00</h5>
                  <h6 className="text-muted ml-2">
                    <del>₹123.00</del>
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star-half-alt text-primary mr-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="images/product-3.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="/">
                    <i className="fa fa-shopping-cart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="/">
                    <i className="far fa-heart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="/">
                    <i className="fa fa-sync-alt"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="/">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="/">
                  Product Name Goes Here
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>₹123.00</h5>
                  <h6 className="text-muted ml-2">
                    <del>₹123.00</del>
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star-half-alt text-primary mr-1"></small>
                  <small className="far fa-star text-primary mr-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="images/product-4.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="/">
                    <i className="fa fa-shopping-cart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="/">
                    <i className="far fa-heart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="/">
                    <i className="fa fa-sync-alt"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="/">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="/">
                  Product Name Goes Here
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>₹123.00</h5>
                  <h6 className="text-muted ml-2">
                    <del>₹123.00</del>
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="far fa-star text-primary mr-1"></small>
                  <small className="far fa-star text-primary mr-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="images/product-5.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="/">
                    <i className="fa fa-shopping-cart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="/">
                    <i className="far fa-heart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="/">
                    <i className="fa fa-sync-alt"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="/">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="/">
                  Product Name Goes Here
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>₹123.00</h5>
                  <h6 className="text-muted ml-2">
                    <del>₹123.00</del>
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="images/product-6.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="/">
                    <i className="fa fa-shopping-cart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="/">
                    <i className="far fa-heart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="/">
                    <i className="fa fa-sync-alt"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="/">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="/">
                  Product Name Goes Here
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>₹123.00</h5>
                  <h6 className="text-muted ml-2">
                    <del>₹123.00</del>
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star-half-alt text-primary mr-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="images/product-7.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="/">
                    <i className="fa fa-shopping-cart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="/">
                    <i className="far fa-heart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="/">
                    <i className="fa fa-sync-alt"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="///">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="/">
                  Product Name Goes Here
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>₹123.00</h5>
                  <h6 className="text-muted ml-2">
                    <del>₹123.00</del>
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star-half-alt text-primary mr-1"></small>
                  <small className="far fa-star text-primary mr-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="images/product-8.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="/">
                    <i className="fa fa-shopping-cart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="/">
                    <i className="far fa-heart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="/">
                    <i className="fa fa-sync-alt"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="/">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="/">
                  Product Name Goes Here
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>₹123.00</h5>
                  <h6 className="text-muted ml-2">
                    <del>₹123.00</del>
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="far fa-star text-primary mr-1"></small>
                  <small className="far fa-star text-primary mr-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Products End --> */}

      <Footer />
    </div>
  );
}

export default Shop;
