import React from "react";
import { Bar, Tab, YorhaNavLink } from "../../components";
import { getArchivesMockData } from "../../utils/mockData/archivesMockData";
import { getItemsData } from "../../utils/mockData/ItemsMockData";
import styles from './IntelModule.module.scss'

export const IntelModule = () => {
  let intellist = getArchivesMockData();
  let itemlist = getItemsData();
  // console.log(itemlist)
  console.log(intellist.map((data)=>data.data[0].dataType));
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
              intellist.map((item)=>{
                return(
                  <div key={Math.random()}> {item.data.map((nestedItem)=>{
                    return(
                      <div key={Math.random()}>
                      {nestedItem.title}
                      <p></p>
                      {/* {nestedItem.id.map((nestedNestedItem)=>{
                        return(
                          <>
                            {nestedNestedItem}
                          </>
                        )
                      })} */}
                      </div>
                    )
                  })} 
                  </div>

                )
              })
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