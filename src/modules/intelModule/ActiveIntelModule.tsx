import React from "react";
import { useParams } from "react-router-dom";
import { Tab, Widget } from "../../components";
import {getArchivesMockID, getNestedArchivesMockID} from "../../utils/mockData/archivesMockData";
import { eliminateUndefined } from "../../utils/eliminateUndefinedJSON";

export const ActiveIntelModule = () => {

  const params = useParams();
  let intellistId = getArchivesMockID(parseInt(params.intelid));
  let secondId = getNestedArchivesMockID(parseInt(params.intelid))
  const filteredIntelList = intellistId[0].filter(e => e!==undefined)
  let result = eliminateUndefined(secondId)
  if(result === null){
    result = ""
  }else{
    result = result[0][0][0]
  }
  const data = filteredIntelList.concat(result)[0]

  const ArchivesTypeCheck = () => {
    const typeMap = {
        archives: 1 ? (
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
          <br/>
        </>
      )
    } else {
      return("")
    }
  }
  

  return(
    <Widget
      dark={true}
      title={data.title}
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