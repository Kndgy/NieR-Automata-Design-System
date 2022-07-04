import { Button} from "@kaineee/nier-automata-ui-library";
import React from "react";
import PagesTemplate from "../pagesTemplate.tsx";
import styles from './Quest.module.scss';

const Quest = () => {
  return(
    <PagesTemplate
      title="QUEST"
      footer="quests footer."
      buttons={
        <>
          <Button text="Active Quests"/>
          <Button text="All Qeusts"/>
          <Button text="Cleared Quests"/>
        </>
      }
      className={styles.Quest}
      rightContent={
        "wip"
      }
    />
  )
}

export default Quest;