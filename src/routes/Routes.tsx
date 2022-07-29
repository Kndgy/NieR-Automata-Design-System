import { Title } from "@kaineee/nier-automata-ui-library"
import React from "react"
import { Routes, Route} from "react-router-dom"
import Map from "../pages/map"
import Quest from "../pages/quests"
import Debug from "../pages/debug"
import Items from "../pages/items"
import ActiveQuestModule from "../modules/questsModule/fragments/activeQuestModule"
import QuestsModule from "../modules/questsModule"
import ItemsModule from "../modules/itemsModule/ItemModule"
import ActiveItemsModule from "../modules/itemsModule/fragments/activeItemsModule"
import Weapons from "../pages/weapons"
import WeaponsModule from "../modules/weaponsModule"
import ActiveWeaponsModule from "../modules/weaponsModule/fragments/activeWeaponsModule"
import Intel from "../pages/intel"
import WeaponsListModule from "../modules/weaponsModule/fragments/weaponsListModule"

export const RoutesPages = () => {
  return(
    <Routes>
        <Route path={`/`} element={<Map/>}>
        </Route>
        <Route path={`/quest`} element={<Quest/>}>
          <Route path={`/quest/:status/`} element={<QuestsModule/>}>
            <Route path={`:questid`} element={<ActiveQuestModule/>}/>
          </Route>
        </Route>
        <Route path={`/items`} element={<Items/>}>
          <Route path="/items/:type" element={<ItemsModule/>}>
            <Route path={`:itemid`} element={<ActiveItemsModule/>}/>
          </Route>
        </Route>
        <Route path={`/weapons`} element={<Weapons/>}>
          <Route
            index
            element={<></>}
          />
          <Route path={`/weapons/:list`} element={<WeaponsModule/>}>
            <Route path={`:weapontype`} element={<WeaponsListModule/>}>
              <Route path={`:weaponid`} element={<ActiveWeaponsModule/>}/>
            </Route>
          </Route>
        </Route>
        <Route path={'/intel'} element ={<Intel/>}>

        </Route>
        {/* components debug pages */}
        <Route path="/debug" element={<Debug/>}>
          <Route path="/debug/fat" element={<>works fat</>}/>
          <Route path="/debug/long" element={<>works long</>}/>
          <Route path="/debug/transparent" element={<>works transparent</>}/>
          <Route path="/debug/neutral" element={<>works neutral</>}/> 
        </Route>
        {/* components debug pages */}
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