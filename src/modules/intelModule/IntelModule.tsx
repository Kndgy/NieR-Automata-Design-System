import React from "react";
import {Outlet, useLocation, useSearchParams } from "react-router-dom";
import { Bar, DropDown, Tab, YorhaNavLink } from "../../components";
import { getArchivesMockData } from "../../utils/mockData/archivesMockData";
import styles from './IntelModule.module.scss'

export const IntelModule = () => {

  let [searchParams] = useSearchParams();
  let location = useLocation();

  let intellist = getArchivesMockData();

  const first = intellist.filter((intellist)=>{
    let filter = searchParams.get("type")
    if(!filter) return true;
    let type = intellist.IntelType;
    return type.startsWith(filter);
    }).map((item)=>
    item.data.map((test)=>{
      return(<YorhaNavLink variant="transparent" to={test.id + location.search} text={test.title} key={test.id}/>)
  }))
  
  const second = intellist.filter((intellist)=>{
    let filter = searchParams.get("type")
    if(!filter) return true;
    let type = intellist.IntelType;
    return type.startsWith(filter);
    }).map((item)=>item.nestedData.map((evenmore)=>{
    return(
      <DropDown 
        key={evenmore.id}
        Title={evenmore.title} 
        Content={
          evenmore.dropDownData.map((yeah)=>{
            return(
              <div key={Math.random()} className={styles.dropdownChild}><YorhaNavLink variant="transparent" to={yeah.id + location.search} text={yeah.title}/></div>
            )
          })
        }
      />
    )
  }))

  const third = second[0].concat(first[0]);
  // console.log(intellist)
  return (
    <div className={styles.IntelModule}>
      <div className={styles.IntelModuleContainer}>
        <div>
          <Bar/>
        </div>
        <Tab
          className={styles.TabContent}
          content={
            third
          }
        />
      </div>
      <div className={styles.outlet}>
        <Outlet/>
      </div>
    </div>
  )
}