import { Button} from "@kaineee/nier-automata-ui-library";
import React from "react";
import { Link, Outlet} from "react-router-dom";
import PagesTemplate from "../pagesTemplate.tsx";
import styles from './Quest.module.scss';

const Quest = () => {

  return(
    <PagesTemplate
      title="QUEST"
      footer="quests footer."
      chilld={
        <>
          <Button text="Active Qeusts"/>
          <Link to={'/quest/quests'}>
          <Button text="All Quests"/>
          </Link>
          <Button text="Cleared Quests"/>
          <Outlet/>
        </>
      }
      className={styles.Quest}
    />
  )
}

export default Quest;