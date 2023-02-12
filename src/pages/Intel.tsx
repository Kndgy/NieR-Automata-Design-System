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
    type:"archives",
  },
  {
    name:"Unit Data",
    link:"/intel/unitdata/?type=",
    type:"unitdata",
  },
  {
    name:"Tutorials",
    link:"/intel/tutorials/?type=",
    type:"tutorials",
  },
  {
    name:"Weapon Stories",
    link:"/intel/weaponstories/?type=",
    type:"weaponstories",
  },
  {
    name:"Picture Books",
    link:"/intel/picturebooks/?type=",
    type:"picturebooks",
  },
  {
    name:"Fishing Encyclopedia",
    link:"/intel/fishingencyclopedia/?type=",
    type:"fishing"
  },
  {
    name:"Novel",
    link:"/intel/novel/?type=",
    type:"novel",
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
