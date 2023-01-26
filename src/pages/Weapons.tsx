import { YorhaNavLink } from "../components";
import React from "react";
import { Outlet, useParams } from "react-router-dom";
import PagesChildTemplate from "../templates/pagesChildTemplate";
import PagesTemplate from "../templates/pagesTemplate";

export const Weapons = () => {
  const param = useParams();

  const TypeChecker = () => {
    if(!param.list){
      return ""
    }else
      return "- Weapons"
  }
  // console.log(param.list)
  return(
    <PagesTemplate
      title="WEAPONS"
      subtitle={TypeChecker()}
      child={
        <PagesChildTemplate
          lessRightSpace={true}
          extraMidSpace={true}
          LeftContent={
            <>
              <YorhaNavLink variant="button" to={"type"} text="Weapons"/>
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
      footer="View all of the weapons in your possession."
    />
  )
}