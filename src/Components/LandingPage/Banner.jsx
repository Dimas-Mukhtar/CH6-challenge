import "./Banner.css"

function Banner() {
  return (
    <div className="flex-align col text-center">
      <p className="banner-title">Sewa Mobil di (Lokasimu) Sekarang</p>
      <p className="banner-caption text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
      <div className="btn">
        <button className="mulai-sewa-btn">Mulai Sewa Mobil</button>
      </div>
    </div>
  )
}

export default Banner
