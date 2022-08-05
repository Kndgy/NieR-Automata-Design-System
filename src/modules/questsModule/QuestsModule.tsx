import React from "react";
import { Bar } from "@kaineee/nier-automata-ui-library";
import {Outlet,
  useLocation,
  useSearchParams 
} from "react-router-dom";
import { Tab, YorhaNavLink } from "../../components";
import { getArchive } from "../../utils/mockData/mockData";
import styles from './QuestModule.module.scss';

export const QuestsModule = () => {
  let [searchParams] = useSearchParams();

  let archive = getArchive();
  // var [searchParams, setSearchParams] = useSearchParams();
  let location = useLocation();
  return(
    <div className={styles.ActiveQuests}>
      <div className={styles.ActiveQuestsContainer}>
        <div>
          <Bar/>
        </div>
       <Tab content={
        <div className={styles.QuestList}>
          {archive
            .filter((archive) => {
              let filter = searchParams.get("status");
              if (!filter) return true;
              let name = archive.status.toLowerCase();
              return name.startsWith(filter);
            })
            .map((item)=>(
                <YorhaNavLink variant="transparent"
                to={`/quest/${item.status}/${item.link}`+ location.search}
                key={item.title} text={item.title}/>
            ))}
        </div>
       }/>
      </div>
      <div className={styles.outletChild}>
        <Outlet/>
      </div>
    </div>
  )
}