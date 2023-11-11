import "./Footer.css"
import facebook from "../../assets/images/icon-footer-facebook.svg"
import instagram from "../../assets/images/icon-footer-instagram.svg"
import twitter from "../../assets/images/icon-footer-twitter.svg"
import mail from "../../assets/images/icon-footer-mail.svg"
import twitch from "../../assets/images/icon-footer-twitch.svg"

function Footer() {
  return (
    <footer className="d-flex justify-content-evenly">
      <div className="address">
        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
        <p>binarcarrental@gmail.com</p>
        <p>081-233-334-808</p>
      </div>
      <div className="navigation">
        <p>Our services</p>
        <p>Why Us</p>
        <p>Testimonial</p>
        <p>FAQ</p>
      </div>
      <div className="sosmed">
        <p>Connect with us</p>
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
        <img src={mail} alt="mail" />
        <img src={twitch} alt="twitch" />
      </div>
      <div className="copyright">
        <p>Copyright Binar 2022</p>
        <div className="logo-binar-rental-car-footer"></div>
      </div>
    </footer>
  )
}

export default Footer
