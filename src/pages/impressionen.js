import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Helmet } from "react-helmet"
import Hero from "../components/Hero"

const ImpressionenPage = () => {
  const data = {}
  data.heading = "Impressionen"
  data.text = ``
  return (
    <Layout>
      <SEO title="Impressionen"></SEO>
      <Helmet>
        <script
          src="https://cdn.lightwidget.com/widgets/lightwidget.js"
          type="text/javascript"
        />
      </Helmet>
      <Hero data={data}></Hero>
      <div className="mb-12 mx-auto bg-black-trans p-4 blur">
        <iframe
          title="instagram"
          src="https://cdn.lightwidget.com/widgets/b625622304055c12957b9d6359039701.html"
          scrolling="no"
          allowtransparency="true"
          className="lightwidget-widget"
          style={{ width: "100%", border: 0, overflow: "hidden" }}
        ></iframe>
      </div>
    </Layout>
  )
}
export default ImpressionenPage
