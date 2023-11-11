/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import axios from "axios"
import ListCars from "../Components/Cars/ListCars"
import Footer from "../Components/LandingPage/Footer"
import Hero from "../Components/LandingPage/Hero"
import Navbar from "../Components/LandingPage/Navbar"

function CarsPage() {
  // const [cars, setCars] = useState([])
  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const respone = await axios.get(
  //         "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
  //       )
  //       setCars(respone.data)
  //     } catch (error) {
  //       throw new Error(error.message)
  //     }
  //   }
  //   getData()
  // }, [])
  return (
    <>
      <Navbar />
      <Hero />
      <ListCars />
      <Footer />
    </>
  )
}

export default CarsPage
