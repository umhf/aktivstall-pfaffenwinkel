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
  FaLink,
} from "react-icons/fa"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="blur bg-gradient-to-b from-green-trans to-blue-trans py-5 footer relative bg-green-trans">
      <div className="container">
        <Link to="/">
          <img src={logo} alt="Logo" className="mx-auto w-36" />
        </Link>
        <div className="grid grid-cols-2 grid-flow-row gap-4 mt-4 sm:grid-cols-4 lg:grid-cols-6">
          <div className="links-wrapper row-span-2 sm:row-span-1 lg:col-start-2">
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
          <div className="links-wrapper">
            <p className="font-bold">Links</p>
            <a
              className="links"
              rel="noreferrer"
              target="_BLANK"
              href="https://www.paddock-trail.de/index.html"
            >
              <FaLink className="icon" />
              Paddock Trail
            </a>
            <a
              className="links"
              rel="noreferrer"
              target="_BLANK"
              href="https://aktivstall.de/de/konzept/"
            >
              <FaLink className="icon" />
              HIT-Aktivstall Konzept
            </a>
          </div>
        </div>
        <p>Wir danken für die Förderung zur Mitfinanzierung der Reitplatzüberdachung durch eine Einzelbetriebliche Investitionsförderung (EIF) im Rahmen des Europäischen Landwirtschaftsfonds für die Entwicklung des ländlichen Raumes (ELER). <a href="http://www.aelf-wm.bayern.de/">http://www.aelf-wm.bayern.de/</a></p>
      </div>
    </footer>
  )
}

export default Footer
