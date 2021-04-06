import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

//import photo from "../assets/images/ola-own.png"

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: row;
  color: white;
`

const Wrapper = styled.div`
  flex: 2;
  padding: 55px;
  position: relative;
  width: 100%;
`
const ParagraphWrapper = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  margin-left: 2rem;
  padding-top: 10rem;

  p:first-child {
    font-size: 1.4rem;
  }

  p {
    font-size: 0.9rem;
    width: 75%;
  }
`

const HeaderText = styled.h1`
  position: absolute;
  right: -8rem;
  top: 0rem;
  z-index: 1;
  font-size: 6rem;
  font-family: "Dancing Script";
  font-weight: lighter;
`

const AboutImage = styled(Img)`
  box-shadow: 15px 15px 8px hsla(0, 4%, 14%, 100%);
`

const SectionAbout = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { eq: "ola-own" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 528, quality: 90) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)
  return (
    <SectionWrapper id="about">
      <Wrapper>
        <HeaderText>Cześć!</HeaderText>
        <AboutImage
          fluid={data.allFile.edges[0].node.childImageSharp.fluid}
          alt="ola"
        ></AboutImage>
      </Wrapper>
      <ParagraphWrapper>
        <p>Jestem Ola i robię zdjęcia. :)</p>
        <p>
          Uwielbiam góry, rower i sporty zimowe. Hobbystycznie zajmuję się
          również fotografią a ta strona to moje skromne portfolio
          fotograficzne. Robię zdjęcia w naturalnym i klasycznym stylu, bez
          zbędnych udziwnień, które szybko wychodzą z mody. Znajdziecie tutaj
          głównie plenerowe sesje zdjęciowe oraz realizacje komercyjne z
          markami, z którymi miałam przyjemność współpracować.
        </p>
        <p>Potrzebujesz zdjęć? Marzy Ci się naturalna sesja zdjęciowa?</p>
        <p>
          Pisz śmiało, na pewno coś wspólnie wymyślimy. Zapraszam również na
          moje social media, gdzie na bierząco możesz sledzić moją twórczość.
        </p>
      </ParagraphWrapper>
    </SectionWrapper>
  )
}

export default SectionAbout
