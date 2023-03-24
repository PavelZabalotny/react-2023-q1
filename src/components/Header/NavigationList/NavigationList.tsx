import React, { FC } from "react";
import { IRouterPath } from "@/interfaces/routerPath.interface";
import { NavLink } from "react-router-dom";
import styles from "./NavigationList.module.scss";

interface IPropTypes {
  links: IRouterPath[];
  callback: () => void;
}

const NavigationList: FC<IPropTypes> = ({ links, callback: updateHeaderPageTitle }) => {
  return (
    <nav>
      <ul className={styles.navigation_list}>
        {links.map((item) => (
          <li key={item.title}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={updateHeaderPageTitle}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationList;
