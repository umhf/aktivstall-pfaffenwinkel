import React, { useState } from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import {
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa"

const KontaktPage = () => {
  const [isClosed, setOpen] = useState("false")
  const toggleClass = () => {
    setOpen(!isClosed)
  }
  const data = {}
  data.heading = "Kontakt"
  data.text = `Du hast Interesse an einem Platz in unserem Aktivstall?`
  return (
    <Layout>
      <SEO></SEO>
      <Hero data={data}></Hero>

      <div class="preis-wrapper mb-12 max-w-2xl mx-auto bg-black-trans p-4 blur">
        <p>
          Dann ruf uns einfach an oder schreibe uns. Du kannst dich auch schon
          einmal unverbindlich für einen Platz in unserem Stall über folgendes
          Formular bewerben
        </p>
        <button
          class="accordion"
          onClick={toggleClass}
          className={`${
            isClosed ? "border-b" : "border-b-0"
          } flex items-center border border-l-0 border-r-0 border-gray-light p-4 mx-auto my-4`}
        >
          Bewerbungsformular unverbindlich ausfüllen{" "}
          <FaChevronUp
            className={`${
              !isClosed ? "hidden" : "block"
            } text-purple-light ml-2`}
          />
          <FaChevronDown
            className={`${
              isClosed ? "hidden" : "block"
            } text-purple-light ml-2`}
          />
        </button>
        <div class="panel">
          <div
            className={`${
              isClosed ? "hidden" : "block"
            } border border-gray-light border-t-0 mx-auto`}
          >
            <h3 className="pt-0 text-center">
              Hier unverbindlich für unseren Stall bewerben
            </h3>
          </div>
        </div>
        <form></form>
        <div className="flex items-baseline">
          <FaMapMarkedAlt className="mr-2 text-purple-light" />
          <p>
            Familie Hindlang
            <br />
            Riesen 15
            <br />
            86989 Steingaden
          </p>
        </div>
        <div className="flex items-center mb-2">
          <FaEnvelope className="mr-2 text-purple-light" />
          <a href="mailto:michaela@aktivstall-pfaffenwinkel.de">
            michaela@aktivstall-pfaffenwinkel.de
          </a>
        </div>
        <div className="flex items-baseline">
          <FaPhoneAlt className="mr-2 text-purple-light" />
          <div className="flex flex-col">
            <a href="tel:+4915254180038">0152 541 800 38</a>
            <a href="tel:+4988626165">08862 6165</a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default KontaktPage
