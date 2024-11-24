import React from 'react'

const Property = () => {
  return (
    <div>
        <section class="properties properties-grid-slider">
            <div class="container">
               <div class="row justify-content-center">
                  <div class="col-12 col-xl-5">
                     <div class="section__header text-center">
                        <span>Our Properties</span>
                        <h2 class="title-animation">Our Featured Properties</h2>
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
               <div class="row">
                  <div class="col-12">
                     <div class="properties-wrapper">
                        <div class="properties-slider swiper">
                           <div class="swiper-wrapper">
                              <div class="swiper-slide">
                                 <div class="properites__single-item">
                                    <div class="thumb">
                                       <a href="property-details.html">
                                       <img src="assets/images/thumb/properties/one.png" alt="Image"/>
                                       </a>
                                       <div class="tag">
                                          <span class="feature-tag">Feature</span>
                                          <span class="sold-tag">Sold</span>
                                       </div>
                                       <div class="price-tag">
                                          <span>$1,200/mo</span>
                                       </div>
                                    </div>
                                    <div class="content">
                                       <div class="specifications">
                                          <p><i class="flaticon-double-bed"></i> 3 Bedroom</p>
                                          <p><i class="flaticon-bathroom"></i> 3 Bathroom</p>
                                          <p><i class="flaticon-house-design"></i> Sq Ft 750 </p>
                                       </div>
                                       <h4><a href="property-details.html">Luxury Home Appoint </a></h4>
                                       <p class="location"><span class="icon-location"></span> 798 Talbot St.
                                          Bridgewater, NJ 08
                                       </p>
                                       <div class="property-footer">
                                          <div class="author">
                                             <div class="author-thumb">
                                                <img src="assets/images/thumb/properties/author/one.png"
                                                   alt="Image"/>
                                             </div>
                                             <div class="author-meta">
                                                <p>Wiliam Siman</p>
                                                <p>East Agents</p>
                                             </div>
                                          </div>
                                          <div class="footer-cta">
                                             <a href="property-details.html">
                                             <i class="flaticon-heart"></i>
                                             <span class="tool">Wishlist</span>
                                             </a>
                                             <a href="property-details.html">
                                             <i class="flaticon-shared-vision"></i>
                                             <span class="tool">Quick View</span>
                                             </a>
                                             <a href="property-details.html">
                                             <i class="flaticon-add"></i>
                                             <span class="tool">Project Details</span>
                                             </a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="swiper-slide">
                                 <div class="properites__single-item">
                                    <div class="thumb">
                                       <a href="property-details.html">
                                       <img src="assets/images/thumb/properties/two.png" alt="Image"/>
                                       </a>
                                       <div class="tag">
                                          <span class="feature-tag">Feature</span>
                                          <span class="sold-tag">Sold</span>
                                       </div>
                                       <div class="price-tag">
                                          <span>$1,600/mo</span>
                                       </div>
                                    </div>
                                    <div class="content">
                                       <div class="specifications">
                                          <p><i class="flaticon-double-bed"></i> 3 Bedroom</p>
                                          <p><i class="flaticon-bathroom"></i> 3 Bathroom</p>
                                          <p><i class="flaticon-house-design"></i> Sq Ft 750 </p>
                                       </div>
                                       <h4><a href="property-details.html">House on the Clarita</a></h4>
                                       <p class="location"><span class="icon-location"></span> 157 West Central
                                          Park South, NYC
                                       </p>
                                       <div class="property-footer">
                                          <div class="author">
                                             <div class="author-thumb">
                                                <img src="assets/images/thumb/properties/author/two.png"
                                                   alt="Image"/>
                                             </div>
                                             <div class="author-meta">
                                                <p>Jackson Mica</p>
                                                <p>East Agents</p>
                                             </div>
                                          </div>
                                          <div class="footer-cta">
                                             <a href="property-details.html">
                                             <i class="flaticon-heart"></i>
                                             <span class="tool">Wishlist</span>
                                             </a>
                                             <a href="property-details.html">
                                             <i class="flaticon-shared-vision"></i>
                                             <span class="tool">Quick View</span>
                                             </a>
                                             <a href="property-details.html">
                                             <i class="flaticon-add"></i>
                                             <span class="tool">Project Details</span>
                                             </a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="swiper-slide">
                                 <div class="properites__single-item">
                                    <div class="thumb">
                                       <a href="property-details.html">
                                       <img src="assets/images/thumb/properties/three.png" alt="Image"/>
                                       </a>
                                       <div class="tag">
                                          <span class="feature-tag">Feature</span>
                                          <span class="sold-tag">Sold</span>
                                       </div>
                                       <div class="price-tag">
                                          <span>$1,000/mo</span>
                                       </div>
                                    </div>
                                    <div class="content">
                                       <div class="specifications">
                                          <p><i class="flaticon-double-bed"></i> 3 Bedroom</p>
                                          <p><i class="flaticon-bathroom"></i> 3 Bathroom</p>
                                          <p><i class="flaticon-house-design"></i> Sq Ft 750 </p>
                                       </div>
                                       <h4><a href="property-details.html">Weston Hight Place</a></h4>
                                       <p class="location"><span class="icon-location"></span> 32 Pawnee Street
                                          Butte, MT 59701
                                       </p>
                                       <div class="property-footer">
                                          <div class="author">
                                             <div class="author-thumb">
                                                <img src="assets/images/thumb/properties/author/three.png"
                                                   alt="Image"/>
                                             </div>
                                             <div class="author-meta">
                                                <p>Micky Athor</p>
                                                <p>East Agents</p>
                                             </div>
                                          </div>
                                          <div class="footer-cta">
                                             <a href="property-details.html">
                                             <i class="flaticon-heart"></i>
                                             <span class="tool">Wishlist</span>
                                             </a>
                                             <a href="property-details.html">
                                             <i class="flaticon-shared-vision"></i>
                                             <span class="tool">Quick View</span>
                                             </a>
                                             <a href="property-details.html">
                                             <i class="flaticon-add"></i>
                                             <span class="tool">Project Details</span>
                                             </a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="swiper-slide">
                                 <div class="properites__single-item">
                                    <div class="thumb">
                                       <a href="property-details.html">
                                       <img src="assets/images/thumb/properties/four.png" alt="Image"/>
                                       </a>
                                       <div class="tag">
                                          <span class="feature-tag">Feature</span>
                                          <span class="sold-tag">Sold</span>
                                       </div>
                                       <div class="price-tag">
                                          <span>$1,200/mo</span>
                                       </div>
                                    </div>
                                    <div class="content">
                                       <div class="specifications">
                                          <p><i class="flaticon-double-bed"></i> 3 Bedroom</p>
                                          <p><i class="flaticon-bathroom"></i> 3 Bathroom</p>
                                          <p><i class="flaticon-house-design"></i> Sq Ft 750 </p>
                                       </div>
                                       <h4><a href="property-details.html">Sky Pool Villa House</a></h4>
                                       <p class="location"><span class="icon-location"></span> 798 Talbot St.
                                          Bridgewater, NJ 08
                                       </p>
                                       <div class="property-footer">
                                          <div class="author">
                                             <div class="author-thumb">
                                                <img src="assets/images/thumb/properties/author/one.png"
                                                   alt="Image"/>
                                             </div>
                                             <div class="author-meta">
                                                <p>Wiliam Siman</p>
                                                <p>East Agents</p>
                                             </div>
                                          </div>
                                          <div class="footer-cta">
                                             <a href="property-details.html">
                                             <i class="flaticon-heart"></i>
                                             <span class="tool">Wishlist</span>
                                             </a>
                                             <a href="property-details.html">
                                             <i class="flaticon-shared-vision"></i>
                                             <span class="tool">Quick View</span>
                                             </a>
                                             <a href="property-details.html">
                                             <i class="flaticon-add"></i>
                                             <span class="tool">Project Details</span>
                                             </a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="swiper-slide">
                                 <div class="properites__single-item">
                                    <div class="thumb">
                                       <a href="property-details.html">
                                       <img src="assets/images/thumb/properties/five.png" alt="Image"/>
                                       </a>
                                       <div class="tag">
                                          <span class="feature-tag">Feature</span>
                                          <span class="sold-tag">Sold</span>
                                       </div>
                                       <div class="price-tag">
                                          <span>$1,600/mo</span>
                                       </div>
                                    </div>
                                    <div class="content">
                                       <div class="specifications">
                                          <p><i class="flaticon-double-bed"></i> 3 Bedroom</p>
                                          <p><i class="flaticon-bathroom"></i> 3 Bathroom</p>
                                          <p><i class="flaticon-house-design"></i> Sq Ft 750 </p>
                                       </div>
                                       <h4><a href="property-details.html">The Most Luxarious</a></h4>
                                       <p class="location"><span class="icon-location"></span> 157 West Central
                                          Park South, NYC
                                       </p>
                                       <div class="property-footer">
                                          <div class="author">
                                             <div class="author-thumb">
                                                <img src="assets/images/thumb/properties/author/two.png"
                                                   alt="Image"/>
                                             </div>
                                             <div class="author-meta">
                                                <p>Jackson Mica</p>
                                                <p>East Agents</p>
                                             </div>
                                          </div>
                                          <div class="footer-cta">
                                             <a href="property-details.html">
                                             <i class="flaticon-heart"></i>
                                             <span class="tool">Wishlist</span>
                                             </a>
                                             <a href="property-details.html">
                                             <i class="flaticon-shared-vision"></i>
                                             <span class="tool">Quick View</span>
                                             </a>
                                             <a href="property-details.html">
                                             <i class="flaticon-add"></i>
                                             <span class="tool">Project Details</span>
                                             </a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="swiper-slide">
                                 <div class="properites__single-item">
                                    <div class="thumb">
                                       <a href="property-details.html">
                                       <img src="assets/images/thumb/properties/six.png" alt="Image"/>
                                       </a>
                                       <div class="tag">
                                          <span class="feature-tag">Feature</span>
                                          <span class="sold-tag">Sold</span>
                                       </div>
                                       <div class="price-tag">
                                          <span>$1,000/mo</span>
                                       </div>
                                    </div>
                                    <div class="content">
                                       <div class="specifications">
                                          <p><i class="flaticon-double-bed"></i> 3 Bedroom</p>
                                          <p><i class="flaticon-bathroom"></i> 3 Bathroom</p>
                                          <p><i class="flaticon-house-design"></i> Sq Ft 750 </p>
                                       </div>
                                       <h4><a href="property-details.html">Ready Apartment</a></h4>
                                       <p class="location"><span class="icon-location"></span> 32 Pawnee Street
                                          Butte, MT 59701
                                       </p>
                                       <div class="property-footer">
                                          <div class="author">
                                             <div class="author-thumb">
                                                <img src="assets/images/thumb/properties/author/three.png"
                                                   alt="Image"/>
                                             </div>
                                             <div class="author-meta">
                                                <p>Micky Athor</p>
                                                <p>East Agents</p>
                                             </div>
                                          </div>
                                          <div class="footer-cta">
                                             <a href="property-details.html">
                                             <i class="flaticon-heart"></i>
                                             <span class="tool">Wishlist</span>
                                             </a>
                                             <a href="property-details.html">
                                             <i class="flaticon-shared-vision"></i>
                                             <span class="tool">Quick View</span>
                                             </a>
                                             <a href="property-details.html">
                                             <i class="flaticon-add"></i>
                                             <span class="tool">Project Details</span>
                                             </a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="swiper-slide">
                                 <div class="properites__single-item">
                                    <div class="thumb">
                                       <a href="property-details.html">
                                       <img src="assets/images/thumb/properties/one.png" alt="Image"/>
                                       </a>
                                       <div class="tag">
                                          <span class="feature-tag">Feature</span>
                                          <span class="sold-tag">Sold</span>
                                       </div>
                                       <div class="price-tag">
                                          <span>$1,200/mo</span>
                                       </div>
                                    </div>
                                    <div class="content">
                                       <div class="specifications">
                                          <p><i class="flaticon-double-bed"></i> 3 Bedroom</p>
                                          <p><i class="flaticon-bathroom"></i> 3 Bathroom</p>
                                          <p><i class="flaticon-house-design"></i> Sq Ft 750 </p>
                                       </div>
                                       <h4><a href="property-details.html">Luxury Home Appoint </a></h4>
                                       <p class="location"><span class="icon-location"></span> 798 Talbot St.
                                          Bridgewater, NJ 08
                                       </p>
                                       <div class="property-footer">
                                          <div class="author">
                                             <div class="author-thumb">
                                                <img src="assets/images/thumb/properties/author/one.png"
                                                   alt="Image"/>
                                             </div>
                                             <div class="author-meta">
                                                <p>Wiliam Siman</p>
                                                <p>East Agents</p>
                                             </div>
                                          </div>
                                          <div class="footer-cta">
                                             <a href="property-details.html">
                                             <i class="flaticon-heart"></i>
                                             <span class="tool">Wishlist</span>
                                             </a>
                                             <a href="property-details.html">
                                             <i class="flaticon-shared-vision"></i>
                                             <span class="tool">Quick View</span>
                                             </a>
                                             <a href="property-details.html">
                                             <i class="flaticon-add"></i>
                                             <span class="tool">Project Details</span>
                                             </a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="swiper-slide">
                                 <div class="properites__single-item">
                                    <div class="thumb">
                                       <a href="property-details.html">
                                       <img src="assets/images/thumb/properties/two.png" alt="Image"/>
                                       </a>
                                       <div class="tag">
                                          <span class="feature-tag">Feature</span>
                                          <span class="sold-tag">Sold</span>
                                       </div>
                                       <div class="price-tag">
                                          <span>$1,600/mo</span>
                                       </div>
                                    </div>
                                    <div class="content">
                                       <div class="specifications">
                                          <p><i class="flaticon-double-bed"></i> 3 Bedroom</p>
                                          <p><i class="flaticon-bathroom"></i> 3 Bathroom</p>
                                          <p><i class="flaticon-house-design"></i> Sq Ft 750 </p>
                                       </div>
                                       <h4><a href="property-details.html">House on the Clarita</a></h4>
                                       <p class="location"><span class="icon-location"></span> 157 West Central
                                          Park South, NYC
                                       </p>
                                       <div class="property-footer">
                                          <div class="author">
                                             <div class="author-thumb">
                                                <img src="assets/images/thumb/properties/author/two.png"
                                                   alt="Image"/>
                                             </div>
                                             <div class="author-meta">
                                                <p>Jackson Mica</p>
                                                <p>East Agents</p>
                                             </div>
                                          </div>
                                          <div class="footer-cta">
                                             <a href="property-details.html">
                                             <i class="flaticon-heart"></i>
                                             <span class="tool">Wishlist</span>
                                             </a>
                                             <a href="property-details.html">
                                             <i class="flaticon-shared-vision"></i>
                                             <span class="tool">Quick View</span>
                                             </a>
                                             <a href="property-details.html">
                                             <i class="flaticon-add"></i>
                                             <span class="tool">Project Details</span>
                                             </a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="swiper-slide">
                                 <div class="properites__single-item">
                                    <div class="thumb">
                                       <a href="property-details.html">
                                       <img src="assets/images/thumb/properties/three.png" alt="Image"/>
                                       </a>
                                       <div class="tag">
                                          <span class="feature-tag">Feature</span>
                                          <span class="sold-tag">Sold</span>
                                       </div>
                                       <div class="price-tag">
                                          <span>$1,000/mo</span>
                                       </div>
                                    </div>
                                    <div class="content">
                                       <div class="specifications">
                                          <p><i class="flaticon-double-bed"></i> 3 Bedroom</p>
                                          <p><i class="flaticon-bathroom"></i> 3 Bathroom</p>
                                          <p><i class="flaticon-house-design"></i> Sq Ft 750 </p>
                                       </div>
                                       <h4><a href="property-details.html">Weston Hight Place</a></h4>
                                       <p class="location"><span class="icon-location"></span> 32 Pawnee Street
                                          Butte, MT 59701
                                       </p>
                                       <div class="property-footer">
                                          <div class="author">
                                             <div class="author-thumb">
                                                <img src="assets/images/thumb/properties/author/three.png"
                                                   alt="Image"/>
                                             </div>
                                             <div class="author-meta">
                                                <p>Micky Athor</p>
                                                <p>East Agents</p>
                                             </div>
                                          </div>
                                          <div class="footer-cta">
                                             <a href="property-details.html">
                                             <i class="flaticon-heart"></i>
                                             <span class="tool">Wishlist</span>
                                             </a>
                                             <a href="property-details.html">
                                             <i class="flaticon-shared-vision"></i>
                                             <span class="tool">Quick View</span>
                                             </a>
                                             <a href="property-details.html">
                                             <i class="flaticon-add"></i>
                                             <span class="tool">Project Details</span>
                                             </a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="swiper-slide">
                                 <div class="properites__single-item">
                                    <div class="thumb">
                                       <a href="property-details.html">
                                       <img src="assets/images/thumb/properties/four.png" alt="Image"/>
                                       </a>
                                       <div class="tag">
                                          <span class="feature-tag">Feature</span>
                                          <span class="sold-tag">Sold</span>
                                       </div>
                                       <div class="price-tag">
                                          <span>$1,200/mo</span>
                                       </div>
                                    </div>
                                    <div class="content">
                                       <div class="specifications">
                                          <p><i class="flaticon-double-bed"></i> 3 Bedroom</p>
                                          <p><i class="flaticon-bathroom"></i> 3 Bathroom</p>
                                          <p><i class="flaticon-house-design"></i> Sq Ft 750 </p>
                                       </div>
                                       <h4><a href="property-details.html">Sky Pool Villa House</a></h4>
                                       <p class="location"><span class="icon-location"></span> 798 Talbot St.
                                          Bridgewater, NJ 08
                                       </p>
                                       <div class="property-footer">
                                          <div class="author">
                                             <div class="author-thumb">
                                                <img src="assets/images/thumb/properties/author/one.png"
                                                   alt="Image"/>
                                             </div>
                                             <div class="author-meta">
                                                <p>Wiliam Siman</p>
                                                <p>East Agents</p>
                                             </div>
                                          </div>
                                          <div class="footer-cta">
                                             <a href="property-details.html">
                                             <i class="flaticon-heart"></i>
                                             <span class="tool">Wishlist</span>
                                             </a>
                                             <a href="property-details.html">
                                             <i class="flaticon-shared-vision"></i>
                                             <span class="tool">Quick View</span>
                                             </a>
                                             <a href="property-details.html">
                                             <i class="flaticon-add"></i>
                                             <span class="tool">Project Details</span>
                                             </a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="swiper-slide">
                                 <div class="properites__single-item">
                                    <div class="thumb">
                                       <a href="property-details.html">
                                       <img src="assets/images/thumb/properties/five.png" alt="Image"/>
                                       </a>
                                       <div class="tag">
                                          <span class="feature-tag">Feature</span>
                                          <span class="sold-tag">Sold</span>
                                       </div>
                                       <div class="price-tag">
                                          <span>$1,600/mo</span>
                                       </div>
                                    </div>
                                    <div class="content">
                                       <div class="specifications">
                                          <p><i class="flaticon-double-bed"></i> 3 Bedroom</p>
                                          <p><i class="flaticon-bathroom"></i> 3 Bathroom</p>
                                          <p><i class="flaticon-house-design"></i> Sq Ft 750 </p>
                                       </div>
                                       <h4><a href="property-details.html">The Most Luxarious</a></h4>
                                       <p class="location"><span class="icon-location"></span> 157 West Central
                                          Park South, NYC
                                       </p>
                                       <div class="property-footer">
                                          <div class="author">
                                             <div class="author-thumb">
                                                <img src="assets/images/thumb/properties/author/two.png"
                                                   alt="Image"/>
                                             </div>
                                             <div class="author-meta">
                                                <p>Jackson Mica</p>
                                                <p>East Agents</p>
                                             </div>
                                          </div>
                                          <div class="footer-cta">
                                             <a href="property-details.html">
                                             <i class="flaticon-heart"></i>
                                             <span class="tool">Wishlist</span>
                                             </a>
                                             <a href="property-details.html">
                                             <i class="flaticon-shared-vision"></i>
                                             <span class="tool">Quick View</span>
                                             </a>
                                             <a href="property-details.html">
                                             <i class="flaticon-add"></i>
                                             <span class="tool">Project Details</span>
                                             </a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="swiper-slide">
                                 <div class="properites__single-item">
                                    <div class="thumb">
                                       <a href="property-details.html">
                                       <img src="assets/images/thumb/properties/six.png" alt="Image"/>
                                       </a>
                                       <div class="tag">
                                          <span class="feature-tag">Feature</span>
                                          <span class="sold-tag">Sold</span>
                                       </div>
                                       <div class="price-tag">
                                          <span>$1,000/mo</span>
                                       </div>
                                    </div>
                                    <div class="content">
                                       <div class="specifications">
                                          <p><i class="flaticon-double-bed"></i> 3 Bedroom</p>
                                          <p><i class="flaticon-bathroom"></i> 3 Bathroom</p>
                                          <p><i class="flaticon-house-design"></i> Sq Ft 750 </p>
                                       </div>
                                       <h4><a href="property-details.html">Ready Apartment</a></h4>
                                       <p class="location"><span class="icon-location"></span> 32 Pawnee Street
                                          Butte, MT 59701
                                       </p>
                                       <div class="property-footer">
                                          <div class="author">
                                             <div class="author-thumb">
                                                <img src="assets/images/thumb/properties/author/three.png"
                                                   alt="Image"/>
                                             </div>
                                             <div class="author-meta">
                                                <p>Micky Athor</p>
                                                <p>East Agents</p>
                                             </div>
                                          </div>
                                          <div class="footer-cta">
                                             <a href="property-details.html">
                                             <i class="flaticon-heart"></i>
                                             <span class="tool">Wishlist</span>
                                             </a>
                                             <a href="property-details.html">
                                             <i class="flaticon-shared-vision"></i>
                                             <span class="tool">Quick View</span>
                                             </a>
                                             <a href="property-details.html">
                                             <i class="flaticon-add"></i>
                                             <span class="tool">Project Details</span>
                                             </a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="pagination-one">
                           <div class="properties-pagination"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    </div>
  )
}

export default Property