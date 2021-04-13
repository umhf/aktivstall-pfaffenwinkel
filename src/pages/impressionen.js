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
      <iframe
        src="https://snapwidget.com/embed/928992"
        className="snapwidget-widget"
        allowtransparency="true"
        frameborder="0"
        scrolling="no"
        style={{
          border: "none",
          overflow: "hidden",
          width: 765 + "px",
          height: 510 + "px",
        }}
      ></iframe>
    </Layout>
  )
}

export default ImpressionenPage
