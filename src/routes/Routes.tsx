import React from "react"
import { Title } from "@kaineee/nier-automata-ui-library"
import { Routes, Route, Navigate} from "react-router-dom"
import Map from "../pages/map"
import Quest from "../pages/quests"
import Debug from "../pages/debug"
import Items from "../pages/items"
import Weapons from "../pages/weapons"
import Intel from "../pages/intel"
import {ItemsModule, ActiveItemsModule} from "../modules/itemsModule"
import {WeaponsModule, ActiveWeaponsModule, WeaponsListModule} from "../modules/weaponsModule"
import {NavbarModule} from "../modules/NavBarModule"
import { QuestsModule, ActiveQuestsModule } from "../modules/questsModule"

export const RoutesPages = () => {
  return(
    <Routes>
      <Route path={`/`} element={<NavbarModule/>}>
        <Route path="/" element={<Navigate to="/map"/>}/>
        <Route path={'/map'} element={<Map/>}/>
        <Route path={`/quest`} element={<Quest/>}>
          <Route path={`/quest/:status/`} element={<QuestsModule/>}>
            <Route path={`:questid`} element={<ActiveQuestsModule/>}/>
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
      </Route>
      {/* <Route path={'/test'} element={<>test</>}/> */}
    </Routes>
  )
}

export const RoutesConfig = {
 RoutesConfigs: [
  {
      Text:`MAP`,
      Link:`map`,
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