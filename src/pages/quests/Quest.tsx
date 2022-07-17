import React from "react";
import { Bar} from "@kaineee/nier-automata-ui-library";
import { Outlet} from "react-router-dom";
import { YorhaNavLink } from "../../components";
import PagesTemplate from "../pagesTemplate.tsx";
import styles from './Quest.module.scss';

let QuestList = [
  {
    Link:"active",
    Text:"Active Quests",
    type:"/quest/active/?filter=",
  },
  {
    Link:"",
    Text:"All Quests",
    type:"/quest/all/?filter=",
  },
  {
    Link:"completed",
    Text:"Cleared Quests",
    type:"/quest/completed/?filter=",
  },
]

const Quest = () => {
  
  return(
    <PagesTemplate
      title="QUEST"
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
                  <YorhaNavLink key={item.Link} to={item.type} filter={item.Link} filterType={"filter"} text={item.Text}/>
                ))}
              </div>
            </div>
            <div className={styles.outletChild}>
              <Outlet/>
            </div>
          </div>
        </div>
      }
      className={styles.Quest}
    />
  )
}

export default Quest;