import React from 'react';
import { NavLink } from 'react-router-dom';


const AboutUs = () => {
  return (
    <div>
      <>

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
        <img src="img/logo-removebg.png" alt="" />
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
          <NavLink to="/" className="nav-item nav-link ">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-item nav-link active">
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
          <NavLink to="/contact" className="nav-item nav-link">
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
          <h1 className="display-4 text-white animated zoomIn">About Us</h1>
          <NavLink to="/" className="h5 text-white">
            Home
          </NavLink>
          <i className="far fa-circle text-white px-2" />
          <NavLink to="" className="h5 text-white">
            About
          </NavLink>
        </div>
      </div>
    </div>
  </div>
  {/* About Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-7">
          <div className="section-title position-relative pb-3 mb-5">
            <h5 className="fw-bold text-uppercase" style={{ color: '#d7a022' }}>About Us</h5>
            <h1 className="mb-0">
            Welcome to KTS
            </h1>
          </div>
          <p className="mb-4">
          Kegeberew Technology Solutions (KTS) is to revolutionize the technological landscape in Ethiopia, Africa, and around the globe. We strive to provide innovative software, AI, and IT solutions that empower businesses and individuals to thrive in the digital era. 
         
          </p>
          <div className="row g-0 mb-3">
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
            <h5 className="mb-3">
                <i className="fa fa-check text-primary me-3" />
                24/7 Support
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check text-primary me-3" />
                Professional Staff
              </h5>
            </div>
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
              
              <h5 className="mb-3">
                <i className="fa fa-check text-primary me-3" />
                Fair Prices
              </h5>
            </div>
          </div>
          <div className="border rounded p-4">
            <nav>
              <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                <button
                  className="nav-link  active"
                  id="nav-story-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-story"
                  type="button"
                  role="tab"
                  aria-controls="nav-story"
                  aria-selected="true"
                >
                  Goal
                </button>
                <button
                  className="nav-link "
                  id="nav-mission-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-mission"
                  type="button"
                  role="tab"
                  aria-controls="nav-mission"
                  aria-selected="false"
                >
                  Mission
                </button>
                <button
                  className="nav-link "
                  id="nav-vision-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-vision"
                  type="button"
                  role="tab"
                  aria-controls="nav-vision"
                  aria-selected="false"
                >
                  Vision
                </button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-story"
                role="tabpanel"
                aria-labelledby="nav-story-tab"
              >
                
                1. Excellence in Innovation <br />
                2. Digital Transformation <br />
                3. Ethical AI Development <br />
                4. Collaborative Partnerships <br />
                5. Global Expansion 
                <p className="mb-0">
                 </p>
              </div>
              <div
                className="tab-pane fade"
                id="nav-mission"
                role="tabpanel"
                aria-labelledby="nav-mission-tab"
              >
                <p>
                Our mission at Kegeberew Technology Solutions is to revolutionize the technological landscape in Ethiopia, Africa, and around the globe. We strive to provide innovative software, AI, and IT solutions that empower businesses and individuals to thrive in the digital era. Our goal is to drive progress, efficiency, and sustainable growth through cutting-edge technologies.
                </p>
                <p className="mb-0">
                  
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="nav-vision"
                role="tabpanel"
                aria-labelledby="nav-vision-tab"
              >
                <p>
                We envision a future where advanced technology is accessible to all, bridging the gap between developed and emerging markets. At Kegeberew Technology Solutions, we aspire to be the leading provider of software, AI, and IT solutions in Ethiopia, Africa, and globally. We strive to be the catalyst for digital transformation, enabling businesses and individuals to leverage technology to its fullest potential.
                </p>
                <p className="mb-0">
                 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5" style={{ minHeight: 500 }}>
          <div className="position-relative h-100">
            <img
              className="position-absolute w-100 h-100 rounded wow zoomIn"
              data-wow-delay="0.9s"
              src="../../assets/img/3468.jpg"
              alt=''
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Facts Start */}
  <div className="container-fluid facts my-5 py-5">
    <div className="container py-5">
      <div className="row g-5">
        <div
          className="col-sm-6 col-lg-3 text-center wow fadeIn"
          data-wow-delay="0.1s"
        >
          <i className="fa fa-users fa-3x text-white mb-3" />
          <h1 className="display-4 text-white" data-toggle="counter-up">
            12
          </h1>
          <span className="fs-5 text-white">Happy Clients</span>
          <hr className="bg-white w-25 mx-auto mb-0" />
        </div>
        <div
          className="col-sm-6 col-lg-3 text-center wow fadeIn"
          data-wow-delay="0.3s"
        >
          <i className="fa fa-check fa-3x text-white mb-3" />
          <h1 className="display-4 text-white" data-toggle="counter-up">
            34
          </h1>
          <span className="fs-5 text-white">Projects Completed</span>
          <hr className="bg-white w-25 mx-auto mb-0" />
        </div>
        <div
          className="col-sm-6 col-lg-3 text-center wow fadeIn"
          data-wow-delay="0.5s"
        >
          <i className="fa fa-users-cog fa-3x text-white mb-3" />
          <h1 className="display-4 text-white" data-toggle="counter-up">
            14
          </h1>
          <span className="fs-5 text-white">Dedicated Staff</span>
          <hr className="bg-white w-25 mx-auto mb-0" />
        </div>
        <div
          className="col-sm-6 col-lg-3 text-center wow fadeIn"
          data-wow-delay="0.7s"
        >
          <i className="fa fa-award fa-3x text-white mb-3" />
          <h1 className="display-4 text-white" data-toggle="counter-up">
            3
          </h1>
          <span className="fs-5 text-white">Years Experience</span>
          <hr className="bg-white w-25 mx-auto mb-0" />
        </div>
      </div>
    </div>
  </div>
  {/* Facts End */}
  {/* location */}
  <section id="main-container" className="main-container">
    <div className="container">
      <div className="row text-center">
        <div className="col-12">
          <h2 className="section-title">Reaching our Office</h2>
          <h3 className="section-sub-title">Find Our Location</h3>
        </div>
      </div>
      {/*/ Title row end */}
      <div className="row">
        <div className="col-md-4">
          <div className="ts-service-box-bg text-center h-100">
            <span className="ts-service-icon icon-round">
              <i className="fas fa-map-marker-alt mr-0" />
            </span>
            <div className="ts-service-box-content">
              <h4>Visit Our Office</h4>
              <p>9051 Constra Incorporate, USA</p>
            </div>
          </div>
        </div>
        {/* Col 1 end */}
        <div className="col-md-4">
          <div className="ts-service-box-bg text-center h-100">
            <span className="ts-service-icon icon-round">
              <i className="fa fa-envelope mr-0" />
            </span>
            <div className="ts-service-box-content">
              <h4>Email Us</h4>
              <p>office@Constra.com</p>
            </div>
          </div>
        </div>
        {/* Col 2 end */}
        <div className="col-md-4">
          <div className="ts-service-box-bg text-center h-100">
            <span className="ts-service-icon icon-round">
              <i className="fa fa-phone-square mr-0" />
            </span>
            <div className="ts-service-box-content">
              <h4>Call Us</h4>
              <p>(+9) 847-291-4353</p>
            </div>
          </div>
        </div>
        {/* Col 3 end */}
      </div>
      {/* 1st row end */}
    </div>
    {/* Conatiner end */}
  </section>
  {/* Google Map Start */}
  <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
    <iframe
    title="Google Maps Location"
      className="w-100 mb-n2"
      style={{ height: 450 }}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5416268184313!2d38.74512547490908!3d9.01425519104649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85af85c2c629%3A0x41b0831f5ff82fc8!2sPURPOSE%20BLACK%20ETHIOPIA%20OFFICE!5e0!3m2!1sen!2str!4v1701336138977!5m2!1sen!2str"
      frameBorder={0}
      allowFullScreen=""
      aria-hidden="false"
      tabIndex={0}
    />
  </div>
  {/* Google Map End */}
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

export default AboutUs
