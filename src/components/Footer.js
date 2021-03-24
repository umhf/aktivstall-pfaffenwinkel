import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo-light.svg"
import {
  FaPhoneAlt,
  FaEnvelope,
  FaHorseHead,
  FaUsers,
  FaEuroSign,
  FaAddressCard,
  FaImage,
  FaHome,
  FaFacebookF,
  FaInstagram,
  FaFileContract,
  FaGavel,
} from "react-icons/fa"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="blur bg-gradient-to-b from-green-trans to-blue-trans container py-5 footer relative bg-green-trans">
      <Link to="/">
        <img src={logo} alt="Logo" className="mx-auto w-36" />
      </Link>
      <div className="flex row justify-around mt-1">
        <div>
          <div className="links-wrapper">
            <p className="font-bold">Seiten</p>
            <Link className="links" to="/">
              <FaHome className="icon" />
              Startseite
            </Link>
            <Link className="links" to="/leistungen">
              <FaHorseHead className="icon" />
              Leistungen
            </Link>
            <Link className="links" to="/ueber-uns">
              <FaUsers className="icon" />
              Über uns
            </Link>
            <Link className="links" to="/preise">
              <FaEuroSign className="icon" />
              Preise
            </Link>
            <Link className="links" to="/kontakt">
              <FaAddressCard className="icon" />
              Kontakt
            </Link>
            <Link className="links" to="/impressionen">
              <FaImage className="icon" />
              Impressionen
            </Link>
            <Link className="links" to="/datenschutz">
              <FaFileContract className="icon" />
              Datenschutz
            </Link>
            <Link className="links" to="/impressum">
              <FaGavel className="icon" />
              Impressum
            </Link>
          </div>
        </div>
        <div>
          <div className="links-wrapper">
            <p className="font-bold">Kontakt</p>
            <a
              className="links"
              href="mailto:michaela@aktivstall-pfaffenwinkel.de"
            >
              <FaEnvelope className="icon" />
              Email
            </a>
            <a className="links" href="tel:+4915254180038">
              <FaPhoneAlt className="icon" />
              0152 54180038
            </a>
          </div>
          <div className="links-wrapper">
            <p className="font-bold">Social Media</p>
            <a
              className="links"
              rel="noreferrer"
              target="_BLANK"
              href="https://www.instagram.com/aktivstall_pfaffenwinkel_/"
            >
              <FaInstagram className="icon" />
              Instagram
            </a>
            <a
              className="links"
              rel="noreferrer"
              target="_BLANK"
              href="https://www.facebook.com/aktivstall.pfaffenwinkel/"
            >
              <FaFacebookF className="icon" />
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
