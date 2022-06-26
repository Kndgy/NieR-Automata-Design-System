import React from "react";
import {Bar, Button} from '@kaineee/nier-automata-ui-library';
import styles from './Map.module.scss';

const Map = () => {
  return(
    <div className={styles.Map}>
      <div>
        <h1>Map</h1>
      </div>
      <div>
        <div className={styles.LeftPanel}>
          <div className={styles.Bar}>
            <Bar/>
          </div>
          <div className={styles.Button}>
            <Button text="Quick Save"/>
            <Button text="Map Mode"/>
            <Button text="Map Icons"/>
          </div>
        </div>
        <div>
          map panel
        </div>
      </div>
      <div>
        footer
      </div>
    </div>
  )
}

export default Map;