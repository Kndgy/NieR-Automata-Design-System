import {Title } from "@kaineee/nier-automata-ui-library";
import React from "react";
import { Outlet } from "react-router-dom";
import { Button, Footer, YorhaNavLink } from "../../components";

const Debug = () => {
  return(
    <div style={{display:'flex', flexDirection:"column", gap:"40px"}}>
    <Title text="DEBUG"/>
    <div style={{display:'flex', flexDirection:"column", gap:"40px" ,width:"50%"}}>
      <YorhaNavLink to="fat" text="navlink fat | nav | normal variant"/>
      <YorhaNavLink variant="button" to="long" text="navlink long | button variant"/>
      <YorhaNavLink variant="transparent" to="transparent" text="navlink transparent | transparent variant"/>
      <YorhaNavLink variant="neutral" to="neutral" text="navlink neutral | neutral variant"/>
      <Button text="button normal variant"/>
      <Button variant="checkbox" text="button checkbox variant"/>
    </div>
    <Outlet/>
    <div style={{height:"40px"}}>
      <Footer text="FOOTER DEBUG COMPONENT"/>
    </div>
    </div>
  )
}

export default Debug;
