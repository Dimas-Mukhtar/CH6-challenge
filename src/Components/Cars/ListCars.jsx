/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./index.css"
import userLogo from "../../assets/images/fi_users1.png"
import settingLogo from "../../assets/images/fi_settings.png"
import calenderLogo from "../../assets/images/fi_calendar.png"
import { useState, useEffect } from "react"
import axios from "axios"
// import { FilterContext } from "../../context/cars"

function ListCars() {
  // const [cars, filterByType] = useContext(FilterContext)
  // // console.log(cars)
  // const [typeCar, setTypeCar] = useState(false)
  // function onChangeType(e) {
  //   setTypeCar({
  //     ...typeCar,
  //     [e.target.name]: e.target.value
  //   })
  // }

  // function onSubmit(e) {
  //   e.preventDefault()
  //   filterByType(typeCar)
  // }
  const [cars, setCars] = useState([])
  const [type, setType] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true)
        setError("")
        const respone = await axios.get(
          "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
        )
        const filteredtDataAvailable = respone.data.filter((car) => {
          return car.available == JSON.parse(type)
        })
        setCars(filteredtDataAvailable)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }
    getData()
  }, [type])

  function handleSetType(type) {
    setType(type)
  }

  function onClick(e) {
    e.preventDefault()
    console.log(cars)
  }
  return (
    <>
      <form className="search">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="row search__card mx-lg-5 py-3 px-4">
                <div className="col-lg-auto col-xl-2 col-xxl-3 col-md-auto">
                  <label>Tipe Driver</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="tipeDriver"
                    onChange={(e) => handleSetType(e.target.value)}
                  >
                    <option value="default" selected>
                      Pilih Tipe Driver &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    </option>
                    <option value={true}>Dengan Supir</option>
                    <option value={false}>Tanpa Supir (Lepas Kunci)</option>
                  </select>
                </div>
                <div className="col-lg-auto col-xl-auto col-md-auto">
                  <label>Tanggal</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Pilih Tanggal"
                    id="tanggal"
                  />
                </div>
                <div className="col-lg-auto col-xl-auto col-md-auto search__time">
                  <label>Pilih Waktu</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="waktuJemput"
                  >
                    <option value="false" selected>
                      Pilih Waktu &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </option>
                    <option value="08:00">08.00 WIB</option>
                    <option value="09:00">09.00 WIB</option>
                    <option value="10:00">10.00 WIB</option>
                    <option value="11:00">11.00 WIB</option>
                    <option value="12:00">12.00 WIB</option>
                  </select>
                </div>
                <div className="col-lg-auto col-xl-auto col-md-auto">
                  <label className="fw-light">Jumlah Penumpang (optional)</label>
                  <div className="input-group">
                    <input
                      type="search"
                      className="form-control border-end-0"
                      placeholder="Jumlah Penumpang"
                      id="jumlahPenumpang"
                      defaultValue="0"
                    />
                    <span className="input-group-text bg-white">
                      <img src="images/fi_users.png" width="20px" alt="" />
                    </span>
                  </div>
                </div>
                <div className="col-lg-2 col-xl-auto col-md-2 pt-4">
                  <button className="cari-mobil-btn" id="load-btn" onClick={onClick}>
                    Cari Mobil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <section className="cars">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-11 ">
                <div className="row" id="cars-container">
                  {cars.map((data) => (
                    <div className="col-lg-4 py-3" key={data.id}>
                      <div className="card px-2 py-4">
                        <img src={data.image} className="card-img-top mt-4 text-center" />
                        <div className="card-body">
                          <h5 className="card-title fs-6">
                            {data.manufacture}/{data.model}
                          </h5>
                          <h5 className="card-title fs-5 fw-bold">Rp {data.rentPerDay} / hari</h5>
                          <p className="cars__p">{data.description}</p>
                          <div className="row">
                            <div className="col-1">
                              <img src={userLogo} style={{ width: "20px" }} alt="" />
                            </div>
                            <div className="col-10 ms-lg-2">{data.capacity} orang</div>
                          </div>
                          <div className="row mt-2">
                            <div className="col-1">
                              <img src={settingLogo} style={{ width: "20px" }} alt="" />
                            </div>
                            <div className="col-10 ms-lg-2">{data.transmission}</div>
                          </div>
                          <div className="row mt-2 mb-4">
                            <div className="col-1">
                              <img src={calenderLogo} style={{ width: "20px" }} alt="" />
                            </div>
                            <div className="col-10 ms-lg-2">Tahun {data.year}</div>
                          </div>

                          <a href="#" className="btn cari-mobil-btn" style={{ width: "100%" }}>
                            Go somewhere
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {error && <ErrorMessage message={error} />}
    </>
  )
}

function Loader() {
  return <p className="loader">Loading.....</p>
}

function ErrorMessage({ message }) {
  return <p className="error">Error : {message}</p>
}

export default ListCars
