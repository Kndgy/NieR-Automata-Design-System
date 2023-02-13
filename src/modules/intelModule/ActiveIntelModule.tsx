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
            <Archives/>
            ) : "weird it seems the data is empty",
        unitdata: <Unit/>,
        tutorials: <Tutorials/>,
        weaponstories: <WeaponStories/>,
        picturebooks: <PictureBooks/>,
        fishingencyclopedia: <Fishing/>,
        novel: <Novel/>
    }
    const output = typeMap[paramType] || <>archives yet to be handled</>

    return output;
  }
  
  // should i add image check to each shards because of image slideshow? future problem

  const ImageCheck = () => {
    if(data.image){
      if(Array.isArray(data.image)){
        return <> {data.image} </>
      }else return <> not an array image </>
    }else{
      return <>theres no image</>
    }
  }

  return(
    <Widget
      dark={true}
      title={data.title}
      content={
        <Tab content={
          <div>
            {ImageCheck()}
            {ArchivesTypeCheck()}
          </div>
        }/>
      }
    />
  )
}