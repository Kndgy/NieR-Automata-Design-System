import React from "react";
import { useParams} from "react-router-dom";
import { ScrollElement, Strip, Widget } from "../../components";
import { getQuest } from "../../utils/mockData/mockData";
import styles from './QuestModule.module.scss';

export const ActiveQuestsModule = () => { 
  var params = useParams();
  var archive = getQuest(params.questid);

  return(
    <div className={styles.ActiveQuestModuleParent}>
      <Widget
        title={archive.title}
          content={
            <div className={styles.ActiveQuestModule}>
              <div className={styles.client}>Client: {archive.client}</div>
                <div className={styles.content}>
                  <ScrollElement
                    content={<div className={styles.questDescription}>
                      <div className={styles.desc}>
                        {archive.description.map((item)=>(
                          <div key={item}>{item}<br/></div>
                        ))}
                      </div>
                      <br/>
                      <Strip/>
                      <div className={styles.footerDesc}>
                        <p> {archive.footdescription}</p>
                      </div>
                    </div>}
                  />
                </div>
            </div>
          }
        />
    </div>
  );
}