import React from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <>
  {/* Spinner Start */}
  {/* <div
    id="spinner"
    className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
  >
    <div className="spinner" />
  </div> */}
  {/* Spinner End */}
  {/* Topbar Start */}
  <div className="container-fluid  py-2 d-none d-md-flex" id="topbar">
    <div className="container">
      <div className="d-flex justify-content-between topbar">
        <div className="top-info">
          <small className="me-3 text-white">
            <NavLink to="#">
              <i className="fas fa-map-marker-alt me-2 text-secondary" />
            </NavLink>
            23 Ranking Street, New York
          </small>
          <small className="me-3 text-white">
            <NavLink to="#">
              <i className="fas fa-envelope me-2 text-secondary" />
            </NavLink>
            Email@Example.com
          </small>
        </div>
        <div id="note" className=" d-none d-xl-flex">
          <small>Note : We help you to Grow your Business</small>
        </div>
        <div className="top-link">
          <NavLink
            to=""
            className="bg-light nav-fill btn btn-sm-square rounded-circle"
          >
            <i className="fab fa-facebook-f text-primary" />
          </NavLink>
          <NavLink
            to=""
            className="bg-light nav-fill btn btn-sm-square rounded-circle"
          >
            <i className="fab fa-twitter text-primary" />
          </NavLink>
          <NavLink
            to=""
            className="bg-light nav-fill btn btn-sm-square rounded-circle"
          >
            <i className="fab fa-instagram text-primary" />
          </NavLink>
          <NavLink
            to=""
            className="bg-light nav-fill btn btn-sm-square rounded-circle me-0"
          >
            <i className="fab fa-linkedin-in text-primary" />
          </NavLink>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  {/* Navbar & Carousel Start */}
  <div className="container-fluid position-relative p-0">
    <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
      <NavLink to="index.html" className="navbar-brand p-0">
        <img src="../../assets/img/logo-removebg.png" alt="" />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <NavLink to="/" className="nav-item nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-item nav-link">
            About
          </NavLink>
          <NavLink to="/services" className="nav-item nav-link">
            Services
          </NavLink>
          <NavLink to="/projects" className="nav-item nav-link">
            Projects
          </NavLink>
          {/* <NavLink to="/careers" className="nav-item nav-link">
            Blog
          </NavLink> */}
          <NavLink to="/contact" className="nav-item nav-link  active">
            Contact
          </NavLink>
        </div>
        
      </div>
    </nav>
    <div
      className="container-fluid bg-primary py-5 bg-header"
      style={{ marginBottom: 90 }}
    >
      <div className="row py-5">
        <div className="col-12 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-4 text-white animated zoomIn">Contact Us</h1>
          <NavLink to="" className="h5 text-white">
            Home
          </NavLink>
          <i className="far fa-circle text-white px-2" />
          <NavLink to="" className="h5 text-white">
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  </div>
  {/* Contact Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div
        className="section-title text-center position-relative pb-3 mb-5 mx-auto"
        style={{ maxWidth: 600 }}
      >
        <h5 className="fw-bold text-primary text-uppercase">Contact Us</h5>
        <h1 className="mb-0">If You Have Any Query, Feel Free To Contact Us</h1>
      </div>
      <div className="row g-5 mb-5">
        <div className="col-lg-4">
          <div
            className="d-flex align-items-center wow fadeIn"
            data-wow-delay="0.1s"
          >
            <div
              className="bg-primary d-flex align-items-center justify-content-center rounded"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-phone-alt text-white" />
            </div>
            <div className="ps-4">
              <h5 className="mb-2">Call to ask any question</h5>
              <h4 className="text-primary mb-0">+012 345 6789</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div
            className="d-flex align-items-center wow fadeIn"
            data-wow-delay="0.4s"
          >
            <div
              className="bg-primary d-flex align-items-center justify-content-center rounded"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-envelope-open text-white" />
            </div>
            <div className="ps-4">
              <h5 className="mb-2">Email to get free quote</h5>
              <h4 className="text-primary mb-0">info@example.com</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div
            className="d-flex align-items-center wow fadeIn"
            data-wow-delay="0.8s"
          >
            <div
              className="bg-primary d-flex align-items-center justify-content-center rounded"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-map-marker-alt text-white" />
            </div>
            <div className="ps-4">
              <h5 className="mb-2">Visit our office</h5>
              <h4 className="text-primary mb-0">123 Street, NY, USA</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-5">
        <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control border-0 bg-light px-4"
                  placeholder="Your Name"
                  style={{ height: 55 }}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control border-0 bg-light px-4"
                  placeholder="Your Email"
                  style={{ height: 55 }}
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control border-0 bg-light px-4"
                  placeholder="Subject"
                  style={{ height: 55 }}
                />
              </div>
              <div className="col-12">
                <textarea
                  className="form-control border-0 bg-light px-4 py-3"
                  rows={4}
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
          <iframe
          title="Google Map Location"
            className="position-relative rounded w-100 h-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5416268184313!2d38.74512547490908!3d9.01425519104649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85af85c2c629%3A0x41b0831f5ff82fc8!2sPURPOSE%20BLACK%20ETHIOPIA%20OFFICE!5e0!3m2!1sen!2str!4v1701336138977!5m2!1sen!2str"
            frameBorder={0}
            style={{ minHeight: 350, border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
  {/* Footer Start */}
  <div
    className="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h5 className="text-light mb-4">Address</h5>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt me-3" />
            Addis Ababa, Ethiopia
          </p>
          <p className="mb-2">
            <i className="fa fa-phone-alt me-3" />
            (+251) 946-545-454
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope me-3" />
            info@kegeberew.com ,
            info@chinatoafrika.com
          </p>
          <div className="d-flex pt-2">
            <NavLink
              className="btn btn-square btn-outline-secondary rounded-circle me-1"
              to=""
            >
              <i className="fab fa-twitter" />
            </NavLink>
            <NavLink
              className="btn btn-square btn-outline-secondary rounded-circle me-1"
              to=""
            >
              <i className="fab fa-facebook-f" />
            </NavLink>
            <NavLink
              className="btn btn-square btn-outline-secondary rounded-circle me-1"
              to=""
            >
              <i className="fab fa-youtube" />
            </NavLink>
            <NavLink
              className="btn btn-square btn-outline-secondary rounded-circle me-0"
              to=""
            >
              <i className="fab fa-linkedin-in" />
            </NavLink>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-light mb-4">Quick Links</h5>
          <NavLink className="btn btn-link" to="/about">
            About Us
          </NavLink>
          <NavLink className="btn btn-link" to="/services">
            Our Services
          </NavLink>
          <NavLink className="btn btn-link" to="/projects">
            Our Projects
          </NavLink>
          {/* <NavLink className="btn btn-link" to="/careers">
            careers
          </NavLink> */}
          <NavLink className="btn btn-link" to="/contact">
            Contact Us
          </NavLink>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-light mb-4">Our Work Space</h5>
          <div className="row g-2">
            <div className="col-4">
              <img
                className="img-fluid rounded"
                src="../../assets/img/biro1.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded"
                src="../../assets/img/biro2.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded"
                src="../../assets/img/biro3.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded"
                src="../../assets/img/biro4.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded"
                src="../../assets/img/biro5.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded"
                src="../../assets/img/biro6.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-light mb-4">A Little About Us</h5>
          <p>At KTS, we are driven by a relentless passion for technology and a commitment to delivering cutting-edge solutions that empower businesses to thrive in the digital era.</p>
          <NavLink
            to=""
            className="btn btn-secondary text-white px-5 py-3 rounded-pill"
          >
            Read More
          </NavLink>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
</>

    </div>
  )
}

export default Contact
