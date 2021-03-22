import React from "react"
import Header from "./Header"
import BackgroundImage from "../components/FullBackgroundImage"

const Layout = ({ children }) => {
  return (
    <BackgroundImage>
      <Header></Header>
      <main className="container mx-auto px-5 font-karla pb-14">
        {children}
      </main>
    </BackgroundImage>
  )
}

export default Layout
