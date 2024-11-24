import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header class="main-header">
        <div class="main-header__topbar d-none d-lg-block">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="main-header__topbar__content">
                  <div class="main-header__topbar__content-wrapper">
                    <ul class="main-header__topbar__list">
                      <li>
                        <a href="/">
                        <i class="fa-solid fa-location-dot"></i>Location
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Neilrao Towers, Whitefield, Bangalore.
                        </a>
                      </li>
                      <li>
                      <a href="/"><i class="fa-solid fa-phone"></i>+91-90xxxxxxx3</a>
                      </li>
                    </ul>
                    {/* <select
                      name="country"
                      class="main-header__topbar__select-country"
                    >
                       <option data-flag="fi-in">India</option> 
                      <option data-flag="fi-gb-eng">English</option>
                      <option data-flag="fi-us">Spanish</option>
                      <option data-flag="fi-cn">Chinese</option>
                      <option data-flag="fi-it">Italian</option>
                    </select> */}
                  </div>
                  <div class="social">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      aria-label="share us on facebook"
                      title="facebook"
                    >
                      <i class="flaticon-facebook"></i>
                    </a>
                    <a
                      href="https://www.twitter.com/"
                      target="_blank"
                      aria-label="share us on twitter"
                      title="twitter"
                    >
                      <i class="flaticon-twitter"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      aria-label="share us on instagram"
                      title="instagram"
                    >
                      <i class="flaticon-instagram"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      aria-label="share us on linkedin"
                      title="linkedin"
                    >
                      <i class="flaticon-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main-header__menu">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="main-header__menu-box">
                  <nav class="navbar p-0">
                    <div class="navbar-logo d-block d-lg-none">
                      <Link to='/'>
                        <img src="assets/images/logo1.jpeg.png" alt="Image" />
                      </Link>
                    </div>
                    <div class="navbar__menu d-none d-xl-block">
                      <ul class="navbar__list">
                        <li class="navbar__item navbar__item--has-children nav-fade">
                          <Link to="/">Home</Link>
                          {/* <ul class="navbar__sub-menu">
                                                        <li>
                                                            <a href="#">Home Page One</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Home Page Two</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Home Page Three</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Home Page Four</a>
                                                        </li>
                                                        <li class="navbar__item navbar__item--has-children">
                                                            <a href="#" aria-label="dropdown menu"
                                                                class="navbar__dropdown-label navbar__dropdown-label-sub">Header
                                                                Styles</a>
                                                            <ul class="navbar__sub-menu navbar__sub-menu__nested">
                                                                <li>
                                                                    <a href="#">Header Style One</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Header Style Two</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Header Style Three</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Header Style Four</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li class="navbar__item navbar__item--has-children">
                                                            <a href="#" aria-label="dropdown menu"
                                                                class="navbar__dropdown-label navbar__dropdown-label-sub">One
                                                                Page Styles</a>
                                                            <ul class="navbar__sub-menu navbar__sub-menu__nested">
                                                                <li>
                                                                    <a href="#">One Page Style One</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">One Page Style Two</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">One Page Style
                                                                        Three</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">One Page Style
                                                                        Four</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul> */}
                        </li>
                        <li class="navbar__item navbar__item--has-children nav-fade">
                          
                          <Link to="/Properties">Properties</Link>
                          {/* <ul class="navbar__sub-menu">
                            <li>
                              <a href="#">Properties List View</a>
                            </li>
                            <li>
                              <a href="#">Properties Grid View</a>
                            </li>
                            <li>
                              <a href="#">Property Details</a>
                            </li>
                          </ul> */}
                        </li>
                        <li class="navbar__item navbar__item--has-children nav-fade">
                          <Link to="/services">Services</Link>
                          {/* <ul class="navbar__sub-menu">
                            <li>
                              <a href="#">Our Team</a>
                            </li>
                            <li>
                              <a href="#">Team Details</a>
                            </li>
                          </ul> */}
                        </li>
                        <li class="navbar__item navbar__item--has-children nav-fade">
                          <Link to="/about">About Us</Link>
                          {/* <ul class="navbar__sub-menu">
                            <li>
                              <a href="#">About Us</a>
                            </li>
                            <li>
                              <a href="#">Our Services</a>
                            </li>
                            <li>
                              <a href="#">Sign In</a>
                            </li>
                            <li>
                              <a href="#">Create Account</a>
                            </li>
                            <li>
                              <a href="#">Coming Soon</a>
                            </li>
                            <li>
                              <a href="#">Error</a>
                            </li>
                          </ul> */}
                        </li>
                        <li class="navbar__item navbar__item--has-children nav-fade">
                          <Link to="/contactus">Contact us</Link>
                          
                        </li>
                        
                      </ul>
                    </div>
                    <div class="navbar__options">
                      <div class="navbar__mobile-options d-none d-xl-block">
                        
                      </div>
                      <button
                        class="open-offcanvas-nav d-flex d-xl-none"
                        aria-label="toggle mobile menu"
                        title="open offcanvas menu"
                      >
                        <span class="icon-bar top-bar"></span>
                        <span class="icon-bar middle-bar"></span>
                        <span class="icon-bar bottom-bar"></span>
                      </button>
                    </div>
                  </nav>
                  <div class="logo d-none d-lg-flex">
                    <Link to="/">
                      <img src="assets/images/logo1.jpeg.png" alt="Image" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ==== mobile menu start ==== --> */}
        <div class="mobile-menu d-block d-xl-none">
          <nav class="mobile-menu__wrapper">
            <div class="mobile-menu__header nav-fade">
              <div class="logo">
                {/* <a href="#" aria-label="home page" title="logo">
                  <img src="assets/images/logo-mobile.png" alt="Image" />
                </a> */}
                <Link to='/'><img src="assets/images/logo1.jpeg.png" alt="Image" /></Link>
              </div>
              <button aria-label="close mobile menu" class="close-mobile-menu">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div class="mobile-menu__list"></div>
            <div class="mobile-menu__social social nav-fade">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                aria-label="share us on facebook"
                title="facebook"
              >
                <i class="flaticon-facebook"></i>
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                aria-label="share us on twitter"
                title="twitter"
              >
                <i class="flaticon-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                aria-label="share us on instagram"
                title="instagram"
              >
                <i class="flaticon-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                aria-label="share us on linkedin"
                title="linkedin"
              >
                <i class="flaticon-linkedin"></i>
              </a>
            </div>
          </nav>
        </div>
        <div class="mobile-menu__backdrop"></div>
        {/* <!-- ==== / mobile menu end ==== --> */}
      </header>
    </div>
  );
};

export default Header;
