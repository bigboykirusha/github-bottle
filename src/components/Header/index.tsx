import React from "react";
import Sort from "../Sort";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Index: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.choose}>
        <Link to={"/"}>
          <div>Popular</div>
        </Link>
        <Link to={"/battle"}>
          <div>Battle</div>
        </Link>
      </div>
      <Sort />
    </div>
  );
};

export default Index;
