import React from "react";
import {Title, Bar, Footer} from '@kaineee/nier-automata-ui-library';
import styles from './PagesTemplate.module.scss';

type PagesTemplateProps = {
  title?: string;
  footer?: string;
  buttons?: any;
  className?: string;
  rightContent?: any;
}

const PagesTemplate = ({title, footer, buttons, className, rightContent}:  PagesTemplateProps) => {
  return(
    <div className={styles.PagesTemplate}>
        <Title text={title} />
      <div className={styles.ContentContainer}>
        <div className={styles.LeftPanel}>
            <div className={styles.LeftPanelChild}>
              <div className={styles.Bar}>
                <Bar/>
              </div>
              <div className={styles.Button}>
                {buttons}
              </div>
            </div>
        </div>
        <div className={[styles.RightPanel, className].join(' ')}>
          {rightContent}
        </div>
      </div>
      <div>
        <Footer text={footer} />
      </div>
    </div>
  )
}

export default PagesTemplate;