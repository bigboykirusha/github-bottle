import React, { useState } from "react";
import styles from "./MainLayout.module.scss";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { SortContext } from "../context/SortContext";

export type Items = {
  name: string;
  stargazers_count: number;
  forks: number;
  open_issues: number;
  owner: any;
};

const MainLayout = () => {
  const [categoryId, setCategoryId] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState<Items[]>([]);
  return (
    <div className={styles.wrapper}>
      <SortContext.Provider
        value={{
          categoryId,
          setCategoryId,
          currentPage,
          setCurrentPage,
          items,
          setItems,
        }}
      >
        <Header />
        <Outlet />
      </SortContext.Provider>
    </div>
  );
};

export default MainLayout;
