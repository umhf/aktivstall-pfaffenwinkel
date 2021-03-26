import React from "react"
import logo from "../images/logo-light.svg"

const Hero = ({ data }) => {
  return (
    <div
      id="hero"
      className="relative text-shadow mx-auto text-center pt-11 mb-24"
    >
      <img src={logo} alt="Logo" className="mx-auto w-36" />
      <h2>
        <span className="font-paris text-green-100">Aktivstall </span>
        Pfaffenwinkel
      </h2>
      <h1 className="">{data.heading}</h1>
      <p className="max-w-xl mx-auto">{data.text}</p>
    </div>
  )
}

export default Hero
