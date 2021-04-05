import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import { FaStar } from "react-icons/fa"

const PreisePage = () => {
  const data = {}
  data.heading = "Unsere Preise"
  data.text = `Wir bieten ein attraktives und individualisierbares Preispaket`
  return (
    <Layout>
      <SEO></SEO>
      <Hero data={data}></Hero>
      <div class="preis-wrapper mb-12 max-w-2xl mx-auto bg-black-trans p-4 blur">
        <h2 className="text-center">Aktivpaket</h2>
        <div className="text-green-100 font-bold text-6xl flex justify-center p-4 m-4 border border-l-0 border-r-0 border-gray-light">
          400{" "}
          <span className="font-normal text-green-lightTrans text-base ml-2">
            EUR p.M.
          </span>
        </div>
        <ul>
          <li>
            <FaStar className="icon" />
            <span className="w-full">Tägliche Kontrolle des Pferdes</span>
          </li>
          <li>
            <FaStar className="icon" />
            <span className="w-full">
              Tägliches Säubern des Aktivstalles und der Liegeflächen
            </span>
          </li>
          <li>
            <FaStar className="icon" />
            <span className="w-full">
              Fütterung über Kraftfutterautomat von Hafer, Pellet (bis 1 kg im
              Preis enthalten)
            </span>
          </li>
          <li>
            <FaStar className="icon" />
            <span className="w-full">
              Füttern von Heu über die Raufutterstation
            </span>
          </li>
          <li>
            <FaStar className="icon" />
            <span className="w-full">
              Bei Bedarf Zugang zum Ruhebereich (für ältere Pferde)
            </span>
          </li>
          <li>
            <FaStar className="icon" />
            <span className="w-full">
              Bei Bedarf Zugang zur Weide per Selektion
            </span>
          </li>
          <li>
            <FaStar className="icon" />
            <span className="w-full">Ein Schrank in der Sattelkammer</span>
          </li>
          <li>
            <FaStar className="icon" />
            <span className="w-full">Nutzung der gesamten Anlage</span>
          </li>
          <li>
            <FaStar className="icon" />
            <span className="w-full">Mineralfutter zubuchbar</span>
          </li>
          <li>
            <span className="w-full">
              Einmal im Monat am Wochenende eigener Abäppeldienst mit weiterem
              Einsteller
            </span>
          </li>
        </ul>
        <h2 className="text-center mt-4">Premiumpaket</h2>
        <div className="text-green-100 font-bold text-6xl flex justify-center p-4 m-4 border border-l-0 border-r-0 border-gray-light">
          +50{" "}
          <span className="font-normal text-green-lightTrans text-base ml-2">
            EUR p.M.
          </span>
        </div>
        <li>
          <FaStar className="icon" />
          <span className="w-full">Kein Abäppeldienst notwendig</span>
        </li>
      </div>
    </Layout>
  )
}

export default PreisePage
