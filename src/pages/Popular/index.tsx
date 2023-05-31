import React, { useContext, useEffect, useState } from "react";
import { fetchRepos } from "../../Utils/fetchRepos";
import PopularCard from "../../components/PopularCard";
import styles from "./Popular.module.scss";
import Sort, { CATEGORIES } from "../../components/Sort";
import Placeholder from "../../components/Placeholder";
import { SortContext } from "../../context/SortContext";
import Error from "../../components/Error";

enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

const Popular: React.FC = () => {
  const [isLoading, setIsLoading] = useState(Status.LOADING);
  const { categoryId, setCurrentPage, currentPage, items, setItems } =
    useContext(SortContext);
  useEffect(() => {
    !items.length && setIsLoading(Status.LOADING);
    fetchRepos(CATEGORIES[categoryId], currentPage)
      .then((data) => {
        setItems((prevState) => [...prevState, ...data.items]);
        setIsLoading(Status.SUCCESS);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(Status.ERROR);
      });
    // eslint-disable-next-line
  }, [categoryId, currentPage]);

  return (
    <div>
      <Sort />
      <div className={styles.content}>
        {isLoading === Status.ERROR ? (
          <Error />
        ) : (
          <>
            {isLoading === Status.LOADING
              ? [...new Array(8)].map((_, i) => <Placeholder key={i} />)
              : items.map((item, index) => {
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
                })}
          </>
        )}
      </div>
      <div
        className={styles.more}
        onClick={() => setCurrentPage((prevState) => prevState + 1)}
      >
        MORE
      </div>
    </div>
  );
};

export default Popular;
