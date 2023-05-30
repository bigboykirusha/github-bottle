import React from "react";
import styles from "./PopularCard.module.scss";
import userIcon from "../../assets/images/user.svg";
import starIcon from "../../assets/images/star.svg";
import forksIcon from "../../assets/images/forks.svg";
import issuesIcon from "../../assets/images/issues.svg";
type PopularCardProps = {
  num: number;
  imageUrl: string;
  repoName: string;
  personName: string;
  stars: number;
  forks: number;
  issues: number;
};

const PopularCard: React.FC<PopularCardProps> = ({
  num,
  imageUrl,
  repoName,
  personName,
  stars,
  forks,
  issues,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.place}>#{num + 1}</div>
      <img src={imageUrl} alt="avatar" />
      <div className={styles.title}>{repoName.toUpperCase()}</div>
      <div className={styles.data}>
        <div className={styles.item}>
          <img src={userIcon} alt="person" /> {personName}
        </div>
        <div className={styles.item}>
          <img src={starIcon} alt="person" /> {stars} stars
        </div>
        <div className={styles.item}>
          <img src={forksIcon} alt="person" /> {forks} forks
        </div>
        <div className={styles.item}>
          <img src={issuesIcon} alt="person" /> {issues} open issues
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
