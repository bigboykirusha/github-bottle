import React from "react";
import styles from "./PopularCard.module.scss";

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
      <div>№ {num + 1}</div>
      <img src={imageUrl} alt="avatar" />
      <div>Repository: {repoName}</div>
      <div>User: {personName}</div>
      <div>Stars: {stars}</div>
      <div>Forks: {forks}</div>
      <div>Issues: {issues}</div>
    </div>
  );
};

export default PopularCard;
