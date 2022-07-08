import React from "react";
// import { Bar} from "@kaineee/nier-automata-ui-library";
import { Bar } from "../../components/bar";
import styles from './Navbar.module.scss';
import {RoutesConfig } from "../../routes/Routes";
import { YorhaNavLink } from "../../components/yorhaNavLink";


type YorhaNavLinkProps = {
  text?: string;
  to?: string;
  className?: string;
  disabled?: boolean;
}


const NavbarModule = () =>{

  return(
    <div className={styles.NavBarModule}>
    <div className={styles.bar}>
      <Bar dark={true}/>
    </div>
    {RoutesConfig.RoutesConfigs.map((item)=>{
      return(
      <div className={styles.nav}>
        <YorhaNavLink variant="nav" key={item.Text} to={`/${item.Link}`} text={item.Text}/>
      </div>
      )
    })}
  </div>
  )
}

export default NavbarModule;