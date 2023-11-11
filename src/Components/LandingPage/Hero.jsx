import { Link } from "react-router-dom"
import "./Hero.css"
import carImg from "../../assets/images/foto-mobil-binar.png"

function Hero() {
  return (
    <section id="hero-section" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="colom col-lg-6 d-flex flex-column justify-content-center">
            <p className="title-hero">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</p>
            <p className="caption-title">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan
              harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <button className="mulai-sewa-btn">
              <Link to="/cars" style={{ color: "white", textDecoration: "none" }}>
                Mulai Sewa Mobil
              </Link>
            </button>
          </div>
          <div className="colom col-lg-6 hero-img">
            <img className="foto-mobil img-fluid" src={carImg} alt="car" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
