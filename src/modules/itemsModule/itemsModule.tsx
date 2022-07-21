import React from "react";
import { Bar, Widget } from "@kaineee/nier-automata-ui-library";
import styles from "./ItemsModule.module.scss";
import { Tab, YorhaNavLink } from "../../components";

const ItemsModule = () => {
  return(
    <div className={styles.ItemsModule}>
      <div className={styles.ItemsModuleContainer}>
        <div>
          <Bar/>
        </div>
        <Tab
          content={
            <div className={styles.ItemTypeList}>
              h
            </div>
          }
        />
      </div>
      <div className={styles.Outlet}>
      <Widget/>
      </div>
      <div className={styles.RightEndWidget}>
        <Widget/>
      </div>
    </div>
  )
}

export default ItemsModule;