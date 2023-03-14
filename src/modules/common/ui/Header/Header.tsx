import React, { Component } from "react";
import styles from "./Header.module.scss";
import NavigationList from "@/modules/common/components/NavigationList/NavigationList";
import { ROUTER_CONFIG } from "@/shared/routerConfig";
import getPageTitle from "@/shared/utils/getPageTitle";

class Header extends Component {
  handleNavigationUpdate() {
    this.forceUpdate();
  }

  render() {
    return (
      <>
        <div className={styles.header}>
          <div className={styles.wrapper}>
            <span className={styles.current_page}>Current Page: {getPageTitle(ROUTER_CONFIG)}</span>
            <NavigationList links={ROUTER_CONFIG} callback={this.handleNavigationUpdate} />
          </div>
        </div>
      </>
    );
  }
}

export default Header;
