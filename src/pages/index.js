import * as React from "react"
import Layout from "../components/Layout"
import logo from "../images/logo-light.svg"
import { FaChevronDown } from "react-icons/fa"

// markup
const IndexPage = () => {
  return (
    <Layout>
      <div
        id="hero"
        class="relative text-shadow h-screen mx-auto text-center pt-11"
      >
        <img src={logo} alt="Logo" className="mx-auto w-36" />
        <h2>
          <span className="font-paris text-green-100">Aktivstall </span>
          Pfaffenwinkel
        </h2>
        <h1 className="">Entdecke die Freiheit</h1>
        <p>
          In Riesen im wunderschönen Pfaffenwinkel bieten wir Pferden und Ponys
          eine artgerechte, auf ihre Bedürfnisse angepasste Haltung in einem
          innovativen Aktivstall.
        </p>
        <div
          id="scroll-down"
          className="flex justify-center absolute bottom-28 w-full"
        >
          <FaChevronDown className="stroke-current text-green-100 w-8 h-8" />
        </div>
      </div>
      <div>unterer teil</div>
    </Layout>
  )
}

export default IndexPage
