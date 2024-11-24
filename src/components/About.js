import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
   useEffect(() => {
      AOS.init();
    }, []);
  return (
    <div>
        <section class="about">
            <div class="container">
               <div class="row vertical-column-gap-lg">
                  <div class="col-12 col-xl-6">
                     <div class="about__content">
                        <div class="section__header">
                           <span>About Us</span>
                           <h2 class="title-animation">Welcome To Our
                              Alexis Properties Agency
                           </h2>
                          
                        </div>
                        <div class="about__content-inner">
                           <p>Over 39,000 people work for us in more than 70 countries all over the This
                              breadth of global coverage, combined with specialist services
                           </p>
                           <div class="about__content-single" data-aos="fade-up" data-aos-duration="1200">
                              <div class="thumb">
                                 <i class="flaticon-mansion"></i>
                              </div>
                              <div class="content">
                                 <h5>The Perfect Residency</h5>
                                 <p>Lorem ipsum dolor sit amet, tempor incididunt labore</p>
                              </div>
                           </div>
                           <div class="about__content-single" data-aos="fade-up" data-aos-duration="1200"
                              data-aos-delay="200">
                              <div class="thumb">
                                 <i class="flaticon-modern-house"></i>
                              </div>
                              <div class="content">
                                 <h5>Global Architect Experts</h5>
                                 <p>Lorem ipsum dolor sit amet, tempor incididunt labore</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-12 col-xl-6">
                     <div class="about__thumb">
                        <div class="about__thumb-single" data-aos="fade-right" data-aos-duration="1200">
                           <img src="assets/images/thumb/about/one.png" alt="Image"/>
                           <div class="thumb">
                              <img src="assets/images/thumb/about/path-one.png" alt="Image"/>
                           </div>
                        </div>
                        <div class="about__thumb-single" data-aos="fade-left" data-aos-duration="1200">
                           <img src="assets/images/thumb/about/two.png" alt="Image"/>
                           <div class="thumb">
                              <img src="assets/images/thumb/about/path-two.png" alt="Image" class="filter-img"/>
                           </div>
                        </div>
                        <div class="about__thumb-single" data-aos="fade-up" data-aos-duration="1200">
                           <img src="assets/images/thumb/about/three.png" alt="Image"/>
                           <div class="thumb">
                              <img src="assets/images/thumb/about/path-three.png" alt="Image"/>
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

export default About