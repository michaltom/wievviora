import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import TitleText from "./atoms/titleText"
import Slider from "./slider"

// import Carousel, {
//   autoplayPlugin,
//   slidesToShowPlugin,
// } from "@brainhubeu/react-carousel"
// import "@brainhubeu/react-carousel/lib/style.css"

const Wrapper = styled.div`
  /* width: 100%; */
  position: relative;
  overflow-x: hidden;
  padding: 200px 0;
  margin-left: -30px;
  display: flex;
  flex-direction: column;
`

// const SectionWrapper = styled.section`
//   display: flex;
//   flex-direction: row;
//   color: white;
// `

const StyleTitleText = styled(TitleText)`
  position: absolute;
  top: 100px;
  //padding-top: 100px;
  margin: 0 50%;
  z-index: 998;
`

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 2rem 0 0 30px;
  align-self: center;
  justify-self: center;
  color: white;
  font-weight: normal;
  letter-spacing: 4px;
  text-decoration: none;
`

// const ImagesWrapper = styled.div`
//   display: flex;
//   //padding-bottom: 5rem;
//   gap: 3rem;
//   transform: translateX(-271px);
//   /* width: 120%; */
// `
// const ImgWrapper = styled.div`
//   min-height: 300px;
//   max-height: 455px;
//   width: 100vw;
//   overflow: hidden;
// `

const StyleImg = styled(Img)`
  /* width: 100%; */
  /* max-height: 600px; */
  flex: 0 1 auto;
`

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
        nodes {
          id
          childImageSharp {
            fixed(height: 455, quality: 90) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
  `)

  const images = data.allFile.nodes

  return (
    <Wrapper id="portfolio">
      <StyleTitleText>Portfolio</StyleTitleText>
      <Slider>
        {images.map(({ id, childImageSharp: { fixed } }, index) => (
          <StyleImg fixed={fixed} fadeIn={true} key={id}>
            {console.log(index)}
          </StyleImg>
        ))}
      </Slider>
      <StyledLink to="/gallery/">Zobacz Więcej</StyledLink>
    </Wrapper>
  )
}

export default Portfolio
