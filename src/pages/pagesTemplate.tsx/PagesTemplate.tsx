import React from "react";
import {Title, Bar, Footer} from '@kaineee/nier-automata-ui-library';
import styles from './PagesTemplate.module.scss';

type PagesTemplateProps = {
  title?: string;
  footer?: string;
  chilld?: any;
  className?: string;

}

const PagesTemplate = ({title, footer, chilld, className}:  PagesTemplateProps) => {
  return(
    <div className={styles.PagesTemplate}>
        <Title text={title} />

        <div className={[styles.LeftPanel, className].join(' ')}>
            <div className={styles.LeftPanelChild}>
              <div className={styles.Bar}>
                <Bar/>
              </div>
              <div className={styles.Button}>
                {chilld}
              </div>
            </div>
        </div>
      <div>
        <Footer text={footer} />
      </div>
    </div>
  )
}

export default PagesTemplate;