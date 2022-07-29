import { Bar } from "@kaineee/nier-automata-ui-library";
import React from "react";
import styles from './PagesChildTemplate.module.scss';

interface PagesChildTemplateProps {
  LeftContent?: React.ReactNode;
  RightContent?: React.ReactNode;
  MiddleContent?: React.ReactNode;
  Outlet?: React.ReactNode;
  extraMidSpace?: boolean;
  lessRightSpace?: boolean;
}

const PagesChildTemplate = ({LeftContent, RightContent, MiddleContent, Outlet, 
  extraMidSpace = false,
  lessRightSpace = false
  }: PagesChildTemplateProps) => {
  const space = extraMidSpace ? styles.extraSpace : "";
  const rightSpace = lessRightSpace ? styles.lessRightSpace : "";
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
      <div className={[`${styles.MiddleContent}`, space].join(' ')}>
        {MiddleContent}
      </div>
      <div className={[`${styles.RightContent}`, rightSpace].join(' ')}>
        {RightContent}
      </div>
    </div>
  )
}

export default PagesChildTemplate;