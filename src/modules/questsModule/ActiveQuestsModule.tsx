import React from "react";
import { useParams} from "react-router-dom";
import { Widget } from "../../components";
import { getQuest } from "../../utils/mockData/mockData";

export const ActiveQuestsModule = () => { 
  var params = useParams();
  var archive = getQuest(params.questid);

  return(
    <Widget
    title={archive.title}
      content={
        <div style={{display:"flex", flexDirection:"column"}}>
          <p>client: {archive.client} </p>
          {archive.description.map((item)=>(
            <div key={item}>{item}<br/></div>
          ))}
          <p> {archive.footdescription}</p>
        </div>
      }
    />
  );
}