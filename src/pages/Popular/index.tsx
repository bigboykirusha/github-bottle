import React, { useContext, useEffect, useState } from "react";
import { fetchRepos } from "../../Utils/fetchRepos";
import PopularCard from "../../components/PopularCard";
import styles from "./Popular.module.scss";
import { CATEGORIES } from "../../components/Sort";
import Placeholder from "../../components/Placeholder";
import { SortContext } from "../../context/SortContext";

const Popular: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId, setCurrentPage, currentPage, items, setItems } =
    useContext(SortContext);

  useEffect(() => {
    setIsLoading(true);
    fetchRepos(CATEGORIES[categoryId], currentPage)
      .then((data) => setItems((prevState) => [...prevState, ...data.items]))
      .finally(() => {
        setIsLoading(false);
      });
  }, [categoryId, currentPage, setItems]);

  return (
    <>
      <div className={styles.content}>
        {!isLoading
          ? items.map((item, index) => {
              const { name, owner, stargazers_count, forks, open_issues } =
                item;
              const { login, avatar_url } = owner;
              return (
                <PopularCard
                  key={index}
                  num={index}
                  imageUrl={avatar_url}
                  repoName={name}
                  personName={login}
                  stars={stargazers_count}
                  forks={forks}
                  issues={open_issues}
                />
              );
            })
          : [...new Array(8)].map((_, i) => <Placeholder key={i} />)}
      </div>
      <div
        className={styles.more}
        onClick={() => setCurrentPage((prevState) => prevState + 1)}
      >
        Load More
      </div>
    </>
  );
};

export default Popular;
