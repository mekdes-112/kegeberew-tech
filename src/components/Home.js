import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Shuffle from 'shufflejs';
// import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import './Testimonials.css';
import WOW from 'wow.js';
import 'animate.css';
import 'wow.js/css/libs/animate.css';
import 'wow.js/dist/wow';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


const Home = () => {

  const [ref, inView] = useInView({
    triggerOnce: true, // This will trigger the animation only once
  });

  useEffect(() => {
    // Initialize wow.js when the component mounts
    const wow = new WOW({
      boxClass: 'wow', // Class name for the element which needs to be animated
      animateClass: 'animated', // Class name for animation
      offset: 0, // Distance to the element when triggering the animation (default is 0)
      mobile: false, // Trigger animations on mobile devices (true is default)
      live: true, // Act on asynchronously loaded content (default is true)
    });
    wow.init();
  }, []);

  // const options = {
  //   items: 3,
  //   loop: true,
  //   margin: 10,
  //   nav: true,
  // };

  // const testimonialsData = [
  //   {
  //     clientName: 'Client 1',
  //     profession: 'Profession 1',
  //     testimonial: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
  //     imageUrl: '../../assets/img/testimonial-1.jpg',
  //   },

  //   {
  //     clientName: 'Client 2',
  //     profession: 'Profession 2',
  //     testimonial: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
  //     imageUrl: '../../assets/img/testimonial-4.jpg',
  //   },
  //   {
  //     clientName: 'Client 3',
  //     profession: 'Profession 3',
  //     testimonial: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
  //     imageUrl: '../../assets/img/testimonial-2.jpg',
  //   },
  //   {
  //     clientName: 'Client 4',
  //     profession: 'Profession 4',
  //     testimonial: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
  //     imageUrl: '../../assets/img/testimonial-3.jpg',
  //   },
  //   // Add more testimonials as needed
  // ];

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
        slidesToShow: 6,
        slidesToScroll: 6,
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
    useEffect(() => {
        const handleScroll = () => {
          const aboutSection = document.getElementById('about-section');
    
          if (!aboutSection) {
            console.error("Element with ID 'about-section' not found.");
            return;
          }
    
          const scrollPosition = window.scrollY;
          const sectionOffset = aboutSection.offsetTop;
    
          if (scrollPosition > sectionOffset - window.innerHeight / 2) {
            aboutSection.classList.add('visible');
          } else {
            aboutSection.classList.remove('visible');
          }
        };
    
        // Add the event listener when the component mounts
        window.addEventListener('scroll', handleScroll);
    
        // Remove the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); // Empty dependency array ensures the effect runs once after mount/unmount

  
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
            9878
          </small>
          <small className="me-3 text-white">
            <NavLink to="#">
              <i className="fas fa-envelope me-2 text-secondary" />
            </NavLink>
            info@kegeberew.com, info@chinatoafrika.com
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
      <NavLink to="/" className="navbar-brand p-0">
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
          <NavLink to="/" className="nav-item nav-link active">
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
      id="header-carousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
      

      <div className="carousel-item active">
          <img className="w-100" src="../../assets/img/oneon.png" alt="" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <div className="row">
          <div className="col-md-6 p-3">
      <h5 className=" text-uppercase  mb-3 animated slideInDown" 
      style={{ marginTop: '90px' }}>
          Creative &amp; <span style={{ color: '#d7a022' }}>Innovative</span>
      </h5>
        <h1 className="display-1 mb-md-4 animated zoomIn">
        <span>Creative</span> &amp; <span style={{ color: '#d7a022' }}>Innovative</span> <span>Digital</span> <span style={{ color: '#d7a022' }}>Solution</span>
        </h1>
        <NavLink
          to="/contact"
          className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
        >
          Contact Us
        </NavLink>
        
      </div>
      <div className="col-md-6 p-3">
       
      </div>

      
    </div>
           
          </div>
        </div>
      <div className="carousel-item">
          <img className="w-100" src="../../assets/img/onetwo.png" alt="" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <div className="row">
     
      <div className="col-md-6 p-3">
        
      </div>
      <div className="col-md-6 p-3">
      <h5 className=" text-uppercase mb-3 animated slideInDown" 
      style={{ marginTop: '90px' }}>
          Creative &amp; <span style={{ color: '#d7a022' }}>Innovative</span>
      </h5>
        <h1 className="display-1 mb-md-4 animated zoomIn">
        <span >Creative</span> &amp; <span style={{ color: '#d7a022' }}>Innovative</span> <span >Digital</span> <span style={{ color: '#d7a022' }}>Solution</span>
        </h1>
        <NavLink
          to="/contact"
          className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
        >
          Contact Us
        </NavLink>
        
      </div>
    </div>
           
          </div>
        </div>
        
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  {/* Navbar & Carousel End */}

  {/* Full Screen Search Start */}
  <div className="modal fade" id="searchModal" tabIndex={-1}>
    <div className="modal-dialog modal-fullscreen">
      <div
        className="modal-content"
        style={{ background: "rgba(9, 30, 62, .7)" }}
      >
        <div className="modal-header border-0">
          <button
            type="button"
            className="btn bg-white btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body d-flex align-items-center justify-content-center">
          <div className="input-group" style={{ maxWidth: 600 }}>
            <input
              type="text"
              className="form-control bg-transparent border-primary p-3"
              placeholder="Type search keyword"
            />
            <button className="btn btn-primary px-4">
              <i className="bi bi-search" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Full Screen Search End */}

  {/* Facts Start */}
  <div ref={ref} className="">
    <div className="container py-5 pt-lg-0">
      <div className="row gx-0">
        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
          <div
            className=" shadow d-flex align-items-center justify-content-center p-4"
            style={{ height: 150 ,backgroundColor: '#d7a022'}}
          >
            <div
              className="bg-white d-flex align-items-center justify-content-center rounded mb-2"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-users text-primary" />
            </div>
            <div className="ps-4">
              <h5 className="text-white mb-0">Happy Clients</h5>
              <h1 className="text-white mb-0">
              {inView && <CountUp end={12} duration={2} />}
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
              className=" d-flex align-items-center justify-content-center rounded mb-2"
              style={{ width: 60, height: 60,backgroundColor: '#d7a022' }}
            >
              <i className="fa fa-check text-white" />
            </div>
            <div className="ps-4">
              <h5 className=" mb-0" style={{ color: '#d7a022' }}>Projects Done</h5>
              <h1 className="mb-0" data-toggle="counter-up">
              {inView && <CountUp end={12} duration={2} />}
              </h1>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
          <div
            className=" shadow d-flex align-items-center justify-content-center p-4"
            style={{ height: 150,backgroundColor: '#d7a022' }}
          >
            <div
              className="bg-white d-flex align-items-center justify-content-center rounded mb-2"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-award text-primary" />
            </div>
            <div className="ps-4">
              <h5 className="text-white mb-0">Services</h5>
              <h1 className="text-white mb-0" data-toggle="counter-up">
               {inView && <CountUp end={9} duration={2} />} 
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Facts Start */}

  {/* About Start */}
  <div className="container-xxl py-5" id='about-section'>
    <div className="container">
      <div className="row g-5 align-items-center">
      <div className="col-lg-6">
            <div className="row g-3">
            <div className="" style={{ minHeight: 500 }}>
          <div className="position-relative h-100">
            <img
              className="position-absolute w-100 h-100 rounded wow zoomIn"
              data-wow-delay="0.9s"
              src="../../assets/img/earth5.png"
              alt=''
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
            
              
              
            </div>
          </div>
       


        <div className="col-lg-6">
          <h5 className="section-title ff-secondary text-start  fw-normal"
           style={{ color: '#d7a022' }}>
            About Us
          </h5>
          <h1 className="mb-4">Welcome to KTS</h1>
          <p className="mb-4">
         Kegeberew Technology Solutions (KTS) is to revolutionize the technological landscape in Ethiopia, Africa, and around the globe. We strive to provide innovative software, AI, and IT solutions that empower businesses and individuals to thrive in the digital era. 
          </p>
          <p className="mb-4">
          Our goal is to drive progress, efficiency, and sustainable growth through cutting-edge technologies.
          </p>
          <div className="row g-4 mb-4">
            <div className="col-sm-6">
              <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                <h1
                  className="flex-shrink-0 display-5  mb-0"
                  data-toggle="counter-up"
                  style={{ color: '#d7a022' }}
                >
                  2
                </h1>
                <p>+</p>
                <div className="ps-4">
                  <p className="mb-0">Years of</p>
                  <h6 className="text-uppercase mb-0">Experience</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                <h1
                  className="flex-shrink-0 display-5  mb-0"
                  data-toggle="counter-up"
                  style={{ color: '#d7a022' }}
                >
                  100
                </h1>
                <p>+</p>
                <div className="ps-4">
                  <p className="mb-0">Hard Working</p>
                  <h6 className="text-uppercase mb-0">Team Members</h6>
                </div>
              </div>
            </div>
          </div>
          <NavLink className="btn btn-primary py-3 px-5 mt-2" to="/about">
            Read More
          </NavLink>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}

  {/* Vendor Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5 mb-5">
      <div className="bg-white">
        <div className="">
        <Slider {...settings}>
          <div>
          <img src="../../assets/img/one.png" alt="" />
          </div>
          <div>
          <img src="../../assets/img/six.png" alt="" />
          </div>
          <div>
          <img src="../../assets/img/two.png" alt="" />
          </div>
          <div>
          <img src="../../assets/img/three.png" alt="" />
          </div>
          <div>
          <img src="../../assets/img/four.png" alt="" />
          </div>
          <div>
          <img src="../../assets/img/five.png" alt="" />
          </div>
          
          <div>
          <img src="../../assets/img/seven.png" alt="" />
          </div>
          <div>
          <img src="../../assets/img/eight.png" alt="" />
          </div>
          <div>
          <img src="../../assets/img/nine.png" alt="" />
          </div>
        </Slider>
        </div>
      </div>
    </div>
  </div>
  {/* Vendor End */}

  <>
  {/* Features Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div
        className="section-title text-center position-relative pb-3 mb-5 mx-auto"
        style={{ maxWidth: 600 }}
      >
        <h5 className="section-title ff-secondary fw-normal" style={{ color: '#d7a022' }}>Why Choose Us</h5>
        <h1 className="mb-0">
          We Are Here to Grow Your Business Exponentially
        </h1>
      </div>
      <div className="row g-5">
        <div className="col-lg-4">
          <div className="row g-5">
            <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
              <div
                className="rounded d-flex align-items-center justify-content-center mb-3"
                style={{ width: 60, height: 60,backgroundColor: '#d7a022' }}
              >
                <i className="fa fa-cubes text-white" />
              </div>
              <h4>Business intelligence</h4>
              <p className="mb-0">
              We pride ourselves on being the top choice in the industry.
              </p>
            </div>
            <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
              <div
                className="rounded d-flex align-items-center justify-content-center mb-3"
                style={{ width: 60, height: 60,backgroundColor: '#d7a022' }}
              >
                <i className="fa fa-award text-white" />
              </div>
              <h4>Creative & Innoviative</h4>
              <p className="mb-0">
              Our dedication to excellence has been recognized with numerous prestigious awards.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4  wow zoomIn"
          data-wow-delay="0.9s"
          style={{ minHeight: 350 }}
        >
          <div className="position-relative h-100">
            <img
              className="position-absolute w-100 h-100 rounded wow zoomIn"
              data-wow-delay="0.1s"
              src="../../assets/img/why.jpg"
              style={{ objectFit: "cover" }}
              alt=''
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row g-5">
            <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
              <div
                className="rounded d-flex align-items-center justify-content-center mb-3"
                style={{ width: 60, height: 60,backgroundColor: '#d7a022' }}
              >
                <i className="fa fa-users-cog text-white" />
              </div>
              <h4>Professional Staff</h4>
              <p className="mb-0">
              Our team of professionals is the backbone of our success.
              </p>
            </div>
            <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
              <div
                className="rounded d-flex align-items-center justify-content-center mb-3"
                style={{ width: 60, height: 60,backgroundColor: '#d7a022' }}
              >
                <i className="fa fa-phone-alt text-white" />
              </div>
              <h4>24/7 Support</h4>
              <p className="mb-0">
              We understand the importance of being there for our clients whenever they need us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Features Start */}
</>

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

      <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
          <div className="services-item bg-light">
            <div className="p-4 text-center services-content">
              <div className="services-content-icon">
              <img src="../../assets/img/e-commerce.svg" alt="Mobile Screen Button" className="img-fluid mb-4" />
                {/* <i className="fa fa-file-code fa-7x mb-4 text-primary" /> */}
                <h4 className="mb-3">E-commerce</h4>
                <p className="mb-4">
                Welcome to our online marketplace, where convenience meets quality, and shopping becomes a delightful experience  </p>
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
              <img src="../../assets/img/credit.svg" alt="Mobile Screen Button" className="img-fluid mb-4" />
                {/* <i className="fa fa-file-code fa-7x mb-4 text-primary" /> */}
                <h4 className="mb-3">K.C.C.M</h4>
                <p className="mb-4">
                Where we're dedicated to helping you take control of your financial future. At KCCM, we understand the importance of managing credit wisely and responsibly</p>
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
              <img src="../../assets/img/intellegence.svg" alt="Mobile Screen Button" className="img-fluid mb-4" />
                {/* <i className="fa fa-file-code fa-7x mb-4 text-primary" /> */}
                <h4 className="mb-3">Business intelligence</h4>
                <p className="mb-4">
                Welcome to our Business Intelligence section, where data-driven decision-making meets actionable insights. At Kegeberew IT soln, we understand the importance of harnessing the power of data to drive business success.</p>
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
              <img src="../../assets/img/fintech.svg" alt="Mobile Screen Button" className="img-fluid mb-4" />
                {/* <i className="fa fa-file-code fa-7x mb-4 text-primary" /> */}
                <h4 className="mb-3">Fintech</h4>
                <p className="mb-4">
                Welcome to our Payment System section, where convenience and security converge to streamline your payment processes.</p>
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
              <img src="../../assets/img/education.svg" alt="Mobile Screen Button" className="img-fluid mb-4" />
                {/* <i className="fa fa-file-code fa-7x mb-4 text-primary" /> */}
                <h4 className="mb-3">Kegeberew E-learning</h4>
                <p className="mb-4">
                At Kegeberew university, we are dedicated to fostering academic excellence, personal growth and community engagement </p>
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
              <img src="../../assets/img/bpo.svg" alt="Mobile Screen Button" className="img-fluid mb-4" />
                {/* <i className="fa fa-file-code fa-7x mb-4 text-primary" /> */}
                <h4 className="mb-3">Business Process Outsource</h4>
                <p className="mb-4">
                At kegebrew IT solution, we specialize in providing high-quality business process outsourcing solutions tailored to meet the diverse needs of our clients.  </p>
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
              <img src="../../assets/img/blockchain.svg" alt="Mobile Screen Button" className="img-fluid mb-4" />
                {/* <i className="fa fa-file-code fa-7x mb-4 text-primary" /> */}
                <h4 className="mb-3">Block Chain</h4>
                <p className="mb-4">
                We're at the forefront of the blockchain revolution, leveraging this transformative technology to drive innovation and create new opportunities for businesses across industries.</p>
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
              <img src="../../assets/img/crowd-funding.svg" alt="Mobile Screen Button" className="img-fluid mb-4" />
                {/* <i className="fa fa-file-code fa-7x mb-4 text-primary" /> */}
                <h4 className="mb-3">Crowd Funding</h4>
                <p className="mb-4">
                We're redefining the way entrepreneurs, creators, and innovators bring their ideas to life through crowdfunding.</p>
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
              <img src="../../assets/img/kaps.svg" alt="Mobile Screen Button" className="img-fluid mb-4" />
                {/* <i className="fa fa-file-code fa-7x mb-4 text-primary" /> */}
                <h4 className="mb-3">K.A.P.S</h4>
                <p className="mb-4">
                We specialize in agricultural product sourcing, connecting buyers with high-quality products from trusted suppliers around the globe. </p>
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
              <img src="../../assets/img/AI.svg" alt="Mobile Screen Button" className="img-fluid mb-4" />
                {/* <i className="fa fa-file-code fa-7x mb-4 text-primary" /> */}
                <h4 className="mb-3">AI & Machine Learning</h4>
                <p className="mb-4">
                We are pioneering the future of artificial intelligence (AI) and machine learning (ML), harnessing the power of these transformative technologies to drive innovation, solve complex challenges, and unlock new opportunities for businesses across industries </p>
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
              <img src="../../assets/img/datacenter.svg" alt="Mobile Screen Button" className="img-fluid mb-4" />
                {/* <i className="fa fa-file-code fa-7x mb-4 text-primary" /> */}
                <h4 className="mb-3">Data Center & Server Management</h4>
                <p className="mb-4">
                We specialize in providing comprehensive data center and service management solutions designed to meet the evolving needs of modern businesses.</p>
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
              <img src="../../assets/img/erp.svg" alt="Mobile Screen Button" className="img-fluid mb-4" />
                {/* <i className="fa fa-file-code fa-7x mb-4 text-primary" /> */}
                <h4 className="mb-3">ERP</h4>
                <p className="mb-4">
                We specialize in providing comprehensive Enterprise Resource Planning (ERP) solutions designed to streamline your business processes, improve efficiency, and drive growth. </p>
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
              <img src="../../assets/img/medical.svg" alt="Mobile Screen Button" className="img-fluid mb-4" />
                {/* <i className="fa fa-file-code fa-7x mb-4 text-primary" /> */}
                <h4 className="mb-3">Medical Management System</h4>
                <p className="mb-4">
                We specialize in providing comprehensive medical management systems designed to streamline healthcare operations, improve patient care, and enhance overall efficiency</p>
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
  {/* projects start */}
  <section id="project-area" className="project-area solid-bg">
    <div className="container">
      <div className="row text-center">
        <div
          className="text-center mx-auto pb-5 wow fadeIn"
          data-wow-delay=".3s"
          style={{ maxWidth: 600 }}
        >
          <h5 className="" style={{ color: '#d7a022' }}>Our Projects</h5>
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
              data-groups='["commercial"]'
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
                    <NavLink className="read-more-btn" to="/kaps">Read More</NavLink>
                  </div>
                </div>
              </div>
            </div>
            {/* shuffle item 1 end */}
            <div
              className="col-lg-4 col-md-6 shuffle-item"
              data-groups='["commercial"]'
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
                    <NavLink className="read-more-btn" to="https://kegeberewuniversity.com/">Read More</NavLink>
                  </div>
                </div>
              </div>
            </div>
            {/* shuffle item 2 end */}
            <div
              className="col-lg-4 col-md-6 shuffle-item"
              data-groups='["commercial"]'
            >
              <div className="project-img-container">
                <NavLink
                  className="gallery-popup"
                  to="../../assets/images/projects/project.jpg"
                  aria-label="project-img"
                >
                  <img
                    className="img-fluid"
                    src="../../assets/images/projects/project.png"
                    alt="project-img"
                  />
                </NavLink>
                <div className="project-item-info">
                  <div className="project-item-info-content">
                    <h3 className="project-item-title">
                      <NavLink to="projects-single.html">Purpose Black Eth.</NavLink>
                    </h3>
                    <NavLink className="read-more-btn" to="https://purposeblacketh.com/">Read More</NavLink>
                  </div>
                </div>
              </div>
            </div>
            {/* shuffle item 3 end */}
            <div
              className="col-lg-4 col-md-6 shuffle-item"
              data-groups='["commercial"]'
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
                      <NavLink to="projects-single.html">Kegeberew.com</NavLink>
                    </h3>
                    <NavLink className="read-more-btn" to="https://kegeberew.com/">Read More</NavLink>
                  </div>
                </div>
              </div>
            </div>
            {/* shuffle item 4 end */}
            <div
              className="col-lg-4 col-md-6 shuffle-item"
              data-groups='["commercial"]'
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
                      <NavLink to="projects-single.html">Kegeberew TV</NavLink>
                    </h3>
                    <NavLink className="read-more-btn" to="https://kegeberewtv.com/">Read More</NavLink>
                  </div>
                </div>
              </div>
            </div>
            {/* shuffle item 5 end */}
            <div
              className="col-lg-4 col-md-6 shuffle-item"
              data-groups='["commercial"]'
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
                      <NavLink to="projects-single.html">Agri-Innoviation</NavLink>
                    </h3>
                    <button className="read-more-btn" to="https://agrinnovation.net/">Read More</button>
                  </div>
                </div>
              </div>
            </div>
            {/* shuffle item 5 end */}
            <div
              className="col-lg-4 col-md-6 shuffle-item"
              data-groups='["commercial"]'
            >
              <div className="project-img-container">
                <NavLink
                  className="gallery-popup"
                  to="../../assets/images/projects/kccm.png"
                  aria-label="project-img"
                >
                  <img
                    className="img-fluid"
                    src="../../assets/images/projects/kccm.png"
                    alt="project-img"
                  />
                </NavLink>
                <div className="project-item-info">
                  <div className="project-item-info-content">
                    <h3 className="project-item-title">
                      <NavLink to="projects-single.html">Kegeberew Credit</NavLink>
                    </h3>
                    <NavLink className="read-more-btn" to="/kccsm">Read More</NavLink>
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


  {/* Banner Start */}
  <section id="banner" className="banner">
    <div className="container" data-aos="fade-up">
      <div className="row text-center">
        <div
          className="text-center mx-auto pb-5 fadeIn"
          data-wow-delay=".3s"
          style={{ maxWidth: 600 }}
        >
          <h5 className="" style={{ color: "white" }}>
            Our Management
          </h5>
         
        </div>
      </div>

      <div className="row g-5">
  <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
    <div className="team-item bg-light rounded overflow-hidden">
      <div className="team-img position-relative overflow-hidden">
        <img className="img-fluid w-100" src="../../assets/img/doctor.png" alt="" />
        <div className="team-social">
          
        
        
         
        </div>
      </div>
      <div className="text-center py-4">
        <h4 className="text-primary">Dr. Fisseha Eshetu</h4>
        <p className="text-uppercase m-0">Purposeblack C.E.O</p>
      </div>
    </div>
  </div>
  <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
    <div className="team-item bg-light rounded overflow-hidden">
      <div className="team-img position-relative overflow-hidden">
        <img className="img-fluid w-100" src="../../assets/img/amanuel.png" alt="" />
        <div className="team-social">
        
        </div>
      </div>
      <div className="text-center py-4">
        <h4 className="text-primary">Mr.Amanuel Melese</h4>
        <p className="text-uppercase m-0">KTS General Manager</p>
      </div>
    </div>
  </div>
  <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
    <div className="team-item bg-light rounded overflow-hidden">
      <div className="team-img position-relative overflow-hidden">
        <img className="img-fluid w-100" src="../../assets/img/amani.png" alt="" />
        <div className="team-social">
         
        </div>
      </div>
      <div className="text-center py-4">
        <h4 className="text-primary">Mr.Amanuel Chala</h4>
        <p className="text-uppercase m-0">KTS Dpt Manager</p>
      </div>
    </div>
  </div>
</div>

     
      
      {/* <div
        className="owl-carousel testimonial-carousel wow fadeInUp"
        data-wow-delay="0.6s"
      >
        <div className="testimonial-item bg-light my-4">
          <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
            <img
              className="img-fluid rounded"
              src="../../assets/img/testimonial-1.jpg"
              alt=""
              style={{ width: 60, height: 60 }}
            />
            <div className="ps-4">
              <h4 className="text-primary mb-1">Client Name</h4>
              <small className="text-uppercase">Profession</small>
            </div>
          </div>
          <div className="pt-4 pb-5 px-5">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
            amet eirmod eos labore diam
          </div>
        </div>
        <div className="testimonial-item bg-light my-4">
          <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
            <img
              className="img-fluid rounded"
              src="../../assets/img/testimonial-2.jpg"
              alt=""
              style={{ width: 60, height: 60 }}
            />
            <div className="ps-4">
              <h4 className="text-primary mb-1">Client Name</h4>
              <small className="text-uppercase">Profession</small>
            </div>
          </div>
          <div className="pt-4 pb-5 px-5">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
            amet eirmod eos labore diam
          </div>
        </div>
        <div className="testimonial-item bg-light my-4">
          <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
            <img
              className="img-fluid rounded"
              src="../../assets/img/testimonial-3.jpg"
              alt=""
              style={{ width: 60, height: 60 }}
            />
            <div className="ps-4">
              <h4 className="text-primary mb-1">Client Name</h4>
              <small className="text-uppercase">Profession</small>
            </div>
          </div>
          <div className="pt-4 pb-5 px-5">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
            amet eirmod eos labore diam
          </div>
        </div>
        <div className="testimonial-item bg-light my-4">
          <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
            <img
              className="img-fluid rounded"
              src="../../assets/img/testimonial-4.jpg"
              alt=""
              style={{ width: 60, height: 60 }}
            />
            <div className="ps-4">
              <h4 className="text-primary mb-1">Client Name</h4>
              <small className="text-uppercase">Profession</small>
            </div>
          </div>
          <div className="pt-4 pb-5 px-5">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
            amet eirmod eos labore diam
          </div>
        </div>
      </div> */}
    </div>
  </section>
  {/* Banner End */}
  {/* FAQs Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="row text-center">
        <div
          className="text-center mx-auto pb-5 wow fadeIn"
          data-wow-delay=".3s"
          style={{ maxWidth: 600 }}
        >
          <h5 className="" style={{ color: '#d7a022' }}>FAQ's</h5>
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
                   How secure are your IT solutions?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionFAQ1"
              >
                <div className="accordion-body">
                We employ robust security measures, including encryption, firewalls, and regular vulnerability assessments, to ensure the confidentiality and integrity of your data. Our team of experts follows industry best practices to safeguard your information and protect against cyber threats.
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
                  Can you integrate your IT solutions with our existing systems?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionFAQ1"
              >
                <div className="accordion-body">
                Absolutely! Our IT solutions are designed to seamlessly integrate with your current systems and infrastructure. Whether you use specific software applications, databases, or hardware, our team will work closely with you to ensure smooth integration and minimal disruption to your operations.
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
                 What kind of support do you provide for your IT solutions?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionFAQ1"
              >
                <div className="accordion-body">
                We offer comprehensive support for our IT solutions. Our dedicated support team is available to assist you with any technical issues, answer your questions, and provide guidance. We provide timely updates, regular maintenance, and ongoing monitoring to ensure that your IT solutions continue to perform optimally.
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
                  How can we get started with your IT solutions?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionFAQ1"
              >
                <div className="accordion-body">
                Getting started is easy! Simply reach out to our team through our website or contact us directly. We'll schedule a consultation to understand your specific needs and goals. From there, we'll develop a tailored plan and guide you through the implementation process, ensuring a seamless transition to our IT solutions.
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
                 What technologies do you use for web design and development?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionFAQ2"
              >
                <div className="accordion-body">
                We utilize a wide range of technologies including ….., and popular frameworks like React and Angular. Our team stays up-to-date with the latest trends to deliver modern, responsive, and user-friendly websites.
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
                  Can you develop mobile apps for both iOS and Android platforms?
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#accordionFAQ2"
              >
                <div className="accordion-body">
                Absolutely! We have expertise in developing mobile apps for both iOS and Android platforms. Whether you need a native app or a cross-platform solution, our team can create a customized mobile app that meets your specific requirements.
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
                  How can cloud computing benefit my business?
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                aria-labelledby="headingSeven"
                data-bs-parent="#accordionFAQ2"
              >
                <div className="accordion-body">
                Cloud computing offers numerous benefits such as scalability, flexibility, cost-efficiency, and enhanced collaboration. It allows you to access your data and applications from anywhere, at any time, while ensuring high security and reliability.
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
                  How can data analytics help my business make better decisions?

                </button>
              </h2>
              <div
                id="collapseEight"
                className="accordion-collapse collapse"
                aria-labelledby="headingEight"
                data-bs-parent="#accordionFAQ2"
              >
                <div className="accordion-body">
                Data analytics enables you to gain valuable insights from your data, identify patterns, and make data-driven decisions. By analyzing large datasets, you can uncover trends, understand customer behavior, optimize processes, and drive business growth.
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
              <h5 className="" style={{ color: '#d7a022' }}>Contact Us</h5>
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
              <p>Addis Ababa, Ethiopia</p>
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
              <p>info@kegeberew.com</p> or
              <p>info@chinatoafrika.com</p>
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
              <p>(+251) 946-545-454</p> or
              <p>9858</p>
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

export default Home
