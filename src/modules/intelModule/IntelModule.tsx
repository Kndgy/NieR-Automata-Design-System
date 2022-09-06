import React from "react";
import { Bar, Tab, YorhaNavLink } from "../../components";
import { getArchivesMockData } from "../../utils/mockData/archivesMockData";
import { getItemsData } from "../../utils/mockData/ItemsMockData";
import styles from './IntelModule.module.scss'

const archivesMockData = [
  {
    aah:[
      {
        IntelType : "Archives",
    data : [
      {
        title:"String",
        id:1,
        descriptions:[
          {
            time:"00:02:13",
            description:"Re-activation complete. A check of my ody reveals various failures.\nCommunication functions have been destrioyed. I cannot contact my team or the bunker. I leave a draft of this message here as a log."
          },
          {
            time:"00:10:13",
            description:"I verify the plan once more. Using my supposed destruction in this sortle as a gulse, i sever all communication. I then pass beneath the abandoned factory and escape. Further analysis reveals that I took anti-air fire while in the flight unitm resulting in damage to my body. No matter-it can be repaired."
          },
        ],
      }
    ]
      },
      {
        IntelType : "Archives",
    data : [
      {
        title:"String",
        id:1,
        descriptions:[
          {
            time:"00:02:13",
            description:"Re-activation complete. A check of my ody reveals various failures.\nCommunication functions have been destrioyed. I cannot contact my team or the bunker. I leave a draft of this message here as a log."
          },
          {
            time:"00:10:13",
            description:"I verify the plan once more. Using my supposed destruction in this sortle as a gulse, i sever all communication. I then pass beneath the abandoned factory and escape. Further analysis reveals that I took anti-air fire while in the flight unitm resulting in damage to my body. No matter-it can be repaired."
          },
        ],
      }
    ]
      }
    ]
  },
]

export const IntelModule = () => {
  let intellist = getArchivesMockData();

  console.log(archivesMockData.map((node)=>node.aah.map((node)=>node.data.map((data)=>data.descriptions.map((url)=>url.description)))));

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
                      {nestedItem.descriptions}
                      {nestedItem.time}
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