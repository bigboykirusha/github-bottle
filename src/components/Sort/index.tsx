import React, { useContext } from "react";
import styles from "./Sort.module.scss";
import { SortContext } from "../../context/SortContext";

export const CATEGORIES = ["All", "Python", "JavaScript", "Java", "Go", "C++"];

const Sort: React.FC = () => {
  const { categoryId, setCategoryId, setCurrentPage, setItems } =
    useContext(SortContext);
  const onClickCategory = (i: number) => {
    if (i !== categoryId) {
      setCategoryId(i);
      setCurrentPage(1);
      setItems(Array(0));
    }
  };
  return (
    <div className={styles.categories}>
      <ul>
        {CATEGORIES.map((categoryName, i) => (
          <li
            key={categoryName}
            onClick={() => onClickCategory(i)}
            className={categoryId === i ? styles.active : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sort;
