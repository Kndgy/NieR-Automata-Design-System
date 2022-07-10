import { Title } from "@kaineee/nier-automata-ui-library"
import React from "react"
import { Routes, Route } from "react-router-dom"
import Map from "../pages/map"
import Quest from "../pages/quests"
import ActiveQuestsModule from "../pages/quests/QuestsModule"
import QuestModule from "../pages/quests/QuestModule"

export const RoutesPages = () => {
  return(
    <Routes>
        <Route path={`/`} element={<Map/>}>
        </Route>
        <Route path={`/quest`} element={<Quest/>}>
          <Route
            index
            element={
              <>
              WIP STATUS
              </>
            }
          />
          
          <Route path="/quest/quests" element={<ActiveQuestsModule/>}>
          <Route
            index
            element={
              <>
              select a data
              </>
            }
          />
          <Route path={':invoiceID'} element={<QuestModule/>}/>
          </Route>
        </Route>
        <Route path="/debug" element={<>debug</>} />
        <Route
        path="*"
        element={
          <Title text="CLASSIFIED" />
        }
        />
    </Routes>
  )
}

export const RoutesConfig = {
 RoutesConfigs: [
  {
      Text:`MAP`,
      Link:``,
    },
    {
      Text:"QUESTS",
      Link:`quest`,
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