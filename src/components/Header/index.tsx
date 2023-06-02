import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Index: React.FC = () => {
  const [isPopularOpen, setIsPopularOpen] = useState(
    window.location.href.slice(-6)
  );
  return (
    <div className={styles.root}>
      <div className={styles.choose}>
        <Link onClick={() => setIsPopularOpen("bottle")} to={"/github-bottle"}>
          <div className={isPopularOpen === "bottle" ? styles.active : ""}>
            Popular
          </div>
        </Link>
        <Link onClick={() => setIsPopularOpen("battle")} to={"/battle"}>
          <div className={isPopularOpen === "battle" ? styles.active : ""}>
            Battle
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Index;
