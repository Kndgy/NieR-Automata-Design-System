import React from "react";
import {Tab} from "../../../../components";
import styles from "./ActiveWeaponsModule.module.scss";

const ActiveWeaponsModule = () => {
  return(
    <div className={styles.ActiveWeaponsContainer}>
      <Tab/>
    </div>
  )
}

export default ActiveWeaponsModule;