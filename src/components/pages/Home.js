import React from 'react'
import Banner from '../Banner'
import OurService from '../OurService'
import About from '../About'
import Property from '../Property'
import Counter from '../Counter'
import LatestBlog from '../LatestBlog'
import PartnerSlider from '../PartnerSlider'

const Home = () => {
  return (
    <div>
        <Banner/>
        <About/>
        <OurService/>
        <Property/>
        <Counter/>
        <LatestBlog/>
        <PartnerSlider/>
    </div>
  )
}

export default Home