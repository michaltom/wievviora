import React from "react"
import styled from "styled-components"
import backgroundImg from "../assets/images/paprotka.png"
import TitleText from "./atoms/titleText"
import facebookIcon from "../assets/images/facebook-square.svg"
import instagramIcon from "../assets/images/instagram-square.svg"
import { Link } from "gatsby"

const Wrapper = styled.div`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  color: white;
  min-height: 40vh;
  display: flex;
  padding: 4rem 0;
`
const LeftSide = styled.div`
  flex: 1;
  padding: 3em;
`
const RightSide = styled.div`
  flex: 1;
  position: relative;

  &:before {
    width: 4px;
    height: 100%;
    border-radius: 20px;
    background: white;
    content: " ";
    position: absolute;
  }
`

const StyledText = styled.p`
  margin: 0 0 1rem 1rem;
`

const StyledEmail = styled.p`
  margin: 3rem;
`

const StyleTitleText = styled(TitleText)`
  margin: 0;
`
const SocialLink = styled(Link)`
  width: 2rem;
  margin-left: 1rem;
`

const Contact = () => {
  return (
    <Wrapper id="contact">
      <LeftSide>
        <StyleTitleText>Kontakt</StyleTitleText>
        <StyledText>
          Jeżeli masz pytania lub chesz umówić się na sesję, skonkatkuj się ze
          mną mailowo lub przez profile w social mediach:
        </StyledText>
        <StyledEmail>hello@wievviora.pl</StyledEmail>
        <SocialLink to="https://facebook.com">
          <img src={facebookIcon} alt="facebook"></img>
        </SocialLink>
        <SocialLink to="https://instagram.com">
          <img src={instagramIcon} alt="instagram"></img>
        </SocialLink>
      </LeftSide>
      <RightSide></RightSide>
    </Wrapper>
  )
}

export default Contact
