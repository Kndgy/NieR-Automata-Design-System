import React from "react";
import {Tab} from "../../components";
import styles from "./ActiveWeaponsModule.module.scss";

export const ActiveWeaponsModule = () => {
  return(
    <div className={styles.ActiveWeaponsContainer}>
      <Tab/>
    </div>
  )
}