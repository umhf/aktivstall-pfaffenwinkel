import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const FullBackgroundImage = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "horses-bg.jpeg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  const imageData = data.desktop.childImageSharp.fluid
  return (
    <BackgroundImage
      style={{ position: "" }}
      Tag="div"
      className="bg fixed h-screen w-full bg-fixed bg-no-repeat bg-black-trans"
      fluid={imageData}
      backgroundColor={`#040e18`}
      title="Fullscreen Background"
      id="fullscreenbg"
      role="img"
      aria-label="Fullscreen Background"
      preserveStackingContext={true}
    >
      {children}
    </BackgroundImage>
  )
}

export default FullBackgroundImage
