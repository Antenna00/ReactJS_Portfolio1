import React from 'react'
import styled from "styled-components"
import Section from "./Section"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Route, Routes, HashRouter, BrowserRouter as Router } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { NavHashLink } from 'react-router-hash-link';

function Home() {
  return (
    <Router>
    <Container>
      <div id="Section1" className="Section1">
      <Section 
        title = "Model S"
        description = "Order Online for Touchless Delivery"
        backgroundImg = "model-s.jpg"
        leftBtnText = "CUSTOM ORDER"
        rightBtnText = "EXISTING INVENTORY"
        downArrow1 = "/down-arrow.svg"
      />
      </div>
      <div id="Section2" className="Section2">
      <Section 
        title = "Model Y"
        description = "Order Online for Touchless Delivery"
        backgroundImg = "model-y.jpg"
        leftBtnText = "CUSTOM ORDER"
        rightBtnText = "EXISTING INVENTORY"
        downArrow2 = "/down-arrow.svg"
      />
      </div>
      <div id="Section3" className="Section3">
      <Section 
        title = "Model 3"
        description = "Order Online for Touchless Delivery"
        backgroundImg = "model-3.jpg"
        leftBtnText = "CUSTOM ORDER"
        rightBtnText = "EXISTING INVENTORY"
        downArrow3 = "/down-arrow.svg"
      />
      </div>
      <div id="Section4" className="Section4">
      <Section 
        title = "Lowest Cost Solar Panels in America"
        description = "Money-back gurantee"
        backgroundImg = "solar-panel.jpg"
        leftBtnText = "Order Now"
        rightBtnText = "Learn More"
        downArrow4 = "/down-arrow.svg"
      />
      </div>
      <div id="Section5" className="Section5">
      <Section
        title = "Accessories"
        description = ""
        backgroundImg = "accessories.jpg"
        leftBtnText = "Order Now"
        downArrow5 = "/down-arrow.svg"
      />
      </div>
    </Container>
    </Router>
  )
}

export default Home

const Container = styled.div`
  width: 100%;
  height: 100vh;
  `
