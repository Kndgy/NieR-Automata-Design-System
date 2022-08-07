import React from "react";
import { useParams } from "react-router-dom";
import {Widget} from "../../components";
import {getWeaponsArchiveid } from "../../utils/mockData/WeaponsMockData";
import styles from "./ActiveWeaponsModule.module.scss";

export const ActiveWeaponsModule = () => {
  const params = useParams();
  const weaponsData = getWeaponsArchiveid(parseInt(params.weaponid, 10));

  return(
    <div className={styles.ActiveWeaponsContainer}>
      <Widget 
        title={weaponsData.name}
        content={
          <div className={styles.WeaponContainer}>
            <div className={styles.image}>
              <img src={""} alt={`${weaponsData.name} placeholder`}/>
            </div>
            <div className={styles.descriptionContainer}>
              {weaponsData.description}
              <p>lvl {weaponsData.lvl}</p>
            </div>
          </div>
        }
      />
    </div>
  )
}