import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="container">
          <div class="row vertical-column-gap-lg">
            <div class="col-12 col-md-6 col-xl-3">
              <div
                class="footer__widget"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div class="footer__logo">
                  <a href="index.html">
                    <img src="assets/images/logo1.jpeg.png" alt="Image" />
                  </a>
                </div>
                <div class="footer__widget-content">
                  <p>
                    Nirmana Infra is a forward-thinking real estate development
                    company dedicated to transforming the landscape with
                    innovative, sustainable, and high-quality infrastructure
                    projects.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-xl-2 offset-xl-1">
              <div
                class="footer__widget"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <div class="footer__widget-header">
                 
                  <h4 class="title-animation">Services</h4>
                </div>
                <div class="footer__widget-content">
                  <ul class="footer__widget-list">
                    <li>
                      <a href="about-us.html">
                        <i class="fa-solid fa-angle-right"></i> About Us
                      </a>
                    </li>
                    <li>
                      <a href="properties-list-view.html">
                        <i class="fa-solid fa-angle-right"></i>
                        Listing
                      </a>
                    </li>
                    <li>
                      <a href="our-services.html">
                        <i class="fa-solid fa-angle-right"></i> How It Works
                      </a>
                    </li>
                    <li>
                      <a href="our-services.html">
                        <i class="fa-solid fa-angle-right"></i> Our Services
                      </a>
                    </li>
                    <li>
                      <a href="blog-grid-view.html">
                        <i class="fa-solid fa-angle-right"></i> Our Blog
                      </a>
                    </li>
                    <li>
                      <a href="contact-us.html">
                        <i class="fa-solid fa-angle-right"></i> Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-xl-3">
              <div
                class="footer__widget"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <div class="footer__widget-header footer__widget-header-alt">
                  
                  <h4 class="title-animation">Top News</h4>
                </div>
                <div class="footer__widget-content">
                  <div class="footer__blog-single">
                    <div class="thumb">
                      <a href="blog-details.html">
                        <img
                          src="assets/images/blog/footer-one.png"
                          alt="Image"
                        />
                      </a>
                    </div>
                    <div class="content">
                      <h5>
                        <a href="blog-details.html">
                          The Added Value Social Worker
                        </a>
                      </h5>
                      <p>Aug 25, 2024</p>
                    </div>
                  </div>
                  <div class="footer__blog-single">
                    <div class="thumb">
                      <a href="blog-details.html">
                        <img
                          src="assets/images/blog/footer-two.png"
                          alt="Image"
                        />
                      </a>
                    </div>
                    <div class="content">
                      <h5>
                        <a href="blog-details.html">Ways to Increase Trust</a>
                      </h5>
                      <p>Aug 25, 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-xl-3">
              <div
                class="footer__widget"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                <div class="footer__widget-header footer__widget-header-alt">
                  
                  <h4 class="title-animation">Contact Now</h4>
                </div>
                <div class="footer__widget-content">
                  <ul class="footer__contact-list">
                    <li>
                      <a
                        href="https://www.google.com/maps/@12.9782702,77.7251723,16z?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                      >
                        <i class="fa-solid fa-location-dot"></i>Krishnarajapura,
                        Bangalore, Karnataka, 560036
                      </a>
                    </li>
                    <li>
                      <a href="tel:2305-587-3407">
                        <i class="fa-solid fa-phone-flip"></i>(+91)90xxxxxxx3
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@example.com">
                        <i class="fa-regular fa-envelope"></i>nirmanainfra@example.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__bottom">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-12 col-lg-6">
                <div class="footer__bottom-left">
                  <ul class="footer__bottom-list justify-content-center justify-content-lg-start">
                    <li>
                      <a href="terms-conditions.html">Terms Of Use</a>
                    </li>
                    <li>
                      <span>-----</span>
                    </li>
                    <li>
                      <a href="privacy-policy.html">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="footer__bottom-right text-center text-lg-end">
                  <p>
                    <span id="copyrightYear"></span> &copy; All copyright served
                    by{" "}
                    <a
                      href="https://themeforest.net/user/themecraze"
                      target="_blank"
                    >
                      ThemeCraze
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
