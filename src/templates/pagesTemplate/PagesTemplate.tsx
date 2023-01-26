import React from "react";
import styles from './PagesTemplate.module.scss';
import { Footer, Title } from "../../components";
import { motion } from "framer-motion";

type PagesTemplateProps = {
  title?: string;
  footer?: string;
  child?: React.ReactNode;
  className?: string;
  subtitle?: string;
}

const PagesTemplate = ({title, footer, child, subtitle, className}:  PagesTemplateProps) => {
  return(
    <motion.div className={styles.PagesTemplate} initial={{x:-100}} animate={{x: 0}} transition={{ease: "easeOut", duration:0.5}} >
        <Title title={title} subtitle={subtitle} />
        <div className={[styles.LeftPanel, className].join(' ')}>
            <div className={styles.Child}>
            {child}
            </div>
        </div>
        <div>
            <Footer text={footer} />
        </div>
    </motion.div>
  )
}

export default PagesTemplate;