import React from "react";
import { Outlet } from "react-router-dom";
import { YorhaNavLink } from "../../components";
import PagesChildTemplate from "../../templates/pagesChildTemplate";
import styles from "./WeaponsModule.module.scss";

let WeaponsTypeList = [
  {
    name:"All Weapons",
    link:"/list/all",
  },
  {
    name:"Small Sword",
    link:"/list/small-sword",
  },
  {
    name:"Large Sword",
    link:"/list/large-sword",
  },
  {
    name:"Spears",
    link:"/list/spears",
  },
  {
    name:"Combar Bracers",
    link:"/list/combar-bracers",
  }
]

const WeaponsModule = () => {
  return(
    <div className={styles.WeaponsListContainer}>
        {WeaponsTypeList.map((item)=>(
          <YorhaNavLink key={item.name} to={`/weapons${item.link}`} text={item.name}/>
        ))}
    </div>
  )
}

export default WeaponsModule;