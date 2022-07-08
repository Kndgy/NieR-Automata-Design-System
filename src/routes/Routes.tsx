import React from "react"
import { Routes, Route } from "react-router-dom"
import Map from "../pages/map"
import Quest from "../pages/quests"

export const RoutesPages = () => {
  return(
    <Routes>
      {RoutesConfig.RoutesConfigs.map((item)=>{
        return(
          <Route key={item.Text} path={`/${item.Link}`} element={item.element}>
          </Route>
        )
      })}
      <Route path="/debug" element={<>debug</>} />
    </Routes>
  )
}

export const NestedRoutes = () => {
  return(
    <Routes>
      <Route path="/Items" element={<Quest/>} />
    </Routes>
  )
}

export const RoutesConfig = {
 RoutesConfigs: [
  {
      Text:`MAP`,
      Link:``,
      element:<Map/>
    },
    {
      Text:"QUESTS",
      Link:`quest`,
      element:<Quest/>
    },
    {
      Text:"ITEMS",
      Link:`items`
    },
    {
      Text:"WEAPONS",
      Link:`weapons`
    },
    {
      Text:"SKILLS",
      Link:`skills`
    },
    {
      Text:"INTEL",
      Link:`intel`
    },
    {
      Text:"SYSTEM",
      Link:`system`,
    },
 ]
}