import React, { Component } from "react";
import styles from "./Header.module.scss";
import NavigationList from "../../components/NavigationList/NavigationList";
import { ROUTER_CONFIG } from "../../../../shared/routerConfig";
import SearchBar from "../../components/SearchBar/SearchBar";
import getPageTitle from "../../../../shared/utils/getPageTitle";

class Header extends Component {
  handleNavigationUpdate() {
    this.forceUpdate();
  }

  render() {
    return (
      <>
        <div className={styles.header}>
          <div className={styles.wrapper}>
            <span className={styles.current_page}>{getPageTitle(ROUTER_CONFIG)}</span>
            <NavigationList links={ROUTER_CONFIG} callback={this.handleNavigationUpdate} />
            <SearchBar />
          </div>
        </div>
      </>
    );
  }
}

export default Header;
