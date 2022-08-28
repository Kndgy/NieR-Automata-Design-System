import React from "react";
import PagesChildTemplate from "../../templates/pagesChildTemplate";
import PagesTemplate from "../../templates/pagesTemplate";
import { YorhaNavLink } from "../../components";
import StatusModule from "../../modules/statusModule";

const IntelList = [
  {
    name: "Archives",
  },
  {
    name:"Unit Data",
    link:"/item/unit/?type=",
    type:"unit",
  },
  {
    name:"Tutorials",
    link:"/item/tutorials/?type=",
    type:"tutorials",
  },
  {
    name:"Weapon Stories",
    link:"/item/weaponstories/?type=",
    type:"weaponstories",
  },
  {
    name:"Picture Books",
    link:"/item/picturebooks/?type=",
    type:"picturebooks",
  },
  {
    name:"Fishing Encyclopedia",
  },
  {
    name:"Novel",
    link:"/item/novel/?type=",
    type:"novel",
  }
]

const Intel = () => {
  return(
    <PagesTemplate
      title="Intel"
      child={
        <PagesChildTemplate
          LeftContent={
            <>
              {IntelList.map((item)=>(
                <YorhaNavLink key={item.link} text={item.name} to={item.link} filter={item.type} filterType={"type"}/>
              ))}
            </>
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

export default Intel;