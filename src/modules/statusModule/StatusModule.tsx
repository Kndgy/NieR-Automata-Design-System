import React from "react";
import { Strip, Widget } from "../../components";
import styles from "./StatusModule.module.scss";

const StatusModule = () => {
  return(
    <Widget
      dark={true}
      icon={false}
      title={"Status"}
      content={
        <div className={styles.StatusModule}>
          <div>
            <span>A2</span>
            <span>Lv: 45</span>
          </div>
          <Strip/>
          <div>
            <div>
              <span>Funds (G):</span>
              <span>EXP:</span>
              <span>HP:</span>
            </div>
            <div>
              <span>9,700</span>
              <span>86,560</span>
              <span>3,465/3,465</span>
            </div>
          </div>
          <Strip/>
          <div>
            <div>
              <span>Attack (Light): </span>
              <span>Attack (Heavy): </span>
              <span>Ranged Attack: </span>
              <span>Defense: </span>
            </div>
            <div>
              <span>2,338 +</span>
              <span>1,876 +</span>
              <span>150 +</span>
              <span></span>
            </div>
            <div>
              <span>234</span>
              <span>188</span>
              <span>21</span>
              <span>734</span>
            </div>
          </div>
          <Strip/>
          <div>
            NO ERROR
          </div>
        </div>
      }
    />
  )
}

export default StatusModule;