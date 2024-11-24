import React from 'react'

const Counter = () => {
  return (
    <div>
        <section class="counter" data-background="assets/images/background/counter-bg.png">
            <div class="container">
               <div class="row justify-content-center">
                  <div class="col-12 col-xl-5">
                     <div class="section__header-light text-center">
                        <span>Properties No</span>
                        <h2 class="title-animation">Funfacts Real Estate</h2>
                        {/* <div class="icon-thumb justify-content-center">
                           <div class="icon-thumb-single">
                              <span></span>
                              <span></span>
                           </div>
                           <img src="assets/images/sub-icon-light.png" alt="Image"/>
                           <div class="icon-thumb-single">
                              <span></span>
                              <span></span>
                           </div>
                        </div> */}
                     </div>
                  </div>
               </div>
               <div class="row vertical-column-gap-lg">
                  <div class="col-12 col-md-6 col-xl-3">
                     <div class="counter__single" data-aos="fade-up" data-aos-duration="1200">
                        <div class="thumb">
                           <i class="flaticon-town"></i>
                        </div>
                        <div class="content">
                           <h2><span class="odometer" data-odometer-final="20500"></span><span>+</span></h2>
                           <p>Completed Property</p>
                        </div>
                     </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-3">
                     <div class="counter__single counter__single-active" data-aos="fade-up" data-aos-duration="1200"
                        data-aos-delay="200">
                        <div class="thumb">
                           <i class="flaticon-house-for-sale"></i>
                        </div>
                        <div class="content">
                           <h2><span class="odometer" data-odometer-final="7600"></span><span>+</span></h2>
                           <p>Property Sales</p>
                        </div>
                     </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-3">
                     <div class="counter__single" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                        <div class="thumb">
                           <i class="flaticon-house-1"></i>
                        </div>
                        <div class="content">
                           <h2><span class="odometer" data-odometer-final="12300"></span><span>+</span></h2>
                           <p>Apartment Rent</p>
                        </div>
                     </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-3">
                     <div class="counter__single" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">
                        <div class="thumb">
                           <i class="flaticon-customer-satisfaction"></i>
                        </div>
                        <div class="content">
                           <h2><span class="odometer" data-odometer-final="15200"></span><span>+</span></h2>
                           <p>Happy Clients</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    </div>
  )
}

export default Counter