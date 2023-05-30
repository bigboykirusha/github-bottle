import React from "react";
import styles from "../PopularCard/PopularCard.module.scss";

type UserCardProps = {
  status: string;
  imageUrl: string;
  personName: string;
  followers: number;
  score: number;
};
const UserCard: React.FC<UserCardProps> = ({
  status,
  imageUrl,
  followers,
  score,
  personName,
}) => {
  return (
    <div className={styles.card}>
      <div>{status}</div>
      <img src={imageUrl} alt="avatar" />
      <div>User: {personName}</div>
      <div>Followers: {followers}</div>
      <div>Score: {score}</div>
    </div>
  );
};

export default UserCard;
