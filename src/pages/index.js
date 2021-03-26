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
      <SEO></SEO>
      <Hero data={data}></Hero>
      <div className="md:hyphens md:grid md:grid-cols-3 md:gap-4">
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
            Wir haben jahrelange <span className="hl">Erfahrung </span>
            in der <span className="hl">Pensionspferdehaltung</span> und im{" "}
            <span className="hl">Turniergeschehen</span>
          </p>
          <p className="text-xs sm:text-base">
            Uns ist es eine Herzensangelegenheit, natürliche Haltung und
            Training in Einklang zu bringen
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
