import { YorhaNavLink } from "../../components";
import React from "react";
import { Outlet } from "react-router-dom";
import PagesChildTemplate from "../../templates/pagesChildTemplate";
import PagesTemplate from "../../templates/pagesTemplate";

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
      footer="Weapons footer"
    />
  )
}

export default Weapons;