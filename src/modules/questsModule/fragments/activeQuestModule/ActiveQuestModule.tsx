import React from "react";
import { useParams} from "react-router-dom";
import { Widget } from "../../../../components";
import { getQuest } from "../../../../utils/mockData/mockData";

const QuestModule = () => { 
  var params = useParams();
  var archive = getQuest(params.questid);
  return(
    <Widget
    title={archive.title}
      content={
        <div style={{display:"flex", flexDirection:"column"}}>
          <p>client: {archive.client} </p>
          <p> {archive.description}</p>
          <p> {archive.footdescription}</p>
          <p> {archive.footdescription}</p>
          <p> {archive.footdescription}</p>
          <p> {archive.footdescription}</p>
          <p> {archive.footdescription}</p>
        </div>
      }
    />
  );
}

export default QuestModule;