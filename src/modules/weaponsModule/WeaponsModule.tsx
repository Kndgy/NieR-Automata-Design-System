import React from "react";
import { Outlet } from "react-router-dom";
import { YorhaNavLink } from "../../components";
import PagesChildTemplate from "../../templates/pagesChildTemplate";
import { getWeaponType } from "../../utils/mockData/WeaponsMockData";
import styles from "./WeaponsModule.module.scss";

export const WeaponsModule = () => {

  let WeaponsTypeList = getWeaponType(); 

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