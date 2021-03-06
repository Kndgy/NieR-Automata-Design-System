import { Widget } from "@kaineee/nier-automata-ui-library";
import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { YorhaNavLink } from "../../components";
import PagesChildTemplate from "../../templates/pagesChildTemplate";
import PagesTemplate from "../../templates/pagesTemplate";
import { SubTitle } from "../../utils/ParamAsSubTitle";

let ItemsLists = [
  {
    Link:"/items/all/?type=",
    Text:"All Items",
    type:"",
  },
  {
    Link:"/items/restoratives/?type=",
    Text:"Restoratives Items",
    type:"restoratives",
  },
  {
    Link:"/items/enhancement/?type=",
    Text:"Enhancement Items",
    type:"enhancement",
  },
  {
    Link:"/items/support/?type=",
    Text:"Support Items",
    type:"support",
  },
  {
    Link:"/items/materials/?type=",
    Text:"Materials Items",
    type:"materials",
  },
  {
    Link:"/items/key/?type=",
    Text:"Key Items",
    type:"key",
  },
  {
    Link:"/items/caughtfish/?type=",
    Text:"Caught Fish",
    type:"fish",
  }
]

const Items = () => {

  const param = useParams();

  return(
    <PagesTemplate
      title={`ITEMS`}
      subtitle={SubTitle(param.type, "Items")}
      child={
        <PagesChildTemplate
          LeftContent={
            <>
              {ItemsLists.map((item)=>(
                <YorhaNavLink key={item.Link} to={item.Link} filter={item.type} filterType={"type"} text={item.Text}/>
              ))}
            </>
          }
          Outlet={<Outlet/>}
          RightContent={
            <Widget/>
          }
        />
      }
      footer="Items Footer"
    />
  )
}

export default Items;