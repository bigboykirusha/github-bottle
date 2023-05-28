import React from "react";
import styles from "./MainLayout.module.scss";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
