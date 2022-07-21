import React from "react";
import {Footer} from '@kaineee/nier-automata-ui-library';
import styles from './PagesTemplate.module.scss';
import { Title } from "../../components";

type PagesTemplateProps = {
  title?: string;
  footer?: string;
  chilld?: React.ReactNode;
  className?: string;
  subtitle?: string;
}

const PagesTemplate = ({title, footer, chilld, subtitle, className}:  PagesTemplateProps) => {
  return(
    <div className={styles.PagesTemplate}>
      <Title title={title} subtitle={subtitle} />
      <div className={[styles.LeftPanel, className].join(' ')}>
        <div className={styles.Child}>
          {chilld}
        </div>
      </div>
      <div>
        <Footer text={footer} />
      </div>
    </div>
  )
}

export default PagesTemplate;