import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { StaticImage } from "gatsby-plugin-image"

const LeistungenPage = () => {
  const data = {}
  data.heading = "Unsere Leistungen"
  data.text = `Artgerechte Haltung im innovativen Aktivstall`
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplaySpeed: 4000,
  }
  return (
    <Layout>
      <SEO title="Leistungen"></SEO>
      <Hero data={data}></Hero>
      <div className="mb-12 max-w-2xl w-full mx-auto">
        <Slider {...settings}>
          <div className="cart--leistungen relative px-1 max">
            <StaticImage
              src="../images/leistungen/1_luftaufnahme.jpeg"
              alt="Luftaufnahme"
              placeholder="blurred"
            />
            <div className="leistungen">
              <h2>Anlage und Trail</h2>
              <ul className="text-sm">
                <li>
                  ca. 10.000 m² befestigte Trailanlage mit unterschiedlichen
                  Untergründen
                </li>
                <li>
                  Trainingseffekt durch an- und abfallendes Gelände ohne Matsch
                </li>
                <li>
                  Schleuse zum sicheren Entfernen der Pferde aus der Herde.
                </li>
                <li>
                  Zusätzliche Liege- und Wälzplätze im Aussenbereich mit
                  staubfreiem Waldboden
                </li>
                <li>
                  Kräuter, Knabberäste, Salzlecksteine, Bürstenbäume und
                  Wasserfurt
                </li>
              </ul>
            </div>
          </div>
          <div className="cart--leistungen relative px-1">
            <StaticImage
              src="../images/leistungen/2_ruheraeume.jpeg"
              alt="Ruheräume"
              placeholder="blurred"
            />
            <div className="leistungen">
              <h2>Ruheräume</h2>
              <ul className="text-sm">
                <li>
                  Eine große Liegehalle mit staubfreiem und weichem
                  Waldboden-Einstreu
                </li>
                <li>
                  Eine weitere Liegehalle, ebenfalls mit staubfreiem und weichem
                  Waldboden-Einstreu
                </li>
                <li>Zwei Integrationseinheiten</li>
                <li>Eine Krankenbox</li>
              </ul>
            </div>
          </div>
          <div className="cart--leistungen relative px-1">
            <StaticImage
              src="../images/leistungen/3_fuetterung.jpeg"
              alt="Kraftfutterautomaten"
              placeholder="blurred"
            />
            <div className="leistungen">
              <h2>Fütterung</h2>
              <ul className="text-sm">
                <li>
                  Kraftfutterautomaten mit zwei Komponenten (auf das Pferd
                  angepasst im Preis bis 1 kg / Pferd enthalten) plus
                  Mineralfutter mit Selektion zur Weide, zurück auf die Anlage
                  oder zum ad libitum Bereich
                </li>
                <li>Große zeitgesteuerte Heuraufen</li>
                <li>Extensiv erzeugtes Heu von eigenen Flächen</li>
                <li>Beheizte Tränke auf dem Trail</li>
              </ul>
            </div>
          </div>
          <div className="cart--leistungen relative px-1">
            <StaticImage
              src="../images/leistungen/4_einsteller.jpeg"
              alt="Für unsere Einsteller"
              placeholder="blurred"
            />
            <div className="leistungen">
              <h2>Für unsere Einsteller</h2>
              <ul className="text-sm">
                <li>Sattelkammer</li>
                <li>Deckenkammer</li>
                <li>Waschplatz und großzügige überdachte Putzplätze</li>
                <li>
                  Reiterstübchen mit Kamin, Küchenzeile und Terrasse mit Blick
                  auf die Anlage und die Pferde
                </li>
                <li>Futterkammer</li>
              </ul>
            </div>
          </div>
          <div className="cart--leistungen relative px-1">
            <StaticImage
              src="../images/leistungen/5_training.jpg"
              alt="Trainingsplätze"
              placeholder="blurred"
            />
            <div className="leistungen">
              <h2>Trainingsmöglichkeiten</h2>
              <ul className="text-sm">
                <li>Reitplatz</li>
                <li>Reithalle</li>
                <li>ganzjährig bereitbar</li>
              </ul>
            </div>
          </div>
        </Slider>
      </div>
    </Layout>
  )
}

export default LeistungenPage
