import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" aria-label="Offcanvas navbar large">
      <div className="navbar-container container-fluid">
        <Link className="logo-binar-rental-car navbar-brand" to="/"></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas-container"
          aria-controls="offcanvas-label"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end w-50"
          id="offcanvas-container"
          aria-labelledby="offcanvas-label"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvas-label">
              <strong>BCR</strong>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1">
              <li className="nav-item pe-2">
                <a className="nav-link" href="#our-services">
                  Our Services
                </a>
              </li>
              <li className="nav-item pe-2">
                <a className="nav-link" href="#why-us">
                  Why Us
                </a>
              </li>
              <li className="nav-item pe-2">
                <a className="nav-link" href="#testimonial">
                  Testimonial
                </a>
              </li>
              <li className="nav-item pe-3">
                <a className="nav-link" href="#faq">
                  FAQ
                </a>
              </li>
              <button className="register-btn">Register</button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
