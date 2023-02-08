import React from "react";
import { useParams } from "react-router-dom";
import { Tab, Widget } from "../../components";
import {getArchivesMockID, getNestedArchivesMockID} from "../../utils/mockData/archivesMockData";


export const ActiveIntelModule = () => {
  const params = useParams();
  
  let intellistId = getArchivesMockID(parseInt(params.intelid));
  let secondId = getNestedArchivesMockID(parseInt(params.intelid))
  
  const yeah = intellistId[0].filter(e => e!==undefined)
  const yeaha = secondId[0].filter(e => e!==undefined)
  const yeahaa = yeaha[0].filter(e=>e!==undefined)
  const x = yeah.concat(yeahaa)
  const data = x[0]
  
  console.log(params.type)
  

  const ArchivesTypeCheck = () => {
    //handle things here
    if(data){
      console.log(data.content)
    }
    if(params.type === "archives") {
      if(data.content){
        return(
          <>
            {data.content.map((item)=>(
                <div key={item.id}>{item.time}<br/>{item.descriptions} <p/></div>
              ))}
          </>
        )
      }else{
        return "weird, it seems the data is empty"
      }
    }else if(params.type === "unit"){
      return(
        <> its a unit </>
      )
    }else{
      return<>"archives yet to be handled"</>
    }
  }

  const imageCheck = () => {
    if(data){
      return(
        <>
          <img src={data.image} alt={"placeholder"}/>
          <p/>
        </>
      )
    } else {
      return("")
    }
  }

  return(
    <Widget
      dark={true}
      // title={data.title}
      content={
        <Tab content={
          <div>
            {imageCheck()}
            {ArchivesTypeCheck()}
          </div>
        }/>
      }
    />
  )
}