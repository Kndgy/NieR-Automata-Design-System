import React from "react";
import PagesChildTemplate from "../templates/pagesChildTemplate";
import PagesTemplate from "../templates/pagesTemplate";
import { YorhaNavLink } from "../components";
import StatusModule from "../modules/statusModule";
import { Outlet } from "react-router-dom";

const IntelList = [
  {
    name: "Archives",
    link:"/intel/archives/?type=",
    type:"Archives",
  },
  {
    name:"Unit Data",
    link:"/intel/unit/?type=",
    type:"Unit Data",
  },
  {
    name:"Tutorials",
    link:"/intel/tutorials/?type=",
    type:"Tutorials",
  },
  {
    name:"Weapon Stories",
    link:"/intel/weaponstories/?type=",
    type:"Weapon Stories",
  },
  {
    name:"Picture Books",
    link:"/intel/picturebooks/?type=",
    type:"Picture Books",
  },
  {
    name:"Fishing Encyclopedia",
    link:"/intel/fishing/?type=",
    type:"Fishing Encyclopedia"
  },
  {
    name:"Novel",
    link:"/intel/novel/?type=",
    type:"Novel",
  }
]

export const Intel = () => {
  return(
    <PagesTemplate
      title="Intel"
      child={
        <PagesChildTemplate
          LeftContent=
              {IntelList.map((item)=>(
                <YorhaNavLink key={Math.random()} text={item.name} to={item.link} filter={item.type} filterType={"type"}/>
              ))}
          Outlet={
            <Outlet/>
          }
          RightContent={
            <StatusModule/>
          }
        />
      }
      footer="View information about encountered units and foes"
    />
  )
}
