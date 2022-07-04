import React from "react";
import { Bar, Button } from "@kaineee/nier-automata-ui-library";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import {RoutesConfig } from "../../routes/Routes";
import styled from 'styled-components';

type YorhaNavLinkProps = {
  text?: string;
}

const Icon = styled.div`
  width: 5%;
  height: 5%;
  min-width: 20px;
  min-height: 20px;
  background-image: linear-gradient(90deg, #57544a 50%, #57544a 50%, #b4af9a 50%, #b4af9a 100%);
  background-size: 200%;
  transition: .1s linear;
`;

const ButtonParent = styled.button`
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: left;
  width: 100%;
  height: 100%;
  font-size: 12px;
  padding: 10px;
  background-color: transparent;
  background-image: linear-gradient(90deg,rgba(180, 175, 154, 0) 50%, rgba(180, 175, 154, 0) 50%, rgba(87, 84, 74, 1) 50%, rgba(87, 84, 74, 1) 100%);
  z-index: 1;
  background-size: 200%;
  transition: .2s linear;
  &:hover{
    color: #b4af9a;
    background-position: -100%;
  }
  &:hover ${Icon}{
    background-position: -100%;
  }
  &:focus{
    color: #b4af9a;
    background-position: -100%;
    outline: none;
  }
  &:focus ${Icon}{
    background-position: -100%;
  }
  &:disabled{
    background-image: linear-gradient(90deg, #b4af9a 50%, #b4af9a 50%, #57544a 50%, #57544a 100%);
    background-size: 200%;
    opacity: 0.6;
    pointer-events: none;
  }
`;

const YorhaNavLink = ({text}: YorhaNavLinkProps) => {
  const activeStyle = { 
    color: '#b4af9a',
    backgroundImage: 'linear-gradient(90deg, #b4af9a 50%, #b4af9a 50%, #57544a 50%, #57544a 100%)',
    backgroundSize: '200%',
    backgroundPosition: '-100%',
    zIndex: '100',
    textDecoration: 'none'
  }
  const normalStyle = {
    color: "#57544a",
    textDecoration: 'none'
  }
  return(
    <NavLink style={({ isActive }) =>
    isActive ? activeStyle : normalStyle }to='/testtt'>
      {/* <div style={{ display:"flex", flexDirection:'row', alignItems:'center', gap:'10px', justifyContent:'left', width:'100%', height:'100%', padding:'10px'}}>
      <Icon/>
        {text}
      </div> */}
      <ButtonParent>
        <Icon/>
        {text}
      </ButtonParent>
    </NavLink>
  )
}

const NavbarModule = () =>{
  const activeStyle = { 
    
    backgroundImage: 'none',
  }
  return(
    <div className={styles.NavBarModule}>
    <Bar/>
    {RoutesConfig.RoutesConfigs.map((item)=>{
      return(
      <>
      <NavLink style={({ isActive }) =>
      isActive ? activeStyle : undefined
    } className={styles.link} to={`/${item.Link}`} >
      <Button key={item.Text} text={item.Text}/>
      </NavLink>
      </>
      )
    })}
    <YorhaNavLink text="test" />
  </div>
  )
}

export default NavbarModule;