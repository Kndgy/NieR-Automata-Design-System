import React from "react";
import { Bar, Tab, YorhaNavLink } from "../../components";
import { getArchivesMockData } from "../../utils/mockData/archivesMockData";
import styles from './IntelModule.module.scss'

export const IntelModule = () => {
  let intellist = getArchivesMockData();

  console.log(intellist.map((node)=>node.map((item)=>item.nestedData.map((another)=>another.title))));

  const test = true;
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
                  if(nestedItem.data){
                    return(
                      nestedItem.data.map((secondNested)=>{
                        return(
                          <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
                            {secondNested.title}
                            <div>
                              {secondNested.descriptions}
                            </div>
                          </div>
                        )
                      })
                    )
                  }
                  if(true){
                    return(  
                      nestedItem.nestedData.map((nestedtest)=>{
                        return(
                          <>
                            {nestedtest.title}
                          </>
                        )
                      })
                    )
                  }
                }
                )
              )
            }
            {
              intellist.map((item)=>
                item.map((nestedItem)=>{
                  if(true){
                    return(  
                      nestedItem.nestedData.map((nestedtest)=>{
                        return(
                          <>
                            {nestedtest.title}
                          </>
                        )
                      })
                    )
                  }
                }
                )
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