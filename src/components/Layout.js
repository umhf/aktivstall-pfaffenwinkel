import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import BackgroundImage from "../components/FullBackgroundImage"

const Layout = ({ children }) => {
  return (
    <>
      <BackgroundImage></BackgroundImage>
      <Header></Header>
      <main className="relative container">{children}</main>
      <Footer></Footer>
    </>
  )
}

export default Layout
