import React, { FC } from "react";
import { IRouterPath } from "@/interfaces/routerPath.interface";
import { NavLink } from "react-router-dom";
import styles from "./NavigationList.module.scss";

interface IProps {
  links: IRouterPath[];
}

const NavigationList: FC<IProps> = ({ links }) => {
  return (
    <nav>
      <ul className={styles.navigation_list}>
        {links.map((item) => (
          <li key={item.title}>
            <NavLink to={item.path} className={({ isActive }) => (isActive ? "active" : "")}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationList;
