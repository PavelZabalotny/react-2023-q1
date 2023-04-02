import React from "react";
import styles from "./Header.module.scss";
import NavigationList from "@/components/Header/NavigationList/NavigationList";
import { ROUTER_CONFIG } from "@/shared/routerConfig";
import getPageTitle from "@/shared/utils/getPageTitle";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <span className={styles.current_page}>Current Page: {getPageTitle(location.pathname)}</span>
        <NavigationList links={ROUTER_CONFIG} />
      </div>
    </header>
  );
};

export default Header;
