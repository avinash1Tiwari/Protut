import React from 'react'
// import Navbar from '../component/landingpage/Navbar'
import Heroheader from '../component/landingpage/Heroheader'
import CardOne from '../component/landingpage/CardOne'
import CardTwo from '../component/landingpage/CardTwo'
import PricingSection from '../component/landingpage/PricingSection'
import Footer from '../component/landingpage/Footer'
import Faq from '../component/landingpage/Faq'
import DemoNav from '../component/landingpage/DemoNav'
// import Domain from '../component/landingpage/Domain'
// import Domain from '../component/landingpage/Domain'
const LandingPage = () => {
  return (
    <>
        <DemoNav/>
        {/* <Navbar/> */}
        <div className="mt-3">
        <Heroheader/>
        </div>
        <div className="mt-3">
        {/* <Domain/> */}
        </div>
        <div className="mt-3">
        <CardOne/>
        </div>
        <div className="lg:flex lg:justify-center lg:items-center mt-3 bg-white">
        <CardTwo/>
        </div>
        <div className="mt-3">
        <PricingSection/>
        </div>
        <div className="mt-3">
        <Faq/>
        </div>
        <div className="mt-3">
        <Footer/>
        </div>
    </>
  )
}

export default LandingPage