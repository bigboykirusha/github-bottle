import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

type HeaderProps = {
  setPageOpen: React.Dispatch<React.SetStateAction<string>>;
};
const Index: React.FC<HeaderProps> = ({ setPageOpen }) => {
  const [isPopularOpen, setIsPopularOpen] = useState(
    window.location.href.slice(-6)
  );
  return (
    <div className={styles.root}>
      <div className={styles.choose}>
        <Link
          onClick={() => {
            setIsPopularOpen("bottle");
            setPageOpen(window.location.href);
          }}
          to={"/github-bottle"}
        >
          <div className={isPopularOpen !== "battle" ? styles.active : ""}>
            Popular
          </div>
        </Link>
        <Link
          onClick={() => {
            setIsPopularOpen("battle");
            setPageOpen(window.location.href);
          }}
          to={"/battle"}
        >
          <div className={isPopularOpen === "battle" ? styles.active : ""}>
            Battle
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Index;
