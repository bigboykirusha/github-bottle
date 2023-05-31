import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Index: React.FC = () => {
  const [isPopularOpen, setIsPopularOpen] = useState(true);
  return (
    <div className={styles.root}>
      <div className={styles.choose}>
        <Link onClick={() => setIsPopularOpen(true)} to={"/"}>
          <div className={isPopularOpen ? styles.active : ""}>Popular</div>
        </Link>
        <Link onClick={() => setIsPopularOpen(false)} to={"/battle"}>
          <div className={!isPopularOpen ? styles.active : ""}>Battle</div>
        </Link>
      </div>
    </div>
  );
};

export default Index;
