import React from "react";
import { Outlet, useParams, useSearchParams} from "react-router-dom";
import {YorhaNavLink } from "../components";
import PagesTemplate from "../templates/pagesTemplate";
import { SubTitle } from "../utils/ParamAsSubTitle";
import PagesChildTemplate from "../templates/pagesChildTemplate";
import StatusModule from "../modules/statusModule";

let QuestList = [
  {
    Link:"/quest/Active/Quest5?status=",
    Text:"Active Quests",
    type:"active",
  },
  {
    Link:"/quest/all/Quest1?status=",
    Text:"All Quests",
    type:"",
  },
  {
    Link:"/quest/cleared/Quest1?status=",
    Text:"Cleared Quests",
    type:"cleared",
  },
]

export const Quest = () => {

  const param = useParams();
  let [searchParams] = useSearchParams();
  let status = (searchParams.get("status"));

  const ParamCheck = () => {
    if(status === "active"){
      return "quests currently in progress";
    }
    else if(status === "cleared"){
      return "completed quests";
    }else if(!status){
      return "all quests";
    }else if(status === "")
      return "all accepted quests";
  } 

  const TypeCheck = () => {
    if(status === ""){
      return "all"
    }else
      return param.statusType
  }

  return(
    <PagesTemplate
      title={`QUESTS`}
      subtitle={SubTitle(TypeCheck(), "Quest")}
      footer={`View ${ParamCheck()}.`}
      child={
        <PagesChildTemplate
          LeftContent={
            <>
              {QuestList.map((item)=>(
                <YorhaNavLink key={item.Link} to={item.Link} filter={item.type} filterType={"status"} text={item.Text}/>
              ))}
            </>
          }
          Outlet={<Outlet/>}
          RightContent={
            <StatusModule/>
          }
        />
      }
    />
  )
}