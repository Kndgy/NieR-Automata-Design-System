import { YorhaNavLink } from "../../components";
import React from "react";
import { Outlet } from "react-router-dom";
import PagesChildTemplate from "../../templates/pagesChildTemplate";
import PagesTemplate from "../../templates/pagesTemplate";

const WeaponsLList = [
  {
    name:"Small Sword"
  },
  {
    name:"Large Sword"
  },
  {
    name:"Spears"
  },
  {
    name:"Combar Bracwers"
  },
]

const Weapons = () => {
  return(
    <PagesTemplate
      title="WEAPONS"
      child={
        <PagesChildTemplate
          lessRightSpace={true}
          extraMidSpace={true}
          LeftContent={
            <>
              <YorhaNavLink variant="button" to={"list"} text="Weapons"/>
              <YorhaNavLink disabled={true} text="Weapons Set 1"/>
              <YorhaNavLink disabled={true} text="Weapons Set 2"/>
            </>
          }
          MiddleContent={
            <Outlet/>
          }
          RightContent={
            <></>
          }
        />
      }
      footer="Weapons footer"
    />
  )
}

export default Weapons;