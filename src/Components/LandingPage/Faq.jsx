import "./Faq.css"

function Faq() {
  return (
    <section id="faq" className="faq">
      <div className="container-faq container">
        <div className="row">
          <div className="col-lg-6">
            <p className="faq-title">Frequently Asked Question</p>
            <p className="faq-caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="col-lg-6">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1"
                    aria-expanded="true"
                    aria-controls="collapse1"
                  >
                    <p className="pertanyaan">Apa saja syarat yang dibutuhkan?</p>
                  </button>
                </h2>
                <div
                  id="collapse1"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="jawaban">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit sint dicta
                      voluptates praesentium eum? Incidunt odit ipsum voluptas vero! Accusamus neque
                      sapiente rem. Eum minima reiciendis similique esse illo ipsum!
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item border border-1">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse2"
                    aria-expanded="false"
                    aria-controls="collapse2"
                  >
                    <p className="pertanyaan">Berapa hari minimal sewa mobil lepas kunci?</p>
                  </button>
                </h2>
                <div
                  id="collapse2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="jawaban">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit sint dicta
                      voluptates praesentium eum? Incidunt odit ipsum voluptas vero! Accusamus neque
                      sapiente rem. Eum minima reiciendis similique esse illo ipsum!
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item border border-1">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse3"
                    aria-expanded="false"
                    aria-controls="collapse3"
                  >
                    <p className="pertanyaan">
                      Berapa hari sebelumnya sabaiknya booking sewa mobil?
                    </p>
                  </button>
                </h2>
                <div
                  id="collapse3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="jawaban">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit sint dicta
                      voluptates praesentium eum? Incidunt odit ipsum voluptas vero! Accusamus neque
                      sapiente rem. Eum minima reiciendis similique esse illo ipsum!
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item border border-1">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse4"
                    aria-expanded="false"
                    aria-controls="collapse4"
                  >
                    <p className="pertanyaan">Apakah Ada biaya antar-jemput?</p>
                  </button>
                </h2>
                <div
                  id="collapse4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="jawaban">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit sint dicta
                      voluptates praesentium eum? Incidunt odit ipsum voluptas vero! Accusamus neque
                      sapiente rem. Eum minima reiciendis similique esse illo ipsum!
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item border border-1">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse5"
                    aria-expanded="false"
                    aria-controls="collapse5"
                  >
                    <p className="pertanyaan">Bagaimana jika terjadi kecelakaan</p>
                  </button>
                </h2>
                <div
                  id="collapse5"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="jawaban">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit sint dicta
                      voluptates praesentium eum? Incidunt odit ipsum voluptas vero! Accusamus neque
                      sapiente rem. Eum minima reiciendis similique esse illo ipsum!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
