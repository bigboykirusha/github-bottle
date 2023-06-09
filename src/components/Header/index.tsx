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
          <div
            style={{ display: "flex", alignItems: "center" }}
            className={isPopularOpen === "battle" ? styles.active : ""}
          >
            <svg
              style={{
                width: "25px",
                marginRight: "5px",
                fill: `${isPopularOpen === "battle" ? "white" : ""}`,
              }}
              id="Ebene_1"
              version="1.1"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
            >
              <style type="text/css"></style>
              <g>
                <path d="M156,80c-8-16.4-10-24-10-40v-2.6c1.2-0.7,2-2,2-3.4c0-2.2-1.8-4-4-4h-2h-28h-2c-2.2,0-4,1.8-4,4c0,1.5,0.8,2.8,2,3.4V40   c0,16-2,23.6-10,40c-8,16.4-8,32-8,32v104c0,13.3,10.7,24,24,24h24c13.3,0,24-10.7,24-24V112C164,112,164,96.4,156,80z M156,216   c0,8.8-7.2,16-16,16h-24c-8.8,0-16-7.2-16-16V112c0-0.1,0.1-13.9,7.2-28.5C115.8,65.9,118,56.9,118,40v-2h20v2   c0,16.9,2.2,25.9,10.8,43.5c7,14.4,7.2,28.4,7.2,28.5V216z" />
                <path d="M108,28h40c1.1,0,2-0.8,2-1.9v-6.3c0-1-0.7-1.8-1.7-2C145,17.2,137.1,16,128,16c-9.1,0-17,1.2-20.3,1.8c-1,0.2-1.6,1-1.6,2   v6.3C106,27.2,106.9,28,108,28z M142,21.5c0-0.8,0.7-1.5,1.5-1.5h1c0.8,0,1.5,0.7,1.5,1.5v1c0,0.8-0.7,1.5-1.5,1.5h-1   c-0.8,0-1.5-0.7-1.5-1.5V21.5z M134,21.5c0-0.8,0.7-1.5,1.5-1.5h1c0.8,0,1.5,0.7,1.5,1.5v1c0,0.8-0.7,1.5-1.5,1.5h-1   c-0.8,0-1.5-0.7-1.5-1.5V21.5z M126,21.5c0-0.8,0.7-1.5,1.5-1.5h1c0.8,0,1.5,0.7,1.5,1.5v1c0,0.8-0.7,1.5-1.5,1.5h-1   c-0.8,0-1.5-0.7-1.5-1.5V21.5z M118,21.5c0-0.8,0.7-1.5,1.5-1.5h1c0.8,0,1.5,0.7,1.5,1.5v1c0,0.8-0.7,1.5-1.5,1.5h-1   c-0.8,0-1.5-0.7-1.5-1.5V21.5z M110,21.5c0-0.8,0.7-1.5,1.5-1.5h1c0.8,0,1.5,0.7,1.5,1.5v1c0,0.8-0.7,1.5-1.5,1.5h-1   c-0.8,0-1.5-0.7-1.5-1.5V21.5z" />
                <path d="M141.2,106.9c-0.4,0-0.8,0.1-1.2,0.1c-0.4,0-0.8,0-1.1-0.1l-11.4-1.4l-11.3-1.4c-0.1,0-0.1,0-0.2,0s-0.1,0-0.2,0l-7.8,1v3   v1v107c0,4.4,3.6,8,8,8h24c4.4,0,8-3.6,8-8V109v-1v-2c-0.1,0-0.1,0-0.2,0L141.2,106.9z" />
              </g>
            </svg>
            Battle
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Index;
