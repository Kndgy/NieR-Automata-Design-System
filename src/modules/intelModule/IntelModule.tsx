import React from "react";
import { Bar, Tab, YorhaNavLink } from "../../components";
import { getArchivesMockData } from "../../utils/mockData/archivesMockData";
import styles from './IntelModule.module.scss'

export const IntelModule = () => {
  let intellist = getArchivesMockData();

  const first = intellist.map((node)=>
                  node.map((item)=>
                    item.data.map((test)=>test.title)))
  
  const second = intellist.map((node)=>
                  node.map((item)=>
                    item.nestedData.map((test)=>test.title)))

  const third = first.concat(second)

  console.log(third);

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
              // intellist.map((item)=>
              //   item.map((nestedItem)=>{
              //     if(nestedItem.data){
              //       return(
              //         nestedItem.data.map((secondNested)=>{
              //           return(
              //             <div key={Math.random()} style={{display:'flex',flexDirection:'column',gap:'20px'}}>
              //               {secondNested.title}
              //               <div>
              //                 {secondNested.descriptions}
              //               </div>
              //             </div>
              //           )
              //         })
              //       )
              //     }
              //     // if(true){
              //     //   return(  
              //     //     nestedItem.nestedData.map((nestedtest)=>{
              //     //       return(
              //     //         <>
              //     //           {nestedtest.title}
              //     //         </>
              //     //       )
              //     //     })
              //     //   )
              //     // }
              //   }
              //   )
              // )
              third
            }
            {/* {
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
            } */}
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