import React from "react"
import styled from "styled-components"

const StyledTitleText = styled.h1`
  font-size: 6rem;
  font-family: "Dancing Script";
  font-weight: lighter;
  color: white;
`

const TitleText = ({ className, children }) => (
  <StyledTitleText className={className}>{children}</StyledTitleText>
)

export default TitleText
