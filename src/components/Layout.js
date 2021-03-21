import React from "react"
import Header from "./Header"
import BackgroundImage from "../components/FullBackgroundImage"

const Layout = ({ children }) => {
  return (
    <BackgroundImage>
      <Header></Header>
      {children}
    </BackgroundImage>
  )
}

export default Layout
