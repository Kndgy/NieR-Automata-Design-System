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
                <Button text="Quick Save"/>
                <Button text="Map Mode"/>
                <Button text="Map Icons"/>
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
        <Footer text="Footer"/>
      </div>
    </div>
  )
}

export default Map;