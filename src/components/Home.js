import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
  return (
    <Container>
      <Section 
        title = "Model S"
        description = "Order Online for Touchless Delivery"
        backgroundImg = "model-s.jpg"
        leftBtnText = "CUSTOM ORDER"
        rightBtnText = "EXISTING INVENTORY"
      />
      <Section 
        title = "Model Y"
        description = "Order Online for Touchless Delivery"
        backgroundImg = "model-y.jpg"
        leftBtnText = "CUSTOM ORDER"
        rightBtnText = "EXISTING INVENTORY"
      />
      <Section 
        title = "Model 3"
        description = "Order Online for Touchless Delivery"
        backgroundImg = "model-3.jpg"
        leftBtnText = "CUSTOM ORDER"
        rightBtnText = "EXISTING INVENTORY"
      />
      <Section 
        title = "Lowest Cost Solar Panels in America"
        description = "Money-back gurantee"
        backgroundImg = "solar-panel.jpg"
        leftBtnText = "Order Now"
        rightBtnText = "Learn More"
      />
      <Section
        title = "Accessories"
        description = ""
        backgroundImg = "accessories.jpg"
        leftBtnText = "Order Now"
      >

      </Section>
    </Container>
  )
}

export default Home

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: green;
  `


