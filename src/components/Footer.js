import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo-light.svg"

const Footer = () => {
  return (
    <footer className="blur bg-gradient-to-b from-green-trans to-blue-trans container py-5 footer relative bg-green-trans">
      <Link to="/">
        <img src={logo} alt="Logo" className="mx-auto w-36" />
      </Link>

      <div className="text-xs flex justify-evenly p-3">
        <Link to="/datenschutz">Datenschutz</Link>
        <Link to="/impressum">Impressum</Link>
      </div>
    </footer>
  )
}

export default Footer
