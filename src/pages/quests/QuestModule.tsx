import React from "react";
import { useParams} from "react-router-dom";
import { getQuest } from "./mockData";

export default function QuestModule() { 
  var params = useParams();
  var archive = getQuest(params.invoiceID);
  return(
    <div style={{display:"flex", flexDirection:"column"}}>
    <div>title: {params.invoiceID}</div>
    <p>client: {archive.client} </p>
    <p>desc: {archive.description}</p>
    <p>sec desc: {archive.footdescription}</p>
    <p>status: {archive.status}</p>
    </div>
  );
}