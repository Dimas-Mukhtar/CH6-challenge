import "./OurServices.css"
import lady from "../../assets/images/foto-perempuan-senang.png"
import centang from "../../assets/images/icon-centang.svg"

function OurServices() {
  return (
    <section id="our-services" className="our-services">
      <div className="container">
        <div className="container-row-our-services row">
          <div className="container-left-our-services col-lg-6 d-flex justify-content-center">
            <img className="foto-perempuan-senang" src={lady} alt="lady" />
          </div>
          <div className="container-desc col-lg-6">
            <h2 className="our-services-title">
              Best Car Rental for any kind of trip in (Lokasimu)!
            </h2>
            <p className="caption-title-our-service">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah
              dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk
              perjalanan wisata, bisnis, wedding, meeting, dll.
            </p>
            <p className="centang-text">
              <img className="centang-icon me-3" src={centang} alt="centang" />
              Sewa Mobil Dengan Supir di Bali 12 Jam
            </p>
            <p className="centang-text">
              <img className="centang-icon me-3" src={centang} alt="centang" />
              Sewa Mobil Lepas Kunci di Bali 24 Jam
            </p>
            <p className="centang-text">
              <img className="centang-icon me-3" src={centang} alt="centang" />
              Sewa Mobil Jangka Panjang Bulanan
            </p>
            <p className="centang-text">
              <img className="centang-icon me-3" src={centang} alt="centang" />
              Gratis Antar - Jemput Mobil di Bandara
            </p>
            <p className="centang-text">
              <img className="centang-icon me-3" src={centang} alt="centang" />
              Layanan Airport Transfer / Drop In Out
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServices
