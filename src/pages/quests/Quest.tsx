import React from "react";
import { Bar} from "@kaineee/nier-automata-ui-library";
import { Outlet, useParams, useSearchParams} from "react-router-dom";
import { YorhaNavLink } from "../../components";
import PagesTemplate from "../pagesTemplate.tsx";
import styles from './Quest.module.scss';

let QuestList = [
  {
    Link:"active",
    Text:"Active Quests",
    type:"/quest/active/?status=",
  },
  {
    Link:"",
    Text:"All Quests",
    type:"/quest/all/?status=",
  },
  {
    Link:"completed",
    Text:"Cleared Quests",
    type:"/quest/completed/?status=",
  },
]


function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Quest = () => {
  const param = useParams();

  let subTitle = (`${param.status} Quests`);
  let strip = "-";
  if (param.status === undefined) {
    subTitle = "";
    strip =""
  }
  return(
    <PagesTemplate
      title={`QUESTS`}
      subtitle={strip + capitalizeFirstLetter(subTitle)}
      footer="quests footer."
      chilld={
        <div className={styles.QuestContainer}>
          <div className={styles.QuestsChild}>
            <div className={styles.QuestContainer}>
              <div className={styles.bar}>
                <Bar/>
              </div>
              <div className={styles.QuestButton}>
                {QuestList.map((item)=>(
                  <YorhaNavLink key={item.Link} to={item.type} filter={item.Link} filterType={"status"} text={item.Text}/>
                ))}
              </div>
            </div>
            <div className={styles.outletChild}>
              <Outlet/>
            </div>
          </div>
          TEST
        </div>
      }
      className={styles.Quest}
    />
  )
}

export default Quest;