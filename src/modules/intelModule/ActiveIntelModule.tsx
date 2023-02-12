import React from "react";
import { useParams } from "react-router-dom";
import { Tab, Widget } from "../../components";
import {getArchivesMockID, getNestedArchivesMockID} from "../../utils/mockData/archivesMockData";
import { Archives, Fishing, Novel, PictureBooks, Tutorials, Unit, WeaponStories } from "./shards";

export const ActiveIntelModule = () => {

  const params = useParams();
  const paramType = params.type

  let intellistId = getArchivesMockID(paramType, parseInt(params.intelid));
  let secondId = getNestedArchivesMockID( paramType, parseInt(params.intelid))

  const data = intellistId || secondId
  console.log(data)

  const ArchivesTypeCheck = () => {
    const typeMap = {
        archives: 1 ? (
            <Archives content={"test"}/>
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