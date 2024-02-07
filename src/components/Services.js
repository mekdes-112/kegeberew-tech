import React from 'react'
import { NavLink } from 'react-router-dom';

const Services = () => {
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
          <NavLink to="/services" className="nav-item nav-link active">
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
          <h1 className="display-4 text-white animated zoomIn">Our Services</h1>
          <NavLink to="" className="h5 text-white">
            Home
          </NavLink>
          <i className="far fa-circle text-white px-2" />
          <NavLink to="" className="h5 text-white">
            Services
          </NavLink>
        </div>
      </div>
    </div>
  </div>
  {/* Facts Start */}
  <div className="">
    <div className="container py-5 pt-lg-0">
      <div className="row gx-0">
        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
          <div
            className="bg-primary shadow d-flex align-items-center justify-content-center p-4"
            style={{ height: 150 }}
          >
            <div
              className="bg-white d-flex align-items-center justify-content-center rounded mb-2"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-users text-primary" />
            </div>
            <div className="ps-4">
              <h5 className="text-white mb-0">Happy Clients</h5>
              <h1 className="text-white mb-0" data-toggle="counter-up">
                12345
              </h1>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
          <div
            className="bg-light shadow d-flex align-items-center justify-content-center p-4"
            style={{ height: 150 }}
          >
            <div
              className="bg-primary d-flex align-items-center justify-content-center rounded mb-2"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-check text-white" />
            </div>
            <div className="ps-4">
              <h5 className="text-primary mb-0">Projects Done</h5>
              <h1 className="mb-0" data-toggle="counter-up">
                12345
              </h1>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
          <div
            className="bg-primary shadow d-flex align-items-center justify-content-center p-4"
            style={{ height: 150 }}
          >
            <div
              className="bg-white d-flex align-items-center justify-content-center rounded mb-2"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-award text-primary" />
            </div>
            <div className="ps-4">
              <h5 className="text-white mb-0">Win Awards</h5>
              <h1 className="text-white mb-0" data-toggle="counter-up">
                12345
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Facts Start */}
   {/* Services Start */}
   <div className="container-fluid services py-5 mb-5" data-wow-delay=".3s">
    <div className="container">
      <div
        className="text-center mx-auto pb-5 wow fadeIn"
        data-wow-delay=".3s"
        style={{ maxWidth: 600 }}
      >
        <h5 className="" style={{color: '#d7a022'}}>Our Services</h5>
        <h1>Services Built Specifically For Your Business</h1>
      </div>
      <div className="row g-5 services-inner">
        <div
          className="col-md-6 col-lg-4 wow fadeIn"
          data-wow-delay=".3s"
          id="service-card"
        >
          <div className="services-item bg-light">
            <div className="p-4 text-center services-content">
              <div className="services-content-icon">
                <i className="fa fa-code fa-7x mb-4 text-primary" />
                <h4 className="mb-3">Web Design & Development</h4>
                <p className="mb-4">
                We specialize in creating stunning and functional websites that leave a lasting impression with our team of skilled designers and developers.       </p>
                {/* <NavLink
                  to=""
                  className="btn btn-secondary text-white px-5 py-3 rounded-pill"
                >
                  Read More
                </NavLink> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
          <div className="services-item bg-light">
            <div className="p-4 text-center services-content">
              <div className="services-content-icon">
                {/* <i className="fa fa-file-code fa-7x mb-4 text-primary" /> */}
                <img src="../../assets/img/Vector mobile.svg" alt="Mobile Screen Button" className="img-fluid mb-4" />
                <h4 className="mb-3">Mobile App Development</h4>
                <p className="mb-4">
                We specialize in creating innovative and user-friendly mobile applications that cater to your specific needs. 
                </p>
                {/* <NavLink
                  to=""
                  className="btn btn-secondary text-white px-5 py-3 rounded-pill"
                >
                  Read More
                </NavLink> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
          <div className="services-item bg-light">
            <div className="p-4 text-center services-content">
              <div className="services-content-icon">
              <img src="../../assets/img/chart.svg" alt="Mobile Screen Button" className="img-fluid mb-4" />
                {/* <i className="fa fa-file-code fa-7x mb-4 text-primary" /> */}
                <h4 className="mb-3">Data Analytics</h4>
                <p className="mb-4">
                We specialize in turning raw data into actionable insights. Our data analytics services help businesses make informed decisions and drive growth.
                </p>
                {/* <NavLink
                  to=""
                  className="btn btn-secondary text-white px-5 py-3 rounded-pill"
                >
                  Read More
                </NavLink> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
          <div className="services-item bg-light">
            <div className="p-4 text-center services-content">
              <div className="services-content-icon">
                {/* <i className="fa fa-file-code fa-7x mb-4 text-primary" /> */}
                <img src="../../assets/img/person.svg" alt="Mobile Screen Button" className="img-fluid mb-4" />
                <h4 className="mb-3">IT Consulting</h4>
                <p className="mb-4">
                We offer comprehensive IT consulting services to help
                 businesses navigate the ever-changing technology landscape.
                </p>
                {/* <NavLink
                  to=""
                  className="btn btn-secondary text-white px-5 py-3 rounded-pill"
                >
                  Read More
                </NavLink> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
          <div className="services-item bg-light">
            <div className="p-4 text-center services-content">
              <div className="services-content-icon">
              <img src="../../assets/img/cloud.svg" alt="Mobile Screen Button" className="img-fluid mb-4" />
                {/* <i className="fa fa-file-code fa-7x mb-4 text-primary" /> */}
                <h4 className="mb-3">Cloud Computing Solutions</h4>
                <p className="mb-4">
                We offer a range of cloud computing solutions to help businesses leverage the power of the cloud.
                </p>
                {/* <NavLink
                  to=""
                  className="btn btn-secondary text-white px-5 py-3 rounded-pill"
                >
                  Read More
                </NavLink> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
          <div className="services-item bg-light">
            <div className="p-4 text-center services-content">
              <div className="services-content-icon">
                {/* <i className="fa fa-external-link-alt fa-7x mb-4 text-primary" /> */}
                <img src="../../assets/img/security.svg" alt="Mobile Screen Button" className="img-fluid mb-4" />
                <h4 className="mb-3">Cyber Security</h4>
                <p className="mb-4">
                We prioritize the security of your digital assets. Our cybersecurity services are designed to protect your business from evolving cyber threats.
                </p>
                {/* <NavLink
                  to=""
                  className="btn btn-secondary text-white px-5 py-3 rounded-pill"
                >
                  Read More
                </NavLink> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
          <div className="services-item bg-light">
            <div className="p-4 text-center services-content">
              <div className="services-content-icon">
                <i className="fa fa-external-link-alt fa-7x mb-4 text-primary" />
                <h4 className="mb-3">Emerging Technologies</h4>
                <p className="mb-4">
                We explore the exciting advancements shaping the future. From artificial intelligence and machine learning to blockchain and Internet of Things (IoT).
                </p>
                {/* <NavLink
                  to=""
                  className="btn btn-secondary text-white px-5 py-3 rounded-pill"
                >
                  Read More
                </NavLink> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
          <div className="services-item bg-light">
            <div className="p-4 text-center services-content">
              <div className="services-content-icon">
                {/* <i className="fa fa-envelope-open fa-7x mb-4 text-primary" /> */}
                <img src="../../assets/img/netwrk.svg" alt="Mobile Screen Button" className="img-fluid mb-4" />
                <h4 className="mb-3">Network Installation</h4>
                <p className="mb-4">
                We offer comprehensive solutions for setting up and optimizing your network infrastructure. 
                </p>
                {/* <NavLink
                  to=""
                  className="btn btn-secondary text-white px-5 py-3 rounded-pill"
                >
                  Read More
                </NavLink> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
          <div className="services-item bg-light">
            <div className="p-4 text-center services-content">
              <div className="services-content-icon">
                {/* <i className="fa-solid fa-laptop fa-7x mb-4 text-primary" /> */}
                <img src="../../assets/img/wifi.svg" alt="Mobile Screen Button" className="img-fluid mb-4" />
                <h4 className="mb-3">IOT implementation</h4>
                <p className="mb-4">
                We specialize in helping businesses leverage the power of the Internet of Things (IoT) to drive innovation and efficiency. 
                </p>
                {/* <NavLink
                  to=""
                  className="btn btn-secondary text-white px-5 py-3 rounded-pill"
                >
                  Read More
                </NavLink> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Services End */}
  {/* Contact Us section*/}
  <section className="contactus" id="contact">
    <div className="container">
      <div className="row mb-5 pb-5">
        <div className="col-sm-5" data-aos="fade-up" data-aos-offset={-500}>
          <img src="../../assets/images/contact.jpg" alt="contact" className="img-fluid" />
        </div>
        <div className="col-sm-7" data-aos="fade-up" data-aos-offset={-500}>
          <div className="row text-center">
            <div
              className="text-center mx-auto pb-5 wow fadeIn"
              data-wow-delay=".3s"
              style={{ maxWidth: 600 }}
            >
              <h5 className="text-primary">Contact Us</h5>
              <h1>Contact Us for more information</h1>
            </div>
          </div>
          <form>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name*"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="mail"
                    placeholder="Email*"
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    placeholder="Message*"
                    rows={5}
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <NavLink to="#" className="btn btn-secondary">
                  SEND
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
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

export default Services
