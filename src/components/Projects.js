import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Shuffle from 'shufflejs';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    useEffect(() => {
        const shuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
          itemSelector: '.shuffle-item',
          sizer: '.shuffle-sizer',
        });
    
        const filterButtons = document.querySelectorAll('[name="shuffle-filter"]');
        filterButtons.forEach((button) => {
          button.addEventListener('change', (event) => {
            const category = event.target.value;
            setActiveFilter(category);
            shuffle.filter(category === 'all' ? Shuffle.ALL_ITEMS : category);
          });
        });
    
        return () => {
          filterButtons.forEach((button) => {
            button.removeEventListener('change', () => {});
          });
        };
      }, []);
      
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
      cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
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
          <NavLink to="/" className="nav-item nav-link ">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-item nav-link">
            About
          </NavLink>
          <NavLink to="/services" className="nav-item nav-link">
            Services
          </NavLink>
          <NavLink to="/projects" className="nav-item nav-link active">
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
          <h1 className="display-4 text-white animated zoomIn">Our Projects</h1>
          <NavLink to="" className="h5 text-white">
            Home
          </NavLink>
          <i className="far fa-circle text-white px-2" />
          <NavLink to="" className="h5 text-white">
            Our Projects
          </NavLink>
        </div>
      </div>
    </div>
  </div>
   {/* projects start */}
   <section id="project-area" className="project-area solid-bg">
    <div className="container">
      <div className="row text-center">
        <div
          className="text-center mx-auto pb-5 wow fadeIn"
          data-wow-delay=".3s"
          style={{ maxWidth: 600 }}
        >
          <h5 className="text-primary">Our Projects</h5>
          <h1>Work of Excellence</h1>
        </div>
      </div>
      {/*/ Title row end */}
      <div className="row">
        <div className="col-12">
          <div className="shuffle-btn-group">
            <label className={activeFilter === 'all' ? 'active' : ''} htmlFor="all">
              <input
                type="radio"
                name="shuffle-filter"
                id="all"
                defaultValue="all"
                defaultChecked="checked"
              />
              Show All
            </label>
            <label className={activeFilter === 'commercial' ? 'active' : ''} htmlFor="commercial">
              <input
                type="radio"
                name="shuffle-filter"
                id="commercial"
                defaultValue="commercial"
              />
              Website Development
            </label>
            <label className={activeFilter === 'education' ? 'active' : ''} htmlFor="education">
              <input
                type="radio"
                name="shuffle-filter"
                id="education"
                defaultValue="education"
              />
              Mobile Application
            </label>
            <label className={activeFilter === 'government' ? 'active' : ''} htmlFor="government">
              <input
                type="radio"
                name="shuffle-filter"
                id="government"
                defaultValue="government"
              />
              Data Analytics
            </label>
            <label className={activeFilter === 'infrastructure' ? 'active' : ''} htmlFor="infrastructure">
              <input
                type="radio"
                name="shuffle-filter"
                id="infrastructure"
                defaultValue="infrastructure"
              />
              Cloud Computing Solutions
            </label>
            <label className={activeFilter === 'residential' ? 'active' : ''} htmlFor="residential">
              <input
                type="radio"
                name="shuffle-filter"
                id="residential"
                defaultValue="residential"
              />
             Cyber Security
            </label>
            <label className={activeFilter === 'healthcare' ? 'active' : ''} htmlFor="healthcare">
              <input
                type="radio"
                name="shuffle-filter"
                id="healthcare"
                defaultValue="healthcare"
              />
              Network Installation
            </label>
            
          </div>
          {/* project filter end */}
          <div className="row shuffle-wrapper">
            <div className="col-1 shuffle-sizer" />
            <div
              className="col-lg-4 col-md-6 shuffle-item"
              data-groups='["government","healthcare"]'
            >
              <div className="project-img-container">
                <NavLink
                  className="gallery-popup"
                  to="../../assets/images/projects/naps1.jpg"
                  aria-label="project-img"
                >
                  <img
                    className="img-fluid"
                    src="../../assets/images/projects/naps1.jpg"
                    alt="project-img"
                  />
                </NavLink>
                <div className="project-item-info">
                  <div className="project-item-info-content">
                    <h3 className="project-item-title">
                      <NavLink to="projects-single.html">
                        K.A.P.S
                      </NavLink>
                    </h3>
                    <button className="read-more-btn">Read More</button>
                  </div>
                </div>
              </div>
            </div>
            {/* shuffle item 1 end */}
            <div
              className="col-lg-4 col-md-6 shuffle-item"
              data-groups='["healthcare"]'
            >
              <div className="project-img-container">
                <NavLink
                  className="gallery-popup"
                  to="../../assets/images/projects/kuniv.png"
                  aria-label="project-img"
                >
                  <img
                    className="img-fluid"
                    src="../../assets/images/projects/kuniv.png"
                    alt="project-img"
                  />
                </NavLink>
                <div className="project-item-info">
                  <div className="project-item-info-content">
                    <h3 className="project-item-title">
                      <NavLink to="projects-single.html">Kegeberew University</NavLink>
                    </h3>
                    <button className="read-more-btn">Read More</button>
                  </div>
                </div>
              </div>
            </div>
            {/* shuffle item 2 end */}
            <div
              className="col-lg-4 col-md-6 shuffle-item"
              data-groups='["infrastructure","commercial"]'
            >
              <div className="project-img-container">
                <NavLink
                  className="gallery-popup"
                  to="../../assets/images/projects/project.jpg"
                  aria-label="project-img"
                >
                  <img
                    className="img-fluid"
                    src="../../assets/images/projects/project.jpg"
                    alt="project-img"
                  />
                </NavLink>
                <div className="project-item-info">
                  <div className="project-item-info-content">
                    <h3 className="project-item-title">
                      <NavLink to="projects-single.html">TNT East Facility</NavLink>
                    </h3>
                    <button className="read-more-btn">Read More</button>
                  </div>
                </div>
              </div>
            </div>
            {/* shuffle item 3 end */}
            <div
              className="col-lg-4 col-md-6 shuffle-item"
              data-groups='["education","infrastructure"]'
            >
              <div className="project-img-container">
                <NavLink
                  className="gallery-popup"
                  to="../../assets/images/projects/proje.png"
                  aria-label="project-img"
                >
                  <img
                    className="img-fluid"
                    src="../../assets/images/projects/proje.png"
                    alt="project-img"
                  />
                </NavLink>
                <div className="project-item-info">
                  <div className="project-item-info-content">
                    <h3 className="project-item-title">
                      <NavLink to="projects-single.html">Narriot Headquarters</NavLink>
                    </h3>
                    <button className="read-more-btn">Read More</button>
                  </div>
                </div>
              </div>
            </div>
            {/* shuffle item 4 end */}
            <div
              className="col-lg-4 col-md-6 shuffle-item"
              data-groups='["infrastructure","education"]'
            >
              <div className="project-img-container">
                <NavLink
                  className="gallery-popup"
                  to="../../assets/images/projects/mobile.png"
                  aria-label="project-img"
                >
                  <img
                    className="img-fluid"
                    src="../../assets/images/projects/mobile.png"
                    alt="project-img"
                  />
                </NavLink>
                <div className="project-item-info">
                  <div className="project-item-info-content">
                    <h3 className="project-item-title">
                      <NavLink to="projects-single.html">Kalas Metrorail</NavLink>
                    </h3>
                    <button className="read-more-btn">Read More</button>
                  </div>
                </div>
              </div>
            </div>
            {/* shuffle item 5 end */}
            <div
              className="col-lg-4 col-md-6 shuffle-item"
              data-groups='["residential"]'
            >
              <div className="project-img-container">
                <NavLink
                  className="gallery-popup"
                  to="../../assets/images/projects/cloud.png"
                  aria-label="project-img"
                >
                  <img
                    className="img-fluid"
                    src="../../assets/images/projects/cloud.png"
                    alt="project-img"
                  />
                </NavLink>
                <div className="project-item-info">
                  <div className="project-item-info-content">
                    <h3 className="project-item-title">
                      <NavLink to="projects-single.html">Ancraft Avenue House</NavLink>
                    </h3>
                    <button className="read-more-btn">Read More</button>
                  </div>
                </div>
              </div>
            </div>
            {/* shuffle item 6 end */}
          </div>
          {/* shuffle end */}
        </div>
        <div className="col-12">
          <div className="general-btn text-center">
            <NavLink
              to=""
              className="btn btn-secondary text-white px-5 py-3 rounded-pill"
              style={{ marginTop: 25 }}
            >
              Read More
            </NavLink>
          </div>
        </div>
      </div>
      {/* Content row end */}
    </div>
    {/*/ Container end */}
  </section>
  {/* Project area end */}
   {/* Vendor Start */}
 
   <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5 mb-5">
      <div className="bg-white">
        <div className="">
        <Slider {...settings}>
          <div>
          <img src="../../assets/img/vendor-8.jpg" alt="" />
          </div>
          <div>
          <img src="../../assets/img/vendor-7.jpg" alt="" />
          </div>
          <div>
          <img src="../../assets/img/vendor-6.jpg" alt="" />
          </div>
          <div>
          <img src="../../assets/img/vendor-5.jpg" alt="" />
          </div>
          <div>
          <img src="../../assets/img/vendor-4.jpg" alt="" />
          </div>
          <div>
          <img src="../../assets/img/vendor-3.jpg" alt="" />
          </div>
          <div>
          <img src="../../assets/img/vendor-2.jpg" alt="" />
          </div>
          <div>
          <img src="../../assets/img/vendor-1.jpg" alt="" />
          </div>
          <div>
          <img src="../../assets/img/vendor-9.jpg" alt="" />
          </div>
        </Slider>
        </div>
      </div>
    </div>
  </div>
  {/* Vendor End */}
  {/* FAQs Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="row text-center">
        <div
          className="text-center mx-auto pb-5 wow fadeIn"
          data-wow-delay=".3s"
          style={{ maxWidth: 600 }}
        >
          <h5 className="text-primary">FAQ's</h5>
          <h1>Mostly asked Questions</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="accordion" id="accordionFAQ1">
            <div className="accordion-item wow fadeIn" data-wow-delay="0.1s">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  How to build a website?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionFAQ1"
              >
                <div className="accordion-body">
                  Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed
                  sed magna et magna diam aliquyam amet dolore ipsum erat duo.
                  Sit rebum magna duo labore no diam.
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeIn" data-wow-delay="0.2s">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  How long will it take to get a new website?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionFAQ1"
              >
                <div className="accordion-body">
                  Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed
                  sed magna et magna diam aliquyam amet dolore ipsum erat duo.
                  Sit rebum magna duo labore no diam.
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeIn" data-wow-delay="0.3s">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Do you only create HTML websites?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionFAQ1"
              >
                <div className="accordion-body">
                  Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed
                  sed magna et magna diam aliquyam amet dolore ipsum erat duo.
                  Sit rebum magna duo labore no diam.
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeIn" data-wow-delay="0.4s">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="true"
                  aria-controls="collapseFour"
                >
                  Will my website be mobile-friendly?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionFAQ1"
              >
                <div className="accordion-body">
                  Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed
                  sed magna et magna diam aliquyam amet dolore ipsum erat duo.
                  Sit rebum magna duo labore no diam.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="accordion" id="accordionFAQ2">
            <div className="accordion-item wow fadeIn" data-wow-delay="0.5s">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Will you maintain my site for me?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionFAQ2"
              >
                <div className="accordion-body">
                  Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed
                  sed magna et magna diam aliquyam amet dolore ipsum erat duo.
                  Sit rebum magna duo labore no diam.
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeIn" data-wow-delay="0.6s">
              <h2 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  I’m on a strict budget. Do you have any low cost options?
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#accordionFAQ2"
              >
                <div className="accordion-body">
                  Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed
                  sed magna et magna diam aliquyam amet dolore ipsum erat duo.
                  Sit rebum magna duo labore no diam.
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeIn" data-wow-delay="0.7s">
              <h2 className="accordion-header" id="headingSeven">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  Will you maintain my site for me?
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                aria-labelledby="headingSeven"
                data-bs-parent="#accordionFAQ2"
              >
                <div className="accordion-body">
                  Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed
                  sed magna et magna diam aliquyam amet dolore ipsum erat duo.
                  Sit rebum magna duo labore no diam.
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeIn" data-wow-delay="0.8s">
              <h2 className="accordion-header" id="headingEight">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  I’m on a strict budget. Do you have any low cost options?
                </button>
              </h2>
              <div
                id="collapseEight"
                className="accordion-collapse collapse"
                aria-labelledby="headingEight"
                data-bs-parent="#accordionFAQ2"
              >
                <div className="accordion-body">
                  Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed
                  sed magna et magna diam aliquyam amet dolore ipsum erat duo.
                  Sit rebum magna duo labore no diam.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* FAQs Start */}
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
  {/* Google Map Start */}
  <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
    <iframe
    title="Google Map Location"
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
            123 Street, New York, USA
          </p>
          <p className="mb-2">
            <i className="fa fa-phone-alt me-3" />
            +012 345 67890
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope me-3" />
            info@example.com
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
          <NavLink className="btn btn-link" to="">
            About Us
          </NavLink>
          <NavLink className="btn btn-link" to="">
            Contact Us
          </NavLink>
          <NavLink className="btn btn-link" to="">
            Our Services
          </NavLink>
          <NavLink className="btn btn-link" to="">
            Terms &amp; Condition
          </NavLink>
          <NavLink className="btn btn-link" to="">
            Support
          </NavLink>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-light mb-4">Our Work Space</h5>
          <div className="row g-2">
            <div className="col-4">
              <img
                className="img-fluid rounded"
                src="../../assets/img/project-1.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded"
                src="../../assets/img/project-2.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded"
                src="../../assets/img/project-3.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded"
                src="../../assets/img/project-4.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded"
                src="../../assets/img/project-5.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded"
                src="../../assets/img/project-6.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-light mb-4">Newsletter</h5>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
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

export default Projects
