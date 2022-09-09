import React from "react";
import { Bar, Tab, YorhaNavLink } from "../../components";
import { getArchivesMockData } from "../../utils/mockData/archivesMockData";
import { getItemsData } from "../../utils/mockData/ItemsMockData";
import styles from './IntelModule.module.scss'

export const IntelModule = () => {
  let intellist = getArchivesMockData();

  console.log(intellist.map((node)=>node));

  return (
    <div className={styles.IntelModule}>
      <div className={styles.IntelModuleContainer}>
        <div>
          <Bar/>
        </div>
        <Tab
          content={
            <>
            {
              intellist.map((item)=>
                item.map((nestedItem)=>{
                  return(
                    <>
                      {nestedItem.IntelType}
                    </>
                  )
                })
              )
            }
              {/* <YorhaNavLink variant="transparent" text="test item"/>
              <details>
                <summary>test item dropdown</summary>
                <YorhaNavLink variant="transparent" text="test item"/>
                <YorhaNavLink variant="transparent" text="test item"/>
                <YorhaNavLink variant="transparent" text="test item"/>
              </details> */}
            </>
          }
        />
      </div>
      <div className={styles.outlet}>
        
      </div>
      <div className={styles.right}></div>
    </div>
  )
}