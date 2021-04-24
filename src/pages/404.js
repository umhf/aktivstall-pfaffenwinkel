import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"

const NotFoundPage = () => {
  const data = {}
  data.heading = "Herrschaftsseiten"
  data.text = ``
  return (
    <Layout>
      <SEO title="Impressum"></SEO>
      <Hero data={data}></Hero>
      <div className="mb-12 mx-auto bg-black-trans p-4 blur">
        <p>die Seite gibt's leider net</p>
        <Link to="/">Hier geht's zruck zur Startseitn.</Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
