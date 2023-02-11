import React from "react";
import { useParams } from "react-router-dom";
import { Tab, Widget } from "../../components";
import {getArchivesMockID, getNestedArchivesMockID} from "../../utils/mockData/archivesMockData";

function eliminateUndefined(data: any[]) {
  const traverse = (obj: any) => {
    if (!obj) return null;
    if (Array.isArray(obj)) {
      const result: any[] = [];
      for (const item of obj) {
        const subResult = traverse(item);
        if (subResult) result.push(subResult);
      }
      return result.length > 0 ? result : null;
    } else if (typeof obj === "object") {
      const result: any = {};
      for (const key of Object.keys(obj)) {
        const value = traverse(obj[key]);
        if (value) result[key] = value;
      }
      return Object.keys(result).length > 0 ? result : null;
    }
    return obj;
  };
  return traverse(data);
}

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
  console.log(data)

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
          {/* <img src={data.image} alt={"placeholder"}/> */}
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