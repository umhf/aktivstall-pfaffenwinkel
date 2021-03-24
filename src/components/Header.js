import React from "react"
import { Link } from "gatsby"
import {
  FaMobileAlt,
  FaEnvelope,
  FaHorseHead,
  FaUsers,
  FaEuroSign,
  FaAddressCard,
  FaImage,
  FaHome,
} from "react-icons/fa"

const Header = () => {
  const classes = "text-xs xs:text-xs"
  const activeClasses = "text-green-100"
  return (
    <header>
      {/*             <a href="#" class="block">
    <img class="h-6 md:h-8" src="" alt="Logo" title="Logo"/>
  </a> */}
      <div
        id="metanavi"
        className="blur bg-gradient-to-b from-blue-trans to-green-trans relative container bg-green-trans py-2 px-5 text-xs flex justify-end text-white-100"
      >
        <div className="flex items-center flex-1">
          <Link to="/" className={classes} activeClassName="">
            <FaHome className="navi-icon" />
          </Link>
        </div>
        <div className="ml-4">
          <a href="mailto:michaela@aktivstall-pfaffenwinkel.de">
            <FaEnvelope className="h-5 w-5" />
            <span className="hidden">michaela@aktivstall-pfaffenwinkel.de</span>
          </a>
        </div>
        <div className="ml-4">
          <a href="tel:0152 54180038">
            <FaMobileAlt className="h-5 w-5" />
            <span className="hidden">0152 54180038</span>
          </a>
        </div>
      </div>
      <nav className="text-gray-100 bg-white-trans flex justify-around fixed w-full bottom-0 h-14 items-center z-10">
        <Link
          to="/leistungen"
          className={classes}
          activeClassName={activeClasses}
        >
          <FaHorseHead className="navi-icon" />
          Leistungen
        </Link>
        <Link
          to="/ueber-uns"
          className={classes}
          activeClassName={activeClasses}
        >
          <FaUsers className="navi-icon" />
          Über uns
        </Link>
        <Link to="/preise" className={classes} activeClassName={activeClasses}>
          <FaEuroSign className="navi-icon" />
          Preise
        </Link>
        <Link to="/kontakt" className={classes} activeClassName={activeClasses}>
          <FaAddressCard className="navi-icon" />
          Kontakt
        </Link>
        <Link
          to="/impressionen"
          className={classes}
          activeClassName={activeClasses}
        >
          <FaImage className="navi-icon" />
          Impressionen
        </Link>
      </nav>
    </header>
  )
}

export default Header
