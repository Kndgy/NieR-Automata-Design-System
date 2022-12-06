import { YorhaNavLink } from "@kaineee/nier-automata-ui-library";
import React from "react";
import { Outlet, useLocation, useParams, useSearchParams } from "react-router-dom";
import { Tab, Widget } from "../../components";
import { getWeaponsArchive} from "../../utils/mockData/WeaponsMockData";
import styles from "./WeaponsModule.module.scss";
//todo broken navlink on certain url
export const WeaponsListModule = () => {

  const param = useParams();
  let [searchParams] = useSearchParams();
  let type = (searchParams.get("type"));

  let location = useLocation();
  let weaponsData = getWeaponsArchive();

  const TitleChecker = () => {
    if(!type){
      return "All Weapons"
    }else
      return param.type
  }
  console.log(type);
  return(
    <div className={styles.WeaponsListContainer}>
      <Widget title={TitleChecker()}
        content={
          <div className={styles.WeaponsTypeContainer}>
            <Tab
              content={
                <div className={styles.weaponList}>
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
                </div>
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