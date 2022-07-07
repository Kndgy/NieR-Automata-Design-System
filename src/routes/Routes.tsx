import React from "react"
import { Routes, Route } from "react-router-dom"
import Map from "../pages/map"
import Quest from "../pages/quests"

export const RoutesPages = () => {
  return(
    <Routes>
      <Route path="/" element={<Map/>} />
      <Route path="/Quest" element={<Quest/>} />
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
      Link:``
    },
    {
      Text:"QUESTS",
      Link:`Quest`
    },
    {
      Text:"ITEMS",
      Link:`Items`
    },
    {
      Text:"WEAPONS",
      Link:`Weapons`
    },
    {
      Text:"SKILLS",
      Link:`Skills`
    },
    {
      Text:"INTEL",
      Link:`Intel`
    },
    {
      Text:"SYSTEM",
      Link:`System`
    },
 ]
}