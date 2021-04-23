import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"

// markup
const IndexPage = () => {
  const data = {}
  data.heading = "Entdecke die Freiheit"
  data.text = `In Riesen im wunderschönen Pfaffenwinkel bieten wir Pferden und Ponys
  eine artgerechte, auf ihre Bedürfnisse angepasste Haltung in einem
  innovativen Aktivstall.`
  return (
    <Layout>
      <SEO title="Startseite"></SEO>
      <Hero data={data}></Hero>
      <div className="md:hyphens md:grid md:grid-cols-3 md:gap-4 mt-auto">
        <div className="cart blur">
          <p className="big-text">
            Wir haben jahrelange <span className="hl">Erfahrung </span>
            in der <span className="hl">Pensionspferdehaltung</span> und im{" "}
            <span className="hl">Turniergeschehen</span>
          </p>
          <p className="text-xs sm:text-base">
            Uns ist es eine Herzensangelegenheit, natürliche Haltung und
            Training in Einklang zu bringen
          </p>
        </div>
        <div className="cart blur">
          <p className="big-text">
            <span className="hl">Kraftfutterautomaten</span> und{" "}
            <span className="hl">zeitgesteuerte Heuraufen</span> bieten den
            Tieren eine auf sie <span className="hl">abgestimmte Haltung</span>
          </p>
          <p className="text-xs sm:text-base">
            Auch Pferde im Rentenalter finden in unserem Ad Libitum Bereich ihre
            Ruhe.
          </p>
        </div>
        <div className="cart blur">
          <p className="big-text">
            Weite Wiesen, der Lech und vier Badeseen zu Füßen der Alpen laden zu{" "}
            <span className="hl">tollen Ausritten</span> ein
          </p>
          <p className="text-xs sm:text-base">
            Unser Aktivstall liegt in Riesen zwischen Steingaden und Peiting im
            wunderschönen Pfaffenwinkel
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
