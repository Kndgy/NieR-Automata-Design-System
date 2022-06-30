import { Bar, Button } from "@kaineee/nier-automata-ui-library";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { RoutesConfig } from "../../routes/Routes";

const NavbarModule = () =>{
  return(
    <div className={styles.NavBarModule}>
    <Bar/>
    {RoutesConfig.RoutesConfigs.map((item,key)=>{
      return(
      <Link className={styles.link} to={`/${item.Link}`} >
        <Button key={key} text={item.Text} />
      </Link>
      )
    })}
  </div>
  )
}

export default NavbarModule;