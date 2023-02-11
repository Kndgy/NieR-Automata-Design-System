import {Title } from "@kaineee/nier-automata-ui-library";
import React from "react";
import { Outlet } from "react-router-dom";
import { Button, Footer, Tab, YorhaNavLink } from "../components";

export const Debug = () => {
  return(
    <div style={{display:'flex', flexDirection:"column", gap:"40px", justifyContent:"space-between"}}>
    <Title text="DEBUG"/>
      <div style={{display:'flex', flexDirection:"row", gap:"10%"}}>
        <div style={{display:'flex', flexDirection:"column", gap:"40px" ,width:"50%"}}>
          <YorhaNavLink to="fat" text="navlink fat | nav | normal variant"/>
          <YorhaNavLink variant="button" to="long" text="navlink long | button variant"/>
          <YorhaNavLink variant="transparent" to="transparent" text="navlink transparent | transparent variant"/>
          <YorhaNavLink variant="neutral" to="neutral" text="navlink neutral | neutral variant"/>
          <Button text="button normal variant"/>
          <Button variant="checkbox" text="button checkbox variant"/>
          <Outlet/>
          <div style={{height:"40px"}}>
            <Footer text="FOOTER DEBUG COMPONENT"/>
          </div>
        </div>
        <div style={{width:"100%", height:"500px"}}>
        <Tab content={
          <div style={{display:'flex', flexDirection:"column", gap:"20px",}}>
            <YorhaNavLink to="fat" text="navlink fat | nav | normal variant"/>
          <YorhaNavLink variant="button" to="long" text="navlink long | button variant"/>
          <YorhaNavLink variant="transparent" to="transparent" text="navlink transparent | transparent variant"/>
          <YorhaNavLink variant="neutral" to="neutral" text="navlink neutral | neutral variant"/>
          <YorhaNavLink to="fat" text="navlink fat | nav | normal variant"/>
          <YorhaNavLink variant="button" to="long" text="navlink long | button variant"/>
          <YorhaNavLink variant="transparent" to="transparent" text="navlink transparent | transparent variant"/>
          <YorhaNavLink variant="neutral" to="neutral" text="navlink neutral | neutral variant"/>
          <YorhaNavLink to="fat" text="navlink fat | nav | normal variant"/>
          <YorhaNavLink variant="button" to="long" text="navlink long | button variant"/>
          <YorhaNavLink variant="transparent" to="transparent" text="navlink transparent | transparent variant"/>
          <YorhaNavLink variant="neutral" to="neutral" text="navlink neutral | neutral variant"/>
          <YorhaNavLink to="fat" text="navlink fat | nav | normal variant"/>
          <YorhaNavLink variant="button" to="long" text="navlink long | button variant"/>
          <YorhaNavLink variant="transparent" to="transparent" text="navlink transparent | transparent variant"/>
          <YorhaNavLink variant="neutral" to="neutral" text="navlink neutral | neutral variant"/>

           
          </div>
        }/>
        </div>
      </div>
    </div>
  )
}
