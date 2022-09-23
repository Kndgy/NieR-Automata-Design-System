import React from "react";
import { Outlet } from "react-router-dom";
import { Bar, Tab, YorhaNavLink } from "../../components";
import { getArchivesMockData } from "../../utils/mockData/archivesMockData";
import styles from './IntelModule.module.scss'

export const IntelModule = () => {
  let intellist = getArchivesMockData();

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

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  const third = shuffle(first[0].concat(second[0]));

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
    </div>
  )
}