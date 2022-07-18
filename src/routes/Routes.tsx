import { Title } from "@kaineee/nier-automata-ui-library"
import React from "react"
import { Routes, Route} from "react-router-dom"
import Map from "../pages/map"
import Quest from "../pages/quests"
import ActiveQuestsModule from "../modules/questsModule/ActiveQuestsModule"
import QuestModule from "../modules/questsModule/QuestModule"
import Debug from "../pages/debug"

export const RoutesPages = () => {
  return(
    <Routes>
        <Route path={`/`} element={<Map/>}>
        </Route>
        <Route path={`/quest`} element={<Quest/>}>
          {/* {QuestList.map((item)=>{ */}
            return(
              <Route path={`/quest/:status/`} element={<ActiveQuestsModule/>}>
                <Route
                  index
                  element={
                    <>
                    select a data
                    </>
                  }
                />
                <Route path={`:questid`} element={<QuestModule/>}/>
            </Route>
            )
          {/* })} */}
        </Route>
        <Route path="/debug" element={<Debug/>}>
          <Route path="/debug/fat" element={<>works fat</>}/>
          <Route path="/debug/long" element={<>works long</>}/>
          <Route path="/debug/transparent" element={<>works transparent</>}/>
          <Route path="/debug/neutral" element={<>works neutral</>}/>
        </Route>
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