import React from "react";
import { Outlet } from "react-router-dom";
import { Tab, Widget } from "../../../../components";
import styles from "./WeaponsListModule.module.scss";

const WeaponsListModule = () => {
  return(
    <div className={styles.WeaponsListContainer}>
      <Widget title={"Weapon Type"}
        content={
          <div className={styles.WeaponsTypeContainer}>
            <Tab
              content={
                <>
                </>
              }
            />
          </div>
        }
      />
      <div className={styles.RightContainer}>
        <Outlet/>
      </div>
    </div>
  )
}

export default WeaponsListModule;