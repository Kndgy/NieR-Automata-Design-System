import { Bar } from "@kaineee/nier-automata-ui-library";
import React from "react";
import styles from './PagesChildTemplate.module.scss';

interface PagesChildTemplateProps {
  LeftContent?: React.ReactNode;
  RightContent?: React.ReactNode;
  Outlet?: React.ReactNode;
}

const PagesChildTemplate = ({LeftContent, RightContent, Outlet}: PagesChildTemplateProps) => {
  return(
    <div className={styles.ChildTemplateContainer}>
      <div className={styles.PagesChildTemplate}>
        <div className={styles.ChildContainer}>
          <div className={styles.Bar}>
            <Bar/>
          </div>
          <div className={styles.LeftContent}>
            {LeftContent}
          </div>
        </div>
        <div className={styles.OutletChild}>
          {Outlet}
        </div>
      </div>
      <div className={styles.RightContent}>
        {RightContent}
      </div>
    </div>
  )
}

export default PagesChildTemplate;