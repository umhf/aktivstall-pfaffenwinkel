import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import { StaticImage } from "gatsby-plugin-image"

const UeberUnsPage = () => {
  const data = {}
  data.heading = "Über uns"
  data.text = `Wir haben unseren Traum im Mai 2020 verwirklicht`
  return (
    <Layout>
      <SEO></SEO>
      <Hero data={data}></Hero>
      <div className="mb-12 max-w-2xl mx-auto">
        <StaticImage
          src="../images/ueber-uns/fam_hindelang.jpeg"
          alt="Familie Hindelang"
          placeholder="blurred"
        />
        <div className="bg-black-trans p-4 blur ueber-uns-cart">
          <p>
            Der landwirtschaftliche Betrieb ist bereits in 4. Generation und
            wird von Manfred und Michaela Hindelang gemeinsam geführt. Bis 2019
            haben wir Milchviehhaltung im modernen Außenklimastall betrieben.
          </p>
          <p>
            Durch einen schweren Unfall 2018 von Manfred Hindelang, wurde klar,
            den Betrieb nun auf den bereits seit Jahren geplanten Traum von
            einem eigenen Pensionsstall, in dem Pferde artgerecht und natürlich
            leben können, umzustellen. Es ist uns eine Herzensangelegenheit,
            natürliche Haltung und Training in Einklang zu bringen.
          </p>

          <ul>
            <li>
              Michaela Hindelang, gelernte Groß- und Außenhandelskauffrau,
              Weiterbildung zur Agrarbürofachfrau, erfolgreiche Prüfung zum
              Sachkundenachweis in Pferdehaltung und Service
            </li>
            <li>
              Manfred Hindelang, gelernter Landwirt, für die Außenanlage
              zuständig
            </li>
            <li>
              Franziska Hindelang, Tochter, mit Reitabzeichen RA6, hilft mit, so
              wie es ihre Arbeitszeiten erlauben
            </li>
            <li>Martin Hindelang, Sohn, rechte Hand von Manfred Hindelang</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default UeberUnsPage
