import React from "react";
import {Title, Bar, Button, Footer} from '@kaineee/nier-automata-ui-library';
import styles from './Map.module.scss';

const Map = () => {
  return(
    <div className={styles.Map}>
        <Title text="MAP"/>
      <div className={styles.ContentContainer}>
        <div className={styles.LeftPanel}>
            <div className={styles.LeftPanelChild}>
              <div className={styles.Bar}>
                <Bar/>
              </div>
              <div className={styles.Button}>
                <Button disabled={true} text="Quick Save"/>
                <Button disabled={true} text="Map Mode"/>
                <Button disabled={true} text="Map Icons"/>
              </div>
            </div>
            <div className={styles.LeftPanelFooter}>
              footer panel
            </div>
        </div>
        <div className={styles.RightPanel}>
          <div className={styles.MapPanel}>
            <h1>
              Classified
            </h1>
          </div>
        </div>
      </div>
      <div>
        <Footer text="Quests Footer."/>
      </div>
    </div>
  )
}

export default Map;