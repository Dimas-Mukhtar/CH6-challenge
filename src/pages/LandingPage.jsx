import Banner from "../Components/LandingPage/Banner"
import Faq from "../Components/LandingPage/Faq"
import Footer from "../Components/LandingPage/Footer"
import Hero from "../Components/LandingPage/Hero"
import Navbar from "../Components/LandingPage/Navbar"
import OurServices from "../Components/LandingPage/OurServices"
import Testimonial from "../Components/LandingPage/Testimonial"
import WhyUs from "../Components/LandingPage/WhyUs"

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurServices />
      <WhyUs />
      <Testimonial />
      <Banner />
      <Faq />
      <Footer />
    </>
  )
}

export default LandingPage
