import React from "react"
import { Link } from "gatsby"
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
} from "react-icons/fa"

const Header = () => {
  const classes = "text-xs md:text-sm"
  const activeClassesMobile = "text-green-100"
  const activeClasses = "font-bold"
  return (
    <header>
      <div
        id="navi-wrapper"
        className="bg-gradient-to-b from-blue-trans to-green-trans bg-green-trans relative blur text-white-100"
      >
        <div className="px-5 py-2 flex justify-end md:container">
          <div className="flex items-center flex-1">
            <Link to="/" className={classes}>
              <FaHome className="navi-icon" />
            </Link>
          </div>
          <nav
            className="navi justify-around 
       w-full bottom-0 items-center z-10 hidden md:flex"
          >
            <Link
              to="/leistungen"
              className={classes}
              activeClassName={activeClasses}
            >
              Leistungen
            </Link>
            <Link
              to="/ueber-uns"
              className={classes}
              activeClassName={activeClasses}
            >
              Über uns
            </Link>
            <Link
              to="/preise"
              className={classes}
              activeClassName={activeClasses}
            >
              Preise
            </Link>
            <Link
              to="/kontakt"
              className={classes}
              activeClassName={activeClasses}
            >
              Kontakt
            </Link>
            <Link
              to="/impressionen"
              className={classes}
              activeClassName={activeClasses}
            >
              Impressionen
            </Link>
          </nav>
          <div className="ml-4">
            <a
              className="links"
              rel="noreferrer"
              target="_BLANK"
              href="https://www.instagram.com/aktivstall_pfaffenwinkel_/"
            >
              <FaInstagram className="navi-icon" />
              <span className="hidden">Instagram</span>
            </a>
          </div>
          <div className="ml-4">
            <a
              className="links"
              rel="noreferrer"
              target="_BLANK"
              href="https://www.facebook.com/aktivstall.pfaffenwinkel"
            >
              <FaFacebookF className="navi-icon" />
              <span className="hidden">Facebook</span>
            </a>
          </div>
          <div className="ml-4">
            <a href="mailto:michaela@aktivstall-pfaffenwinkel.de">
              <FaEnvelope className="navi-icon" />
              <span className="hidden">
                michaela@aktivstall-pfaffenwinkel.de
              </span>
            </a>
          </div>
          <div className="ml-4">
            <a href="tel:+4915254180038">
              <FaPhoneAlt className="navi-icon" />
              <span className="hidden">0152 54180038</span>
            </a>
          </div>
        </div>
      </div>
      <nav
        className="mobile-navi py-3 text-gray-100 bg-white-trans flex justify-around 
      fixed w-full bottom-0 items-center z-10 md:hidden"
      >
        <Link
          to="/leistungen"
          className={classes}
          activeClassName={activeClassesMobile}
        >
          <FaHorseHead className="navi-icon" />
          Leistungen
        </Link>
        <Link
          to="/ueber-uns"
          className={classes}
          activeClassName={activeClassesMobile}
        >
          <FaUsers className="navi-icon" />
          Über uns
        </Link>
        <Link
          to="/preise"
          className={classes}
          activeClassName={activeClassesMobile}
        >
          <FaEuroSign className="navi-icon" />
          Preise
        </Link>
        <Link
          to="/kontakt"
          className={classes}
          activeClassName={activeClassesMobile}
        >
          <FaAddressCard className="navi-icon" />
          Kontakt
        </Link>
        <Link
          to="/impressionen"
          className={classes}
          activeClassName={activeClassesMobile}
        >
          <FaImage className="navi-icon" />
          Impressionen
        </Link>
      </nav>
    </header>
  )
}

export default Header
