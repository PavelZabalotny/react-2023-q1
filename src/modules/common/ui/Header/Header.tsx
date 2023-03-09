import React from "react";
import styles from "./Header.module.scss";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <span>header</span>
        </div>
      </div>
    </>
  );
}

export default Header;
