import React from "react";
import styles from "../UserCard/UserCard.module.scss";
import userIcon from "../../assets/images/user.svg";
import starIcon from "../../assets/images/star.svg";

type UserCardProps = {
  status: string;
  imageUrl: string;
  personName: string;
  followers?: number;
  score?: number;
  clr?: string;
};
const UserCard: React.FC<UserCardProps> = ({
  status,
  imageUrl = userIcon,
  personName = "Name",
  followers,
  score,
  clr,
}) => {
  return (
    <div className={styles.card}>
      <div style={{ color: clr }} className={styles.place}>
        {status}
      </div>
      <img src={imageUrl} alt="avatar" />
      <div className={styles.title}>{personName.toUpperCase()}</div>
      {followers && (
        <div className={styles.data}>
          <div className={styles.item}>
            <img src={starIcon} alt="person" /> Score: {score}
          </div>
          <div className={styles.item}>
            <img src={userIcon} alt="person" /> {followers} followers
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
