import React from "react"
import { Link } from "gatsby"
import { FaMobileAlt, FaEnvelope } from "react-icons/fa"

const Header = () => {
  const classes = "text-xxs xs:text-xs"
  const activeClasses = "text-green-100"
  return (
    <header>
      {/*             <a href="#" class="block">
    <img class="h-6 md:h-8" src="" alt="Logo" title="Logo"/>
  </a> */}
      <div
        id="metanavi"
        className="relative container bg-green-trans py-2 px-5 text-xs flex justify-end"
      >
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
      <nav className="text-gray-100 bg-white-trans flex justify-around fixed w-full bottom-0 h-10 items-center z-10">
        <Link to="/" className={classes} activeClassName={activeClasses}>
          Startseite
        </Link>
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
        <Link to="/preise" className={classes} activeClassName={activeClasses}>
          Preise
        </Link>
        <Link to="/kontakt" className={classes} activeClassName={activeClasses}>
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
    </header>
  )
}

export default Header
