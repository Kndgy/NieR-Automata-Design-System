import React from "react";
import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import { Bar, DropDown, Tab, YorhaNavLink } from "../../components";
import { getArchivesMockData } from "../../utils/mockData/archivesMockData";
import styles from './IntelModule.module.scss'

export const IntelModule = () => {

  let [searchParams] = useSearchParams();
  let location = useLocation();

  let intellist = getArchivesMockData();

  console.log(searchParams.get("type"))

  const first = intellist.filter((intellist)=>{
    let filter = searchParams.get("type")
    if(!filter) return true;
    let type = intellist.IntelType;
    return type.startsWith(filter);
  }).map((item)=>
  item.data.map((test)=>{
    return(<YorhaNavLink to={test.id + location.search} text={test.title} key={test.id}/>)
  }))
  
  const second = intellist.filter((intellist)=>{
    let filter = searchParams.get("type")
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
              <YorhaNavLink to={yeah.id + location.search} key={Math.random()} text={yeah.title}/>
            )
          })
        }
      </details>
    )
  }))

  const third = second[0].concat(first[0]);

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
        {/* <Outlet/> */}
        <><DropDown Title={"test"} Content={"test content"} /></>
      </div>
    </div>
  )
}