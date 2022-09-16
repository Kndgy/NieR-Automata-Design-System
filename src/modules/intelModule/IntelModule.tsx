import React from "react";
import { Bar, Button, Tab, YorhaNavLink } from "../../components";
import { getArchivesMockData } from "../../utils/mockData/archivesMockData";
import styles from './IntelModule.module.scss'

export const IntelModule = () => {
  let intellist = getArchivesMockData();

  const first = intellist.map((node)=>
                  node.map((item)=>
                    item.data.map((test)=>{
                      return(<YorhaNavLink text={test.title} key={test.title}/>)
                    })))
  
  const second = intellist.map((node)=>node.map((item)=>item.nestedData.map((evenmore)=>{
    return(
      <details key={evenmore.title}>
      <summary>{evenmore.title}</summary>
      {
        evenmore.dropDownData.map((yeah)=>{
          return(
            
            <YorhaNavLink key={Math.random()} text={yeah.title}/>
            
          )
        })
      }
      </details>
    )
  })))

  const third = first.concat(second)

  return (
    <div className={styles.IntelModule}>
      <div className={styles.IntelModuleContainer}>
        <div>
          <Bar/>
        </div>
        <Tab
          content={
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