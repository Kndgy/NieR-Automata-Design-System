import React from "react";
import { useParams } from "react-router-dom";
import { Tab, Widget } from "../../components";
import {getArchivesMockID, getNestedArchivesMockID} from "../../utils/mockData/archivesMockData";
import { eliminateUndefined } from "../../utils/eliminateUndefinedJSON";
import { Archives, Fishing, Novel, PictureBooks, Tutorials, Unit, WeaponStories } from "./shards";

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
        archives: data ? (
            <Archives/>
            ) : "weird it seems the data is empty",
        unit: <Unit/>,
        tutorials: <Tutorials/>,
        weaponstories: <WeaponStories/>,
        picturebooks: <PictureBooks/>,
        fishing: <Fishing/>,
        novel: <Novel/>
    }
    const output = typeMap[params.type] || <>archives yet to be handled</>

    return output;
  }

  return(
    <Widget
      dark={true}
      title={data.title}
      content={
        <Tab content={
          <div>
            {ArchivesTypeCheck()}
          </div>
        }/>
      }
    />
  )
}