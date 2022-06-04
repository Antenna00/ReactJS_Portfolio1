import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade'
import { Link, animateScroll as Scroll } from 'react-scroll';
import { HashLink } from 'react-router-hash-link';
import { Route, Routes, HashRouter, BrowserRouter as Router } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';


function Section({title, description, leftBtnText, rightBtnText, backgroundImg, downArrow1, downArrow2, downArrow3, downArrow4, downArrow5}) {

  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
          <ItemText>
            <h1>{ title }</h1>
            <p>{ description }</p>
          </ItemText>
      </Fade>
          <Buttons>
            <Fade bottom>
            <ButtonGroup>
              <LeftButton>
                  { leftBtnText }
              </LeftButton>
              { 
                rightBtnText &&
                <RightButton>
                  { rightBtnText }
                </RightButton>
              }
            </ButtonGroup>
            </Fade>
            <HashLink smooth to="#Section2">
            <DownArrow src={downArrow1}/>
            </HashLink>
            <HashLink smooth to="#Section3">
            <DownArrow2 src={downArrow2}/>
            </HashLink>
            <HashLink smooth to="#Section4">
            <DownArrow3 src={downArrow3}/>
            </HashLink>
            <HashLink smooth to="#Section5">
            <DownArrow4 src={downArrow4}/>
            </HashLink>
            <HashLink smooth to="#Section1">
            <DownArrow4 src={downArrow5}/>
            </HashLink>
          </Buttons>
    </Wrap>
    
  )
}

export default Section

const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url('/model-s.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/${props.bgImage}")`}
    `

const Buttons = styled.div`
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  font-weight: bold;
  `
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  `

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center; 
  align-items: center;
  border-radius: 100px;
  opacity: 0.9;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
  `

const RightButton = styled(LeftButton)` 
  background-color: #FFFFFF;
  opacity: 0.65;
  color: black;
`
const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
  cursor: pointer;
  animation: scroll-down 1s ease-in-out infinite;
`

const DownArrow2 = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
  cursor: pointer;
  animation: scroll-down 1s ease-in-out infinite;
`

const DownArrow3 = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
  cursor: pointer;
  animation: scroll-down 1s ease-in-out infinite;
`
const DownArrow4 = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
  cursor: pointer;
  animation: scroll-down 1s ease-in-out infinite;
`

