import React from 'react'

const Banner = () => {
  return (
    <div>
         <section class="banner">
            <div class="banner__slider swiper">
               <div class="swiper-wrapper">
                  <div class="swiper-slide">
                     <div class="banner__slider-single">
                        <div class="banner__slider-inner" data-background="assets/images/banner/banner-one.png" style={{ backgroundImage: `url('assets/images/banner/banner-one.png')` }}>
                        </div>
                        <div class="container">
                           <div class="row justify-content-end">
                              <div class="col-12 col-lg-10 col-xl-8">
                                 <div class="banner__slider-content">
                                    <span>Real Estate Agancy</span>
                                    <h1>Search and Find
                                       Your Luxury House
                                    </h1>
                                    <p>With a robust selection of popular properties on hand, as well as
                                       leading properties from real estate experts.
                                    </p>
                                    <div class="banner__slider-cta">
                                       <a href="our-services.html" class="btn--primary">Our Service</a>
                                       <a href="contact-us.html" class="btn--secondary">Learn More</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="swiper-slide">
                     <div class="banner__slider-single">
                        <div class="banner__slider-inner" data-background="assets/images/banner/banner-thumb.png">
                        </div>
                        <div class="container">
                           <div class="row justify-content-end">
                              <div class="col-12 col-lg-10 col-xl-8">
                                 <div class="banner__slider-content">
                                    <span>Real Estate Agancy</span>
                                    <h1>Search and Find
                                       Your Luxury House
                                    </h1>
                                    <p>With a robust selection of popular properties on hand, as well as
                                       leading properties from real estate experts.
                                    </p>
                                    <div class="banner__slider-cta">
                                       <a href="our-services.html" class="btn--primary">Our Service</a>
                                       <a href="contact-us.html" class="btn--secondary">Learn More</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="swiper-slide">
                     <div class="banner__slider-single">
                        <div class="banner__slider-inner" data-background="assets/images/banner/two.png"></div>
                        <div class="container">
                           <div class="row justify-content-end">
                              <div class="col-12 col-lg-10 col-xl-8">
                                 <div class="banner__slider-content">
                                    <span>Real Estate Agancy</span>
                                    <h1>Search and Find
                                       Your Luxury House
                                    </h1>
                                    <p>With a robust selection of popular properties on hand, as well as
                                       leading properties from real estate experts.
                                    </p>
                                    <div class="banner__slider-cta">
                                       <a href="our-services.html" class="btn--primary">Our Service</a>
                                       <a href="contact-us.html" class="btn--secondary">Learn More</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="slider-navigation d-none d-lg-flex">
                  <button type="button" aria-label="next slide" title="next slide" class="next-banner slider-btn">
                  <i class="fa-solid fa-angle-left"></i>
                  </button>
                  <button type="button" aria-label="prev slide" title="prev slide" class="prev-banner slider-btn">
                  <i class="fa-solid fa-angle-right"></i>
                  </button>
               </div>
            </div>
         </section>
    </div>
  )
}

export default Banner