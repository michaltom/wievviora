import React from "react"
import GlobalStyle from "../assets/styles/globalStyles"
import Navigation from "../components/navigation"

// if (typeof window !== "undefined") {
//   // eslint-disable-next-line global-require
//   require("smooth-scroll")('a[href*="#"]', {
//     speed: 200,
//     speedAsDuration: true,
//     easing: "easeInOutCubic",
//   })
// }

const Layout = ({ children }) => (
  <>
    <GlobalStyle></GlobalStyle>
    <Navigation></Navigation>
    {children}
  </>
)

export default Layout
