import React, { Component } from "react";
import styles from "./Header.module.scss";
import NavigationList from "../../components/NavigationList/NavigationList";
import { ROUTER_CONFIG } from "../../../../shared/routerConfig";
import SearchBar from "../../components/SearchBar/SearchBar";

class Header extends Component {
  locationPath() {
    const { pathname } = window.location;
    if (pathname === "/") return "Home Page";
    if (pathname === "/about") return "About Page";

    return "Page not found";
  }

  handleNavigationUpdate() {
    this.forceUpdate();
  }

  render() {
    return (
      <>
        <div className={styles.header}>
          <div className={styles.wrapper}>
            <span className={styles.current_page}>{this.locationPath()}</span>
            <NavigationList links={ROUTER_CONFIG} callback={this.handleNavigationUpdate} />
            <SearchBar />
          </div>
        </div>
      </>
    );
  }
}

export default Header;
