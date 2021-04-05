import React, { Component, useState } from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import {
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa"
import axios from "axios"
import * as qs from "query-string"

class KontaktPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: { email: "", message: "" },
      feedbackMsg: "",
      sent: false,
      valid: false,
      isClosed: true,
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const axiosOptions = {
      url: window.location.pathname,
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify({
        "form-name": "contact",
        email: this.state.data.email,
        message: this.state.data.message,
      }),
    }
    axios(axiosOptions)
      .then(() => {
        this.setState({
          feedbackMsg:
            "Vielen Dank für deine Bewerbung. Wir melden uns umgehend.",
          sent: true,
        })
      })
      .catch(() => {
        this.setState({
          feedbackMsg:
            "Das hat leider nicht geklappt. Bitte versuche es später noch einmal oder kontaktiere uns per Email oder Telefon",
          sent: true,
        })
      })
  }

  checkEmail = e => {
    this.handleChange(e)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    re.test(e.target.value)
      ? this.setState({ valid: true })
      : this.setState({ valid: false })
  }

  handleChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    })
  }

  openContactForm = () => {
    this.setState({
      isClosed: !this.state.isClosed,
    })
  }

  render() {
    //const [isClosed, setOpen] = useState("false")
    //this.state = {isClosed: false}
    /* const toggleClass = () => {
      this.setOpen(!isClosed)
    } */
    const data = {}
    data.heading = "Kontakt"
    data.text = `Du hast Interesse an einem Platz in unserem Aktivstall?`

    const { email, message } = this.state.data

    return (
      <Layout>
        <SEO></SEO>
        <Hero data={data}></Hero>

        <div class="preis-wrapper mb-12 max-w-2xl mx-auto bg-black-trans p-4 blur">
          <p>
            Dann ruf uns einfach an oder schreibe uns. Du kannst dich auch schon
            einmal unverbindlich für einen Platz in unserem Stall über folgendes
            Formular bewerben
          </p>
          <button
            class="accordion"
            onClick={this.openContactForm}
            className={`${
              this.state.isClosed ? "border-b" : "border-b-0"
            } flex items-center border border-l-0 border-r-0 border-gray-light p-4 mx-auto my-4`}
          >
            Bewerbungsformular unverbindlich ausfüllen{" "}
            <FaChevronUp
              className={`${
                !this.state.isClosed ? "hidden" : "block"
              } text-purple-light ml-2`}
            />
            <FaChevronDown
              className={`${
                this.state.isClosed ? "hidden" : "block"
              } text-purple-light ml-2`}
            />
          </button>
          <div
            className={`${
              this.state.isClosed ? "hidden" : "block"
            } mx-auto p-4 pt-0`}
          >
            <h3 className="pt-0 text-center">
              Hier unverbindlich für unseren Stall bewerben
            </h3>
            {this.state.feedbackMsg && <p>{this.state.feedbackMsg}</p>}

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={event => this.handleSubmit(event)}
              className={` ${this.state.sent && "hidden"}`}
              onChange={this.test}
            >
              <input
                ref="form-name"
                type="hidden"
                name="form-name"
                value="contact"
              />
              <div>
                <div className="my-5 text-sm">
                  <label htmlFor="email">Email-Adresse (i18n tbd)</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.checkEmail}
                    required
                    className="rounded-sm px-4 py-3 mt-2 focus:outline-none w-full bg-gray-10"
                    placeholder="Email"
                  />
                </div>
                <div className="my-5 text-sm">
                  <label htmlFor="message">Nachricht</label>

                  <textarea
                    name="message"
                    value={message}
                    onChange={this.handleChange}
                    required
                    className="rounded-sm px-4 py-3 mt-2 focus:outline-none w-full bg-gray-10"
                    placeholder="Ihre Nachricht"
                  />
                </div>
              </div>
              <button
                data={{ state: !this.state.valid, type: "submit" }}
                type="submit"
              >
                Absenden
              </button>
            </form>
          </div>
          <form></form>
          <div className="flex items-baseline">
            <FaMapMarkedAlt className="mr-2 text-purple-light" />
            <p>
              Familie Hindlang
              <br />
              Riesen 15
              <br />
              86989 Steingaden
            </p>
          </div>
          <div className="flex items-center mb-2">
            <FaEnvelope className="mr-2 text-purple-light" />
            <a href="mailto:michaela@aktivstall-pfaffenwinkel.de">
              michaela@aktivstall-pfaffenwinkel.de
            </a>
          </div>
          <div className="flex items-baseline">
            <FaPhoneAlt className="mr-2 text-purple-light" />
            <div className="flex flex-col">
              <a href="tel:+4915254180038">0152 541 800 38</a>
              <a href="tel:+4988626165">08862 6165</a>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default KontaktPage
