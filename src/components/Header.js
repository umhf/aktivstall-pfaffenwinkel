import React from "react"
import { Link } from "gatsby"

const Header = () => {
  const classes = "text-xxs"
  const activeClasses = "text-green-100"
  return (
    <header>
      {/*             <a href="#" class="block">
    <img class="h-6 md:h-8" src="" alt="Logo" title="Logo"/>
  </a> */}
      <nav className="bg-white-trans flex justify-around fixed w-full bottom-0 h-7 items-center shadow-lg">
        <Link to="/" className={classes} activeClassName={activeClasses}>
          Startseite
        </Link>
        <Link
          to="/unser-aktivstall"
          className={classes}
          activeClassName={activeClasses}
        >
          Unser Aktivstall
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
