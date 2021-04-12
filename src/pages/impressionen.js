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
      <div id="fb-root"></div>
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/de_DE/sdk.js#xfbml=1&version=v10.0"
        nonce="0HMK1WMI"
      ></script>
      <SEO></SEO>
      <Hero data={data}></Hero>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/aktivstall.pfaffenwinkel/"
        data-tabs="timeline"
        data-width="500"
        data-height=""
        data-small-header="true"
        data-adapt-container-width="false"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/aktivstall.pfaffenwinkel/"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/aktivstall.pfaffenwinkel/">
            Aktivstall Pfaffenwinkel
          </a>
        </blockquote>
      </div>
      {/* <script src="https://apps.elfsight.com/p/platform.js" defer></script>
      <div className="elfsight-app-e2aba452-dcef-4b09-9056-2b03cc0af0d1"></div> */}
    </Layout>
  )
}

export default ImpressionenPage
