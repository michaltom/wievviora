import React, { useState, useEffect, useCallback } from "react"
import styled, { css } from "styled-components"

const StyledSlider = styled.div`
  display: flex;
  flex-direction: row;
  //padding-bottom: 5rem;
  gap: 40px;
  transition: all 0.5s ease-in-out;
  //transform: translateX(0);
  ${props =>
    props.trans &&
    css`
      transform: translateX(-${props.trans}px);
    `}
`

const ImagesWrapper = styled.div`
  opacity: 1;
`

const Slider = ({ children }) => {
  //const root = useRef([])
  const [current, setCurrent] = useState(0)
  const length = children.length
  const [imageArray, setImageArray] = useState(children)
  const [sliderTransform] = useState(0)
  console.log("children", children)
  console.log("length", imageArray)
  //const arr = Object.keys(children).map((key) => )

  console.log("slider arr:", imageArray)

  //console.log("root ", root)

  const nextSlide = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1)
    // if (current === length - 1) setSliderTransform(prev => 0)
    // else {
    //setSliderTransform(prev => imageArray[0].props.fixed.width + 40)
    //}
    let sliderArr = imageArray
    console.log("slider inside:", sliderArr)
    sliderArr.push(sliderArr.shift())
    console.log("push:", sliderArr)
    setImageArray(sliderArr)
  }, [current, length, imageArray])

  console.log(imageArray)

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)
    return () => {
      clearInterval(interval)
    }
  })

  if (!Array.isArray(children) || children.length <= 0) {
    return null
  }
  //   const firstEl = current - 1 < 0 ? length - 1 : current - 1
  //   const thirdEl = current + 1 > length - 1 ? 0 : current + 1
  //   const forthEl = current + 2 > length - 1 ? current + 2 - length : current + 2

  console.log("slider transform", sliderTransform)
  return (
    <StyledSlider trans={sliderTransform}>
      <ImagesWrapper>{imageArray[0]}</ImagesWrapper>
      <ImagesWrapper>{imageArray[1]}</ImagesWrapper>
      <ImagesWrapper>{imageArray[2]}</ImagesWrapper>
      <ImagesWrapper>{imageArray[3]}</ImagesWrapper>
      <ImagesWrapper>{imageArray[4]}</ImagesWrapper>
    </StyledSlider>
  )
}
export default Slider
