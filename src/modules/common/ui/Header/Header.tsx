import React, { Component } from "react";
import styles from "./Header.module.scss";
import NavigationList from "../../components/NavigationList/NavigationList";
import { ROUTER_CONFIG } from "../../../../shared/routerConfig";

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
            <h2 className={styles.current_page}>{this.locationPath()}</h2>
            <NavigationList links={ROUTER_CONFIG} callback={this.handleNavigationUpdate} />
          </div>
        </div>
      </>
    );
  }
}

export default Header;
