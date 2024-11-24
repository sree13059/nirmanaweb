import React from 'react'

const LatestBlog = () => {
  return (
    <div>
        <section class="blog" data-background="assets/images/blog/blog-bg.png">
            <div class="container">
               <div class="row justify-content-center">
                  <div class="col-12 col-xl-5">
                     <div class="section__header text-center">
                        <span>Our Latest Blog</span>
                        <h2 class="title-animation">Latest News & Stories</h2>
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
               <div class="row vertical-column-gap">
                  <div class="col-12 col-md-6 col-xl-4">
                     <div class="blog__single" data-aos="fade-up" data-aos-duration="1200">
                        <div class="thumb">
                           <a href="blog-details.html">
                           <img src="assets/images/blog/one.png" alt="Image"/>
                           </a>
                        </div>
                        <div class="content">
                           <div class="blog-meta">
                              <p><i class="flaticon-person"></i>Robert Fox</p>
                              <p><i class="flaticon-calendar"></i>22 / 08 / 2024</p>
                           </div>
                           <h4><a href="blog-details.html">Including Animation in
                              Your Design System</a>
                           </h4>
                           <a href="blog-details.html" class="cta">Read More</a>
                        </div>
                     </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-4">
                     <div class="blog__single" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                        <div class="thumb">
                           <a href="blog-details.html">
                           <img src="assets/images/blog/two.png" alt="Image"/>
                           </a>
                        </div>
                        <div class="content">
                           <div class="blog-meta">
                              <p><i class="flaticon-person"></i>Robert Fox</p>
                              <p><i class="flaticon-calendar"></i>22 / 08 / 2024</p>
                           </div>
                           <h4><a href="blog-details.html">Some Easy Way To Buy
                              A Small Apartment</a>
                           </h4>
                           <a href="blog-details.html" class="cta">Read More</a>
                        </div>
                     </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-4">
                     <div class="blog__single" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                        <div class="thumb">
                           <a href="blog-details.html">
                           <img src="assets/images/blog/three.png" alt="Image"/>
                           </a>
                        </div>
                        <div class="content">
                           <div class="blog-meta">
                              <p><i class="flaticon-person"></i>Robert Fox</p>
                              <p><i class="flaticon-calendar"></i>22 / 08 / 2024</p>
                           </div>
                           <h4><a href="blog-details.html">Modern Apartment
                              Adjacent to CEO Park</a>
                           </h4>
                           <a href="blog-details.html" class="cta">Read More</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    </div>
  )
}

export default LatestBlog