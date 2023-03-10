import React, { FC } from "react";
import { IRouterPath } from "../../../../types/routerPath.interface";
import { Link } from "react-router-dom";
import styles from "./NavigationList.module.scss";

interface IPropTypes {
  links: IRouterPath[];
  callback: () => void;
}

const NavigationList: FC<IPropTypes> = ({ links, callback: updateHeaderPageTitle }) => {
  return (
    <ul className={styles.navigation_list}>
      {links.map((item) => (
        <li key={item.title}>
          <Link to={item.path} onClick={updateHeaderPageTitle}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationList;
