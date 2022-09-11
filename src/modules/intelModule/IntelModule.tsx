import React from "react";
import { Bar, Tab, YorhaNavLink } from "../../components";
import { getArchivesMockData } from "../../utils/mockData/archivesMockData";
import styles from './IntelModule.module.scss'

export const IntelModule = () => {
  let intellist = getArchivesMockData();

  const first = intellist.map((node)=>
                  node.map((item)=>
                    item.data.map((test)=>{
                      return(<YorhaNavLink text={test.title}/>)
                    })))
  
  const second = intellist.map((node)=>
                  node.map((item)=>
                    item.nestedData.map((test)=>{return(<YorhaNavLink text={test.title}/>)})))

  const third = first.concat(second)
  // const titleLink = Array.from(third);
  // const four = third.map((item)=>item)
  console.log(third);

  return (
    <div className={styles.IntelModule}>
      <div className={styles.IntelModuleContainer}>
        <div>
          <Bar/>
        </div>
        <Tab
          content={
            // intellist.map((test)=>test.map((node)=>node.data.map((item)=>{
              
            // })))
            // <>{first}{second}</>
            third
          }
        />
      </div>
      <div className={styles.outlet}>
        
      </div>
      <div className={styles.right}></div>
    </div>
  )
}