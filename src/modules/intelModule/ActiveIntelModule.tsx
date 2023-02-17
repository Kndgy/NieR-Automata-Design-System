import React from "react";
import { useParams } from "react-router-dom";
import { Tab, Widget } from "../../components";
import {getArchivesMockID, getNestedArchivesMockID} from "../../utils/mockData/archivesMockData";
import { Archives, Fishing, Novel, PictureBooks, Tutorials, Unit, WeaponStories } from "./shards";
import styles from './IntelModule.module.scss'

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

  const handleModal = () => {
    return console.log("hello")
  }

  const ImageCheck = () => {
    if(data.image){
      if(Array.isArray(data.image)){
        return <>an array of images</> 
      }else {
        return ( 
          <div className={styles.ActiveIntelContent}>
            <div className={styles.imageParent}>
              <div onClick={handleModal} className={styles.image}> <img src={data.image.unit} alt="text" /> 
              </div>
            </div>
            <div className={styles.content}>{ArchivesTypeCheck()}</div>
            </div>
        )
      }
      }else{
      return <>{ArchivesTypeCheck()}</>
    }
  }

  return(
    <Widget
      dark={true}
      title={data.title}
      content={
        <Tab content={
            <>
            {ImageCheck()}
            </>
        }/>
      }
    />
  )
}