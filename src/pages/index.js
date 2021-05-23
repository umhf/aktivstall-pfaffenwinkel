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
      <div className="mb-12 mx-auto bg-black-trans p-4 blur">
        <h2>Unsere Philosophie</h2>
        <h3>Aktivstall mit Paddocktrail</h3>

        <p>
          Ein Aktivstall steht für größtmögliche Bewegungsfreiheit, natürliche
          gemeinsame Großherdenhaltung von Stuten und Wallachen sowie ein auf
          unterschiedlichste Bedürfnisse maßgeschneidertes automatisiertes
          Fütterungsmanagement.
        </p>
        <p>
          Die wissenschaftlichen Erkenntnisse der letzten Jahre haben eindeutig
          festgeschrieben, dass die Gesunderhaltung unserer Pferde von drei
          maßgeblichen Säulen/Faktoren unterstützt wird.
        </p>

        <h3>Bewegungsfreiheit</h3>
        <p>
          ....an 365 Tagen im Jahr und dies selbstverständlich unter den
          Voraussetzungen permanent zugänglicher Rückzugs- und Ruheorte.
          Ausreichend regen- und sonnengeschützten Unterständen sowie
          unendlichen Laufwege und Paddocktrails die mit geeigneten
          Bewegungsanreizen bestückt sind. UNSER AKTIVSTALL BIETET DIES AUF
          10000 m2
        </p>
        <h3>Großherdenhaltung</h3>
        <p>
          ... in alters- und geschlechtergemischten Herden entsprechen in jeder
          Hinsicht dem natürlichen Verhalten von Wildpferden. Erst in Großherden
          können sich die dringend erforderlichen Untergruppen bilden die es
          rangniedrigen sowie aktiveren Pferden erst ermöglicht, sich
          Gleichgesinnten anzuschließen ohne ausgegrenzt zu sein. Es gibt somit
          keine Verlierer in einer Herde sondern ausgeglichene
          „Interessengemeinschaften“ die zudem jederzeit ihrem eigenen Rhythmus
          folgen können. UNSER AKTIVSTALL BIETET DIES
        </p>
        <h3>Fütterungsmanagement</h3>
        <p>
          ... durch ein vollelektronisches Fütterungsmanagement ist es möglich,
          jedem einzelnen Pferd der Herde gerecht zu werden. Da der größte Feind
          unserer Pferde die durch Überfütterung verursachten
          Zivilisationskrankheiten sind und diese rapide zugenommen haben liegt
          der Augenmerk ganz besonders auf eine rationierte, dem Grundbedarf
          angemessene Heufütterung, die durch entsprechend elektronische
          Futterraufen gesteuert wird. Alle darüber hinaus gehenden Bedürfnisse
          (z.b. alter Pferde) sollte durch zusätzliche Angebote abgedeckt. UNSER
          AKTIVSTALL BIETET DIES
        </p>
        <p>
          Das Beste ist für uns gerade gut genug so dass wir uns ohne jeden
          Zweifel für den Bau eines Aktivstalls entschieden haben und so in der
          Lage sind, mindestens 40 Pferden dieses Leben bieten zu können. WISSEN
          VERPFLICHTET !!!!
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
