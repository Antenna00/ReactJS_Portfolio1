import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <div>
        <Container>
          <a>
            <img src="logo.svg" alt="" />
          </a>
        <Menu>
          <a href="#">Model S</a>
          <a href="#">Model 3</a>
          <a href="#">Model X</a>
          <a href="#">Model Y</a>
        </Menu>
        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Tesla Account</a>
        </RightMenu>
        <CustomMenu onClick={()=>setBurgerStatus(true)}/>
        <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={()=>setBurgerStatus(false)}/>
        </CloseWrapper>
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Used Inventory</a></li>
          <li><a href="#">Trade-in</a></li>
          <li><a href="#">Cybertruck</a></li>
          <li><a href="#">Roadaster</a></li>
          <li><a href="#">XXX</a></li>
          <li><a href="#">XXX</a></li>
        </BurgerNav>

        </Container>
    </div>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0; 
  right: 0;
  z-index:1
`


const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media(max-width: 768px) {
    display: none; //Under 768px, menu will disappear
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  List-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  padding-bottom: 70vh;
  ${props => {
    if(props.show === true){
      return `transform: translateX(0%);`
    }else if(props.show === false) {
      return `transform: translateX(100%);`
    }
  }}
  transition: transform 0.2s ease-in;
  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
      a{
        font-weight: 600;
      }
  }
`
//Or i can alternatively just write 107-113 as 
//transform: ${props => props.show ? translateX(0%) : translateX(100%)}

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;


`