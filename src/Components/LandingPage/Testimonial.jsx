import "./Testimonial.css"
import testimonial from "../../assets/images/foto-testimonial.png"
import rate from "../../assets/images/icon-rate-testimonial.svg"

function Testimonial() {
  return (
    <section id="testimonial" className="testimonial">
      <div className="container">
        <header className="section-header-testimonial">
          <p className="title-testimonial">Testimonial</p>
          <p className="berbagai-review">Berbagai review positif dari para pelanggan kami</p>
        </header>
        <div
          id="carouselExample"
          className="carousel carousel-dark slide d-flex justify-content-center"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container-slide d-flex justify-content-center column-gap-4">
                <img className="foto-testimonial" src={testimonial} alt="testimonial" />
                <div className="container-comment">
                  <img
                    className="icon-rate"
                    src={rate}
                    alt="rate"
                    style={{ width: "80px", height: "16px" }}
                  />
                  <p className="comment">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className="people">John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container-slide d-flex justify-content-center column-gap-4">
                <img className="foto-testimonial" src={testimonial} alt="testimonial" />
                <div className="container-comment">
                  <img
                    className="icon-rate"
                    src={rate}
                    alt="rate"
                    style={{ width: "80px", height: "16px" }}
                  />
                  <p className="comment">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className="people">John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container-slide d-flex justify-content-center column-gap-4">
                <img className="foto-testimonial" src={testimonial} alt="testimonial" />
                <div className="container-comment">
                  <img
                    className="icon-rate"
                    src={rate}
                    alt="rate"
                    style={{ width: "80px", height: "16px" }}
                  />
                  <p className="comment">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className="people">John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="kurang-dari carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
