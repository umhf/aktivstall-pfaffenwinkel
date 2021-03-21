import React from "react"
import Header from "./Header"
import BackgroundImage from "../components/FullBackgroundImage"

const Layout = ({ children }) => {
  return (
    <BackgroundImage>
      <Header></Header>
      <main className="font-karla">{children}</main>
    </BackgroundImage>
  )
}

export default Layout
