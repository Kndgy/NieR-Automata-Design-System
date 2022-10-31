import React from "react";
import { Bar} from "@kaineee/nier-automata-ui-library";
import styles from "./ItemsModule.module.scss";
import { Tab, YorhaNavLink } from "../../components";
import { getItemsData } from "../../utils/mockData/ItemsMockData";
import { Outlet, useLocation, useSearchParams } from "react-router-dom";

export const ItemsModule = () => {

  let [searchParams] = useSearchParams();
  let ItemsLists = getItemsData();
  let location = useLocation()

  return(
    <div className={styles.ItemsModule}>
      <div className={styles.ItemsModuleContainer}>
        <div>
          <Bar/>
        </div>
        <Tab
          content={
            <div className={styles.ItemTypeList}>
              {ItemsLists
              .filter((ItemsLists)=>{
                let filter = searchParams.get("type");
                if(!filter) return true;
                let type = ItemsLists.type.toLowerCase();
                return type.startsWith(filter);
              })
              .map((item)=>(
                <YorhaNavLink variant="transparent" key={item.id} to={`/items/${item.type}/${item.id}` + location.search} text={item.name}/>
              ))}
            </div>
          }
        />
      </div>
      <div className={styles.Outlet}>
        <Outlet/>
      </div>
      <div className={styles.RightEndWidget}>
      </div>
    </div>
  )
}