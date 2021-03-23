import React from "react"
import Header from "./Header"
import BackgroundImage from "../components/FullBackgroundImage"

const Layout = ({ children }) => {
  return (
    <>
      <BackgroundImage></BackgroundImage>
      <Header></Header>
      <main className="relative container mx-auto px-5 font-karla pb-14">
        {children}
      </main>
    </>
  )
}

export default Layout
