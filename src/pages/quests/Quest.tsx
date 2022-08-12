import React from "react";
import { Outlet, useParams} from "react-router-dom";
import { Widget, YorhaNavLink } from "../../components";
import PagesTemplate from "../../templates/pagesTemplate";
import { SubTitle } from "../../utils/ParamAsSubTitle";
import PagesChildTemplate from "../../templates/pagesChildTemplate";

let QuestList = [
  {
    Link:"/quest/Active/Quest1?status=",
    Text:"Active Quests",
    type:"active",
  },
  {
    Link:"/quest/all/Quest4?status=",
    Text:"All Quests",
    type:"",
  },
  {
    Link:"/quest/Cleared/Quest5?status=",
    Text:"Cleared Quests",
    type:"Cleared",
  },
]

const Quest = () => {

  const param = useParams();

  return(
    <PagesTemplate
      title={`QUESTS`}
      subtitle={SubTitle(param.status, "Quest")}
      footer="quests footer."
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
            <Widget/>
          }
        />
      }
    />
  )
}

export default Quest;