import React, { FC, PropsWithChildren } from "react";
import styles from "./CardLoading.module.scss";
import spinner from "@/assets/gif/preloader.gif";

interface IProps {
  isLoading: boolean;
}

const CardLoading: FC<PropsWithChildren<IProps>> = ({ isLoading, children }) => {
  return (
    <section className={styles.container}>
      {isLoading ? (
        <div className={styles.loading}>
          <img src={spinner} alt="Loading" />
        </div>
      ) : (
        children
      )}
    </section>
  );
};

export default CardLoading;
