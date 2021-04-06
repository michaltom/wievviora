import React from "react"
import styled from "styled-components"
//import heroImage from "../assets/images/hero-image.png"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Wrapper = styled.div`
  width: 100%;
`

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { eq: "hero-with-text" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1440, quality: 90) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      {/* <HeroTitle>Wievviora</HeroTitle> */}
      <Img
        fluid={data.allFile.edges[0].node.childImageSharp.fluid}
        alt="hero"
      ></Img>
    </Wrapper>
  )
}

export default Hero
