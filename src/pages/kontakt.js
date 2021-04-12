import React, { Component } from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import {
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronDown,
  FaChevronUp,
  FaStar,
} from "react-icons/fa"
import axios from "axios"
import * as qs from "query-string"

class KontaktPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
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
      data: qs.stringify({ ...this.state.data, "form-name": "Kontakt" }),
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
    console.log(this.state.data)
  }

  openContactForm = () => {
    this.setState({
      isClosed: !this.state.isClosed,
    })
  }

  render() {
    const data = {}
    data.heading = "Kontakt"
    data.text = `Du hast Interesse an einem Platz in unserem Aktivstall?`

    return (
      <Layout>
        <SEO></SEO>
        <Hero data={data}></Hero>

        <div className="mb-12 max-w-2xl mx-auto bg-black-trans p-4 blur">
          <p>
            Dann ruf uns einfach an oder schreibe uns. Du kannst dich auch schon
            einmal unverbindlich für einen Platz in unserem Stall über folgendes
            Formular bewerben
          </p>
          <button
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
            } p-4 bg-black-trans mb-12 -mx-4 px-4 md:mx-0`}
          >
            <h3 className="pt-0 text-center">
              Hier unverbindlich für unseren Stall bewerben
            </h3>
            {this.state.feedbackMsg && <p>{this.state.feedbackMsg}</p>}

            <form
              name="Kontakt"
              method="POST"
              data-netlify="true"
              onSubmit={event => this.handleSubmit(event)}
              className={`${this.state.sent && "hidden"}`}
              onChange={this.test}
            >
              <input
                ref="form-name"
                type="hidden"
                name="form-name"
                value="Kontakt"
              />
              <div className="form__wrapper">
                <div className="form__headline">
                  Für welches Paket möchtest du dich bewerben?
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8 mb-4">
                  <div
                    className={`${
                      this.state.data.paket === "Aktiv"
                        ? "bg-green-trans"
                        : "transparent"
                    } relative p-8 border border-green-light hover:border-green-100 mb-4 md:mb-0`}
                  >
                    <div className="flex flex-col justify-center items-center">
                      <div className="text-lg mb-2">Aktivpaket</div>
                      <FaStar className="w-4 h-4 text-purple-light mb-4" />
                      <div className="text-sm font-bold text-center">
                        400 EUR pro Monat
                      </div>
                      <div className="text-sm text-center">
                        Monatlicher Abäppeldienst
                      </div>
                    </div>
                    <input
                      className="w-full h-full absolute left-0 top-0 opacity-0"
                      type="radio"
                      name="paket"
                      value="Aktiv"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div
                    className={`${
                      this.state.data.paket === "Premium"
                        ? "bg-green-trans"
                        : "transparent"
                    } relative p-8 border border-green-light hover:border-green-100`}
                  >
                    <div className="flex flex-col justify-center items-center">
                      <div className="text-lg mb-2">Premiumpaket</div>
                      <div className="flex mb-4">
                        <FaStar className="w-4 h-4 text-purple-light" />
                        <FaStar className="w-4 h-4 text-purple-light" />
                      </div>
                      <div className="text-sm font-bold text-center">
                        450 EUR pro Monat
                      </div>
                      <div className="text-sm text-center">
                        Kein Abäppeldienst notwendig
                      </div>
                    </div>
                    <input
                      className="w-full h-full absolute left-0 top-0 opacity-0"
                      type="radio"
                      name="paket"
                      value="Premium"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form__wrapper">
                <div className="form__headline">Persönliche Angaben</div>
                <div className="form__line">
                  <div>
                    <label htmlFor="name">Vor- und Nachname</label>
                    <input
                      type="text"
                      name="name"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email-Adresse (Pflichtfeld)</label>
                    <input
                      type="email"
                      name="email"
                      onChange={this.checkEmail}
                      required
                    />
                  </div>
                </div>
                <div className="form__line">
                  <div>
                    <label htmlFor="Telefonnummer">Telefonnummer</label>
                    <input
                      type="text"
                      name="Telefonnummer"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form__wrapper">
                <div className="form__headline">Angaben zum Pferd</div>
                <div className="form__line">
                  <div>
                    <label htmlFor="Name des Pferdes">Name des Pferdes</label>
                    <input
                      type="text"
                      name="Name des Pferdes"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="Rasse des Pferdes">Rasse des Pferdes</label>
                    <input
                      type="text"
                      name="Rasse des Pferdes"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="md:grid md:grid-cols-12 md:gap-4">
                  <div className="md:col-span-5">
                    <label htmlFor="Geschlecht">Geschlecht</label>
                    <input
                      type="text"
                      name="Geschlecht"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="Stockmaß">Stockmaß in cm</label>
                    <input
                      type="number"
                      name="Stockmaß"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="Alter">Alter</label>
                    <input
                      type="number"
                      name="Alter"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="md:flex">
                  <div className="mb-4 md:mr-4">
                    <label htmlFor="Fütterung">Fütterung</label>
                    <div>
                      <div className="flex items-center">
                        <input
                          className="mr-2"
                          type="radio"
                          name="Fütterung"
                          onChange={this.handleChange}
                          value="leichtfuttrig"
                        />
                        <span>leichtfuttrig</span>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="mr-2"
                          type="radio"
                          name="Fütterung"
                          onChange={this.handleChange}
                          value="schwerfuttrig"
                        />
                        <span>schwerfuttrig</span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 md:mr-4">
                    <label htmlFor="Beschlag">Beschlag</label>
                    <div>
                      <div className="flex items-center">
                        <input
                          className="mr-2"
                          type="radio"
                          name="Beschlag"
                          onChange={this.handleChange}
                          value="Barhuf"
                        />
                        <span>Barhuf</span>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="mr-2"
                          type="radio"
                          name="Beschlag"
                          onChange={this.handleChange}
                          value="Beschlag"
                        />
                        <span>Beschlag</span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 md:mr-4">
                    <label htmlFor="Beschlag">Krankheiten</label>
                    <div>
                      <div className="flex items-center">
                        <input
                          className="mr-2"
                          type="checkbox"
                          name="Krankheit EMS"
                          onChange={this.handleChange}
                          value="Ja"
                        />
                        <span>EMS</span>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="mr-2"
                          type="checkbox"
                          name="Krankheit ECS"
                          onChange={this.handleChange}
                          value="Ja"
                        />
                        <span>ECS</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="Weitere Krankheiten">
                    Weitere Krankheiten
                  </label>
                  <textarea
                    rows="3"
                    name="Weitere Krankheiten"
                    placeholder="Sonstige Krankheiten hier beschreiben"
                    onChange={this.handleChange}
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="Gesundheitliche Besonderheiten">
                    Gesundheitliche Besonderheiten
                  </label>
                  <textarea
                    rows="3"
                    name="Gesundheitliche Besonderheiten"
                    placeholder="Gesundheitliche Besonderheiten / Rehe / Allergien / momentaner Futterzustand"
                    onChange={this.handleChange}
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="Bisheriger Rang in der Herde">
                    Bisheriger Rang in der Herde
                  </label>
                  <textarea
                    rows="3"
                    name="Bisheriger Rang in der Herde"
                    placeholder="Bisheriger Rang in der Herde (Chef/Mittel/Niedrig)"
                    onChange={this.handleChange}
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="Bisheriger Stall und Grund für den Wechsel">
                    Bisheriger Stall und Grund für den Wechsel
                  </label>
                  <textarea
                    rows="3"
                    name="Bisheriger Stall und Grund für den Wechsel"
                    placeholder="Bisheriger Stall und Grund für den Wechsel"
                    onChange={this.handleChange}
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="Darf das Pferd auf die Weide?">
                    Darf das Pferd auf die Weide?
                  </label>
                  <textarea
                    rows="3"
                    name="Darf das Pferd auf die Weide?"
                    placeholder="Darf ihr Pferd auf die Weide? Wenn ja, nur stundenweise?"
                    onChange={this.handleChange}
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="Gab es in Ihrem bisherigen Stall in den letzten 6 Monaten ansteckende Krankheiten?">
                    Gab es in Ihrem bisherigen Stall in den letzten 6 Monaten
                    ansteckende Krankheiten?
                  </label>
                  <textarea
                    rows="3"
                    name="Gab es in Ihrem bisherigen Stall in den letzten 6 Monaten ansteckende Krankheiten?"
                    placeholder="Gab es in Ihrem bisherigen Stall in den letzten 6 Monaten ansteckende Krankheiten?"
                    onChange={this.handleChange}
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="Wann wurde das letzte Mal entwurmt?">
                    Wann wurde das letzte Mal entwurmt?
                  </label>
                  <textarea
                    rows="3"
                    name="Wann wurde das letzte Mal entwurmt?"
                    placeholder="Wann wurde das letzte Mal entwurmt?"
                    onChange={this.handleChange}
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="Bemerkungen">Bemerkungen</label>
                  <textarea
                    rows="3"
                    name="Bemerkungen"
                    placeholder="Weitere Bemerkungen und Anmerkungen"
                    onChange={this.handleChange}
                  ></textarea>
                </div>
              </div>
              <button
                className="w-full text-center p-2 border border-green-light text-white bg-green-trans hover:bg-green-100"
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
