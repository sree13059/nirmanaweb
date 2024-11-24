import React from 'react'

const OurService = () => {
  return (
    <div>
        <section class="service" data-background="assets/images/background/service-bg.png">
            <div class="container">
               <div class="row justify-content-center">
                  <div class="col-12 col-xl-5">
                     <div class="section__header text-center">
                        <span>Our Service</span>
                        <h2 class="title-animation">Our Main Focus Now</h2>
                        {/* <div class="icon-thumb justify-content-center">
                           <div class="icon-thumb-single">
                              <span></span>
                              <span></span>
                           </div>
                           <img src="assets/images/sub-icon.png" alt="Image" class="filter-img"/>
                           <div class="icon-thumb-single">
                              <span></span>
                              <span></span>
                           </div>
                        </div> */}
                     </div>
                  </div>
               </div>
               <div class="row vertical-column-gap-sm justify-content-center">
                  <div class="col-12 col-lg-4 col-xl-4">
                     <div class="service__single" data-aos="fade-up" data-aos-duration="1200">
                        <div class="thumb">
                           <i class="flaticon-buy-home"></i>
                        </div>
                        <div class="content">
                           <h4><a href="properties-grid-view.html">Buy a Home</a></h4>
                           <p>over 1 million+ homes for sale available on
                              the website, we can match you with a house
                              you will want to call home.
                           </p>
                           <div class="cta">
                              <a href="properties-grid-view.html" class="btn--primary">Find Home</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-12 col-lg-4 col-xl-4 order-3 order-lg-2">
                     <div class="service__single service__single-active" data-aos="fade-up" data-aos-duration="1200"
                        data-aos-delay="200">
                        <div class="thumb">
                           <i class="flaticon-rent"></i>
                        </div>
                        <div class="content">
                           <h4><a href="properties-grid-view.html">Rent a Home</a></h4>
                           <p>over 1 million+ homes for sale available on
                              the website, we can match you with a house
                              you will want to call home.
                           </p>
                           <div class="cta">
                              <a href="properties-grid-view.html" class="btn--primary">Find Home</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-12 col-lg-4 col-xl-4 order-2 order-lg-3">
                     <div class="service__single" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                        <div class="thumb">
                           <i class="flaticon-deal"></i>
                        </div>
                        <div class="content">
                           <h4><a href="properties-grid-view.html">Sell a Home</a></h4>
                           <p>over 1 million+ homes for sale available on
                              the website, we can match you with a house
                              you will want to call home.
                           </p>
                           <div class="cta">
                              <a href="properties-grid-view.html" class="btn--primary">Find Home</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    </div>
  )
}

export default OurService