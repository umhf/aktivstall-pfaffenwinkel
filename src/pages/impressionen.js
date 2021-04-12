import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"

const ImpressionenPage = () => {
  const data = {}
  data.heading = "Impressionen"
  data.text = ``
  return (
    <Layout>
      <SEO></SEO>
      <Hero data={data}></Hero>
      <script src="https://apps.elfsight.com/p/platform.js" defer></script>
      <div className="elfsight-app-e2aba452-dcef-4b09-9056-2b03cc0af0d1"></div>
    </Layout>
  )
}

export default ImpressionenPage
