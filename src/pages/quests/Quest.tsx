import React from "react";
import { Bar} from "@kaineee/nier-automata-ui-library";
import { Outlet, useParams} from "react-router-dom";
import { YorhaNavLink } from "../../components";
import PagesTemplate from "../pagesTemplate.tsx";
import styles from './Quest.module.scss';
import { SubTitle } from "../../utils/ParamAsSubTitle";

let QuestList = [
  {
    Link:"active",
    Text:"Active Quests",
    type:"/quest/Active/Quest1?status=",
  },
  {
    Link:"",
    Text:"All Quests",
    type:"/quest/all/Quest4?status=",
  },
  {
    Link:"completed",
    Text:"Cleared Quests",
    type:"/quest/Completed/Quest5?status=",
  },

  //temporary placeholder for the quest list  
]

const Quest = () => {

  const param = useParams();

  return(
    <PagesTemplate
      title={`QUESTS`}
      subtitle={SubTitle(param.status)}
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