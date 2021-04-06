import React from "react"

import SEO from "../components/seo"
import Hero from "../components/hero"
import SectionAbout from "../components/sectionAbout"
import Portfolio from "../components/portfolio"
import Contact from "../components/contact"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero></Hero>
    <SectionAbout></SectionAbout>
    <Portfolio></Portfolio>
    <Contact></Contact>
  </>
)

export default IndexPage
