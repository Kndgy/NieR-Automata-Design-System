import { YorhaNavLink } from "@kaineee/nier-automata-ui-library";
import React from "react";
import { Outlet, useLocation, useParams, useSearchParams } from "react-router-dom";
import { Tab, Widget } from "../../components";
import { getWeaponsArchive} from "../../utils/mockData/WeaponsMockData";
import styles from "./WeaponsListModule.module.scss";

export const WeaponsListModule = () => {
  let [searchParams] = useSearchParams();
  let location = useLocation();

  let weaponsData = getWeaponsArchive();

  const param = useParams();

  // console.log(param.type);
  return(
    <div className={styles.WeaponsListContainer}>
      <Widget title={param.type}
        content={
          <div className={styles.WeaponsTypeContainer}>
            <Tab
              content={
                <>
                  {weaponsData
                    .filter((weaponsData)=>{
                      let filter = searchParams.get("type");
                      if (!filter) return true;
                      let name = weaponsData.typeName.toLowerCase();
                      return name.startsWith(filter);
                    })
                    .map((item) => (
                      <YorhaNavLink key={item.id} variant="transparent" to={`/weapons/type/${item.typeName}/${item.id}` + location.search} text={item.name} />
                  ))}
                </>
              }
            />
          </div>
        }
      />
      <div className={styles.RightContainer}>
        <Outlet/>
      </div>
    </div>
  )
}