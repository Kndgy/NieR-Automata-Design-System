import React from "react";
import { useParams } from "react-router-dom";
import {Strip, Widget} from "../../components";
import {getWeaponsArchiveid } from "../../utils/mockData/WeaponsMockData";
import styles from "./WeaponsModule.module.scss";

export const ActiveWeaponsModule = () => {
  const params = useParams();
  const weaponsData = getWeaponsArchiveid(parseInt(params.weaponid, 10));

  return(
    <div className={styles.ActiveWeaponsContainer}>
      <Widget 
        icon={false}
        title={weaponsData.name}
        lvl={`Lv: ${weaponsData.lvl}`}
        content={
          <div className={styles.WeaponContainer}>
            <div className={styles.image}>
              <img src={""} alt={`${weaponsData.name} placeholder`}/>
            </div>
            <div className={styles.descriptionContainer}>
              <span>{weaponsData.description}</span>
              <Strip/>
              <span>Attack: {weaponsData.attack}</span>
              <span>Combo: {weaponsData.combo}</span>
              <div className={styles.skill}>
                {weaponsData.skill.map((item) => (
                  <span key={Math.random()}>• {item}<br/></span>
                ))}
              </div>
            </div>
          </div>
        }
      />
    </div>
  )
}