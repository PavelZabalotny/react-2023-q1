import React from "react";
import styles from "./Footer.module.scss";
import github from "../../../../assets/icons/github.png";
import rsschool from "../../../../assets/icons/rsschool.png";
import { GITHUB_LINK, RSSCHOOL_LINK } from "../../../../shared/constants";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.github}>
          <a href={GITHUB_LINK} target="_blank" rel="noreferrer">
            <img src={github} alt="github link" />
          </a>
        </div>
        <div className={styles.year}>2023</div>
        <div className={styles.rsschool}>
          <a href={RSSCHOOL_LINK}>
            <img src={rsschool} alt="rsschool link" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
