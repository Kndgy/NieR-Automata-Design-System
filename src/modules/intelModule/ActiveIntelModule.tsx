import React from "react";
import { useParams } from "react-router-dom";
import { Tab, Widget } from "../../components";
import {getArchivesMockID, getNestedArchivesMockID} from "../../utils/mockData/archivesMockData";
import { Archives, Fishing, Novel, PictureBooks, Tutorials, Unit, WeaponStories } from "./shards";
import styles from './IntelModule.module.scss'
import unit from '../../unit.png'

export const ActiveIntelModule = () => {

  const params = useParams();
  const paramType = params.type

  let intellistId = getArchivesMockID(paramType, parseInt(params.intelid));
  let secondId = getNestedArchivesMockID( paramType, parseInt(params.intelid))

  const data = intellistId || secondId

  // console.log(data)

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
      console.log(unit)
      console.log(data.image[0].unit)
      if(Array.isArray(data.image)){
        return <div className={styles.image}> <img src={data.image[0].unit} alt="text" /> </div>
      }else return 
    }else{
      return <></>
    }
  }

  return(
    <Widget
      dark={true}
      title={data.title}
      content={
        <Tab content={
          <div className={styles.ActiveIntelContent}>
            <div className={styles.imageParent}>{ImageCheck()}</div>
            <div className={styles.content}>{ArchivesTypeCheck()}</div>
          </div>
        }/>
      }
    />
  )
}