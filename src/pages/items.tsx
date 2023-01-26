import React from "react";
import { Outlet, useParams, useSearchParams } from "react-router-dom";
import { YorhaNavLink } from "../components";
import StatusModule from "../modules/statusModule";
import PagesChildTemplate from "../templates/pagesChildTemplate";
import PagesTemplate from "../templates/pagesTemplate";
import { SubTitle } from "../utils/ParamAsSubTitle";

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
    Text:"Materials",
    type:"materials",
  },
  {
    Link:"/items/key/?type=",
    Text:"Key Items",
    type:"key",
  },
  {
    Link:"/items/caught fish/?type=",
    Text:"Caught Fish",
    type:"fish",
  }
]

export const Items = () => {

  const param = useParams();
  let [searchParams] = useSearchParams();
  let type = (searchParams.get("type"));

  const Footer = () => {
    if(type === ""){
      return "all items";
    }else if(!type){
      return "items in your inventory"
    }else if(param.type === 'materials' ){
      return param.type
    }else if(param.type === 'caught fish' ){
      return param.type
    }else{
      return `${param.type} items`
    }
  }

  const TypeCheck = () => {
    if(type === ""){
      return "all"
    }else
      return param.type
  }

  return(
    <PagesTemplate
      title={`ITEMS`}
      subtitle={SubTitle(TypeCheck(), "Items")}
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
            <StatusModule/>
          }
        />
      }
      footer={ `View all ${Footer()}.` }
    />
  )
}