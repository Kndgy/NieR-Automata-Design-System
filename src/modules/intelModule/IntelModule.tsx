import React from "react";
import { Outlet } from "react-router-dom";
import { Bar, Tab, YorhaNavLink } from "../../components";
import { getArchivesMockData, getArchivesMockID, getNestedArchivesMockID } from "../../utils/mockData/archivesMockData";
import styles from './IntelModule.module.scss'

export const IntelModule = () => {
  let intellist = getArchivesMockData();
  let intellistId = getArchivesMockID(parseInt("7",10));
  let secondId = getNestedArchivesMockID(parseInt("7", 10))

  const first = intellist.filter((intellist)=>{
    let filter = "Archives"
    if(!filter) return true;
    let type = intellist.IntelType;
    return type.startsWith(filter);
  }).map((item)=>
  item.data.map((test)=>{
    return(<YorhaNavLink text={test.title} key={test.id}/>)
  }))
  
  const second = intellist.filter((intellist)=>{
    let filter = "Archives"
    if(!filter) return true;
    let type = intellist.IntelType;
    return type.startsWith(filter);
  }).map((item)=>item.nestedData.map((evenmore)=>{
    return(
      <details key={evenmore.id}>
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
  }))

  const third = first.concat(second)
  

  const yeah = intellistId[0].filter(e => e!==undefined)
  const yeaha = secondId[0].filter(e => e!==undefined)
  const yeahaa = yeaha[0].filter(e=>e!==undefined)
  const x = yeah.concat(yeahaa)
  // console.log(x[0])
  console.log(first)

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
        <Outlet/>
      </div>
      <div className={styles.right}></div>
    </div>
  )
}