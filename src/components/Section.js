import React from 'react'
import styled from "styled-components"

function Section({title, description, leftBtnText, rightBtnText, backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
          <ItemText>
            <h1>{ title }</h1>
            <p>{ description }</p>
          </ItemText>
          <Buttons>
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
            <DownArrow src={"/down-arrow.svg"} />
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
`


