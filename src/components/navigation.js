import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import logo from "../assets/images/logo.svg"

const NavWrapper = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: hsla(0, 0%, 100%, 100%);
  left: 0;
  top: 0;
  width: 100%;
  height: 3rem;
  justify-content: space-around;
  background-color: hsla(0, 4%, 14%, 100%);
  line-height: 17px;
  font-size: 0.9rem;
  font-weight: light;
  padding: 0 4rem;
  z-index: 9999;
`

const NavigationItems = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: flex-end;
  gap: 4rem;

  width: 100%;
`

const Logo = styled.span`
  /* text-transform: uppercase; */
  /* font-size: 1.6rem; */
  /* font-weight: bolder; */
  margin-right: 0;
  /* a {
    text-decoration: none;
    color: inherit;
  } */
`

const NavigationItem = styled.li`
  a {
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: inherit;
  }
`

const Navigation = () => (
  <NavWrapper>
    <Logo>
      {/* <Link to="/"> */}
      <img src={logo} alt="logo wievviora"></img>

      {/* </Link> */}
    </Logo>
    <NavigationItems>
      <NavigationItem>
        <Link to="/">O mnie</Link>
      </NavigationItem>
      <NavigationItem>
        <Link to="/gallery">Portfolio</Link>
      </NavigationItem>
      <NavigationItem>
        <Link to="/">Kontakt</Link>
      </NavigationItem>
    </NavigationItems>
  </NavWrapper>
)

export default Navigation
