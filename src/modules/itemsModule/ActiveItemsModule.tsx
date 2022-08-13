import React from "react";
import { useParams } from "react-router-dom";
import { Strip, Widget } from "../../components";
import { getItemsId } from "../../utils/mockData/ItemsMockData";
import styles from './ItemsModule.module.scss';

export const ActiveItemsModule = () => {
  let params = useParams();
  let itemsId = getItemsId(parseInt(params.itemid, 10));

  return(
    <Widget
      dark
      icon={false}
      title={itemsId.name}
      content={
        <div className={styles.activeItemsModule} >
          <div className={styles.image}>
            <img src={itemsId.image} alt={`${itemsId.name} alt text`} />
          </div>
          <Strip/>
          <div className={styles.content}>
            <div className={styles.desc}>
              {itemsId.description}
            </div>
            <div className={styles.quantity}>
              Number Held: {itemsId.quantity}
            </div>
          </div>
        </div>
      }
    />
  )
}