import React from "react";
import styles from "./CardLoading.module.scss";
import spinner from "@/assets/gif/preloader.gif";

const CardLoading = () => {
  return (
    <div className={styles.loading}>
      <img src={spinner} alt="Loading" />
    </div>
  );
};

export default CardLoading;
