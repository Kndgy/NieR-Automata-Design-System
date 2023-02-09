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
    const typeMap = {
      archives: data ? (
        <>
          test
        </>
      ) : "weird it seems the data is empty",
      unit: <>unit content element placeholder</>,
      tutorials: <>tutorials content element placeholder</>,
      weaponstories: <>weapon stories content element placeholder</>,
      picturebooks: <>picture books content element placeholder</>,
      fishing: <>fishing content element placeholder</>,
      novel: (<>novel content element placeholder</>)
    }

    const output = typeMap[params.type] || <>archives yet to be handled</>

    return output;
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