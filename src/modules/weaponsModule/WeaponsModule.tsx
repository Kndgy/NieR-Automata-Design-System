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
    <PagesChildTemplate
    lessRightSpace={true}
      LeftContent=
        {
          <div className={styles.parent}>
            {WeaponsTypeList.map((item)=>(
              <YorhaNavLink variant="neutral" key={item.name} to={`/weapons${item.link}`} text={item.name}/>
            ))}
          </div>
        }
      Outlet={<Outlet/>}
    />
  )
}

export default WeaponsModule;