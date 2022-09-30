import React from "react";
import { useParams } from "react-router-dom";
import { Widget } from "../../components";
import {getArchivesMockID, getNestedArchivesMockID } from "../../utils/mockData/archivesMockData";


export const ActiveIntelModule = () => {
  const params = useParams();
  
  let intellistId = getArchivesMockID(parseInt(params.intelid,10));
  let secondId = getNestedArchivesMockID(parseInt(params.intelid, 10))
  console.log(params);
  
  const yeah = intellistId[0].filter(e => e!==undefined)
  const yeaha = secondId[0].filter(e => e!==undefined)
  const yeahaa = yeaha[0].filter(e=>e!==undefined)
  const x = yeah.concat(yeahaa)
  const data = x[0]
  // console.log(x[0])

  return(
    <Widget
      title={data.title}
      content={data.descriptions}
    />
  )
}