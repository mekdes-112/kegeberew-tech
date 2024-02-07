import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { NavLink } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import { FaPlayCircle } from 'react-icons/fa';


const Kaps = () => {
    

   

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
      };
    
      const closeModal = () => {
        setIsOpen(false);
      };


  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    '../../assets/images/projects/kapsgold.jpg',
    '../../assets/img/kaps1.jpg',
    '../../assets/img/kaps2.jpg',
    '../../assets/img/kaps3.jpg',
    '../../assets/img/kaps4.jpg',
    '../../assets/img/kaps5.jpg',
    '../../assets/img/kaps6.jpg',
    '../../assets/img/kaps7.jpg',
    '../../assets/img/kaps8.jpg',
    '../../assets/img/kaps9.jpg',
    '../../assets/img/kaps10.jpg',
    '../../assets/img/kaps11.jpg',
    '../../assets/img/kaps12.jpg',
    '../../assets/img/kaps13.jpg',
    
  ];

  const openLightbox = () => {
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const goToPrevious = () => {
    setPhotoIndex((photoIndex + images.length - 1) % images.length);
  };

  const goToNext = () => {
    setPhotoIndex((photoIndex + 1) % images.length);
  };

  return (
    <div>
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
          <NavLink to="/contact" className="nav-item nav-link">
            Contact
          </NavLink>
        </div>
        
      </div>
    </nav>
    <div
        className="container-fluid bg-primary py-5 bg-headerone"
        style={{ marginBottom: 90 }}
      >
        <div className="row py-5">
          <div className="col-12 pt-lg-5 mt-lg-5 text-center">
            {/* Video Icon */}
            <FaPlayCircle
              className="video-icon"
              onClick={openModal}
              style={{ cursor: 'pointer', fontSize: 50, color: 'white' }}
            />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <ModalVideo
        channel="custom"
        isOpen={isOpen}
        url="../../assets/video/kaps.mp4"
        onClose={closeModal}
      />
  </div>


  {/* detail section start */}
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        {/* Clickable Images */}
        <img
        src={images[0]}
        className="d-block w-100"
        alt="..."
        style={{ height: 600, width: 50, cursor: 'pointer' }}
        onClick={openLightbox}
      />

{isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={goToPrevious}
          onMoveNextRequest={goToNext}
          enableZoom={false}  
          wrapperClassName="fullscreen-lightbox" 
        />
      )}
      </div>
      <div className="col-md-6">
        <div className="_product-detail-content">
          <p className="_p-name" style={{ fontSize: 40 }}>
          Kegeberew Agricultural Product Sourcing App
          </p>
          <div className="_p-price-box">
            <div className="p-list">
              <span>
                <img src="images/Stars.png" alt="" /> (3.5 stars) 10 reviews
              </span>
            </div>
          </div>
          <div className="_p-features" style={{ marginTop: 30 }}>
            <h6 style={{ fontSize: 20 }}>Description About this product:</h6>
            <p>
            Brings significant solution for our farmers and producers.
            </p>
          </div>
          
          <div className="_p-features">
            <h6 style={{ fontSize: 20 }}>Details</h6>
            <p>
            It enables direct connection between farmers and consumers without any third part intervention. The system ensures    flexible and real time and authentic product information captured from farmers and displayed on marketplace.  Farmers can use this platform to post their produces directly to wide range of consumers with their preferred price and quantity.  The system has a capability to detect the location and capture videos and images to make sure the products are legit before available on marketplace
            </p>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  {/* detail section end */}

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
    </div>
  )
}

export default Kaps
