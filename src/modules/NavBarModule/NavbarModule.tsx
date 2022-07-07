import React from "react";
import { Bar} from "@kaineee/nier-automata-ui-library";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import {RoutesConfig } from "../../routes/Routes";
import styled, {ThemeProvider} from 'styled-components';

type YorhaNavLinkProps = {
  text?: string;
  to?: string;
  className?: string;
  disabled?: boolean;
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

const YorhaCustomLink = ({className,text, to, disabled=false, ...props}:YorhaNavLinkProps)=>{
  return(
    <div className={className}>
      <Button disabled={disabled} {...props}>
      <NavLink className={['mainClass', ({isActive}) => (isActive ? "active" : "inactive")].join(' ')} 
        to={to}>
        <Icon/> {text}
      </NavLink>
      </Button>
    </div>

  )
}

const Button = styled.button`
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: row;
    &:disabled{
      opacity: 0.6;
      pointer-events: none;
    }
`

const YorhaNavLink = styled(YorhaCustomLink)`
  .mainClass{
    height: 100%;
    width: 100%;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    padding: 10px;
    gap: 10px;
    color: #57544a;
    align-items: center;
    background-image: linear-gradient(90deg, #b4af9a 50%, #b4af9a 50%, #57544a 50%, #57544a 100%);
    background-size: 200%;
    transition: .2s linear;
    &:hover{
      background-position: -100%;
      color: #b4af9a;
    }
    &:hover ${Icon}{
      background-position: -100%;
    }
  }
  .active{
    background-position: -100%;
    color: #b4af9a;
  }
  .active ${Icon}{
    background-position: -100%;
    color: #b4af9a;
  }
  .inactive{
    color: #57544a;
  }
`

const NavbarModule = () =>{

  return(
    <div className={styles.NavBarModule}>
    <Bar/>
    {RoutesConfig.RoutesConfigs.map((item)=>{
      return(
      <div className={styles.bar}>
        <YorhaNavLink key={item.Text} to={`/${item.Link}`} text={item.Text}/>
      </div>
      )
    })}
  </div>
  )
}

export default NavbarModule;