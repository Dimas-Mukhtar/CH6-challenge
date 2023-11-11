import "./WhyUs.css"
import mobilLengkap from "../../assets/images/icon-mobil-lengkap.svg"
import hargaMurah from "../../assets/images/icon-harga-murah.svg"
import layanan24Jam from "../../assets/images/icon-layanan-24-jam.svg"
import sopir from "../../assets/images/icon-sopir-profesional.svg"

function WhyUs() {
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <header className="section-header-why-us">
          <p className="title-why-us">Why Us?</p>
          <p className="mengapa-binar-car-rental">Mengapa harus pilih Binar Car Rental?</p>
        </header>
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="why-us-box">
              <img src={mobilLengkap} alt="" className="icon-why-us" />
              <p className="title-list-why-us">Mobil Lengkap</p>
              <p className="capt-list-why-us">
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="why-us-box">
              <img src={hargaMurah} alt="" className="icon-why-us" />
              <p className="title-list-why-us">Harga Murah</p>
              <p className="capt-list-why-us">
                Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="why-us-box">
              <img src={layanan24Jam} alt="" className="icon-why-us" />
              <p className="title-list-why-us">Layanan 24 Jam</p>
              <p className="capt-list-why-us">
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir
                minggu
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="why-us-box">
              <img src={sopir} alt="" className="icon-why-us" />
              <p className="title-list-why-us">Sopir Profesional</p>
              <p className="capt-list-why-us">
                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
