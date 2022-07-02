import React from "react";
import { Bar, Button } from "@kaineee/nier-automata-ui-library";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { NestedRoutes, RoutesConfig } from "../../routes/Routes";

const NavbarModule = () =>{
  const activeStyle = { 
    color: 'red',
    backgroundImage: 'none',
  }
  return(
    <div className={styles.NavBarModule}>
    <Bar/>
    {RoutesConfig.RoutesConfigs.map((item,key)=>{
      return(
      <>
      <NavLink style={({ isActive }) =>
      isActive ? activeStyle : undefined
    } className={styles.link} to={`/${item.Link}`} >
        <Button key={key} text={item.Text} />
      </NavLink>
      </>
      )
    })}
  </div>
  )
}

export default NavbarModule;