import React, { useState } from "react";
import FindUser from "../../components/FindUser";
import { battle } from "../../Utils/fetchUsers";
import UserCard from "../../components/UserCard";
import styles from "./Battle.module.scss";

const Battle: React.FC = () => {
  const [players, setPlayers] = useState<string[]>([]);
  const [result, setResult] = useState<any[]>([]);
  const [firstUser, setFirstUser] = useState<any>({});
  const [secondUser, setSecondUser] = useState<any>({});
  const classIcon = styles.svg + " " + styles.icon;
  const onClickBattle = () => {
    battle(players).then((result) => {
      console.log(result);
      setResult(result);
    });
  };

  const resetAll = () => {
    setResult([]);
    setFirstUser({});
    setSecondUser({});
    setPlayers([]);
  };
  return (
    <div className={styles.root}>
      {result.length ? (
        <>
          <div className={styles.guide}>
            <div className={styles.find__user}>
              <UserCard
                status={"WINNER"}
                clr={"green"}
                imageUrl={result[0].profile.avatar_url}
                personName={result[0].profile.login}
                followers={result[0].profile.followers}
                score={result[0].score}
              />
            </div>
            <svg
              className={classIcon}
              onClick={() => resetAll()}
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M64,256H34A222,222,0,0,1,430,118.15V85h30V190H355V160h67.27A192.21,192.21,0,0,0,256,64C150.13,64,64,150.13,64,256Zm384,0c0,105.87-86.13,192-192,192A192.21,192.21,0,0,1,89.73,352H157V322H52V427H82V393.85A222,222,0,0,0,478,256Z" />
            </svg>
            <div className={styles.find__user}>
              <UserCard
                status={"LOSER"}
                clr={"red"}
                imageUrl={result[1].profile.avatar_url}
                personName={result[1].profile.login}
                followers={result[1].profile.followers}
                score={result[1].score}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.guide}>
            <div className={styles.find__user}>
              <UserCard
                status={"FIRST PLAYER"}
                imageUrl={firstUser.avatar_url}
                personName={firstUser.login}
              />
              <FindUser
                firstUser={firstUser}
                setFirstUser={setFirstUser}
                setPlayers={setPlayers}
              />
            </div>
            {players.length === 2 && (
              <svg
                onClick={() => onClickBattle()}
                className={styles.icon}
                height="100px"
                version="1.1"
                viewBox="0 0 100 100"
                width="100px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Grid" />
                <g id="_x31_" />
                <g id="_x32_" />
                <g id="_x33_" />
                <g id="_x34_">
                  <path d="M61.9,62.3c-0.4,0-0.8-0.1-1.1-0.4L34.1,35.2c-0.2-0.2-0.4-0.5-0.4-0.8l-2.1-13.1c-0.1-0.5,0.1-1,0.4-1.3   c0.3-0.3,0.8-0.5,1.3-0.4l13.1,2.1c0.3,0,0.6,0.2,0.8,0.4l26.8,26.8c0.3,0.3,0.4,0.7,0.4,1.1s-0.2,0.8-0.4,1.1l-11,11   C62.7,62.2,62.3,62.3,61.9,62.3z M36.6,33.4l25.3,25.3l8.9-8.9L45.4,24.5l-10.5-1.7L36.6,33.4z M64.6,75.6c-0.3,0-0.6-0.1-0.9-0.3   l-9.2-6.7c-0.4-0.3-0.6-0.7-0.6-1.1c0-0.4,0.1-0.9,0.4-1.2l24.1-24.1c0.3-0.3,0.7-0.5,1.2-0.4c0.4,0,0.8,0.3,1.1,0.6l6.7,9.2   c0.4,0.6,0.4,1.4-0.2,1.9L65.7,75.1C65.4,75.4,65,75.6,64.6,75.6z M57.7,67.2l6.8,4.9l19.7-19.7l-4.9-6.8L57.7,67.2z M79.5,75.7   c-0.4,0-0.8-0.1-1.1-0.4l-7.5-7.5c-0.3-0.3-0.4-0.7-0.4-1.1s0.2-0.8,0.4-1.1l6.7-6.7c0.3-0.3,0.7-0.4,1.1-0.4c0,0,0,0,0,0   c0.4,0,0.8,0.2,1.1,0.4l7.5,7.5c0.6,0.6,0.6,1.5,0,2.1l-6.7,6.7C80.3,75.5,79.9,75.7,79.5,75.7z M74.1,66.7l5.4,5.4l4.6-4.6   l-5.4-5.4L74.1,66.7z M84.3,80.5c-0.4,0-0.8-0.1-1.1-0.4l-4.8-4.8c-0.6-0.6-0.6-1.5,0-2.1l6.7-6.7c0.6-0.6,1.5-0.6,2.1,0l4.8,4.8   c0.6,0.6,0.6,1.5,0,2.1L85.3,80C85,80.3,84.7,80.5,84.3,80.5z M81.6,74.2l2.7,2.7l4.6-4.6l-2.7-2.7L81.6,74.2z M38.1,62.3   c-0.4,0-0.8-0.1-1.1-0.4l-11-11c-0.3-0.3-0.4-0.7-0.4-1.1s0.2-0.8,0.4-1.1L38,36.9c0.6-0.6,1.5-0.6,2.1,0l11,11   c0.6,0.6,0.6,1.5,0,2.1L39.2,61.9C38.9,62.2,38.5,62.3,38.1,62.3z M29.2,49.9l8.9,8.9l9.8-9.8L39,40.1L29.2,49.9z M61,39.5   c-0.4,0-0.8-0.1-1.1-0.4l-11-11c-0.6-0.6-0.6-1.5,0-2.1l3.9-3.9c0.2-0.2,0.5-0.4,0.8-0.4l13.1-2.1c0.5-0.1,1,0.1,1.3,0.4   c0.3,0.3,0.5,0.8,0.4,1.3l-2.1,13.1c0,0.3-0.2,0.6-0.4,0.8L62,39C61.7,39.3,61.4,39.5,61,39.5z M52.1,27l8.9,8.9l2.5-2.5l1.7-10.5   l-10.5,1.7L52.1,27z M35.4,75.6c-0.4,0-0.8-0.1-1.1-0.4L12.9,53.6c-0.5-0.5-0.6-1.3-0.2-1.9l6.7-9.2c0.3-0.4,0.7-0.6,1.1-0.6   c0.4,0,0.9,0.1,1.2,0.4l24.1,24.1c0.3,0.3,0.5,0.7,0.4,1.2c0,0.4-0.3,0.8-0.6,1.1l-9.2,6.7C36,75.5,35.7,75.6,35.4,75.6z    M15.9,52.4l19.7,19.7l6.8-4.9L20.8,45.6L15.9,52.4z M20.5,75.7c-0.4,0-0.8-0.1-1.1-0.4l-6.7-6.7c-0.6-0.6-0.6-1.5,0-2.1l7.5-7.5   c0.3-0.3,0.7-0.4,1.1-0.4c0,0,0,0,0,0c0.4,0,0.8,0.2,1.1,0.4l6.7,6.7c0.3,0.3,0.4,0.7,0.4,1.1s-0.2,0.8-0.4,1.1l-7.5,7.5   C21.3,75.5,20.9,75.7,20.5,75.7z M15.9,67.5l4.6,4.6l5.4-5.4l-4.6-4.6L15.9,67.5z M15.7,80.5c-0.4,0-0.8-0.1-1.1-0.4l-6.7-6.7   c-0.6-0.6-0.6-1.5,0-2.1l4.8-4.8c0.6-0.6,1.5-0.6,2.1,0l6.7,6.7c0.6,0.6,0.6,1.5,0,2.1L16.8,80C16.5,80.3,16.1,80.5,15.7,80.5z    M11.1,72.2l4.6,4.6l2.7-2.7l-4.6-4.6L11.1,72.2z" />
                </g>
                <g id="_x35_" />
                <g id="_x36_" />
                <g id="_x37_" />
                <g id="_x38_" />
                <g id="_x39_" />
                <g id="_x31_0" />
                <g id="_x31_1" />
                <g id="_x31_2" />
                <g id="_x31_3" />
                <g id="_x31_4" />
                <g id="_x31_5" />
                <g id="_x31_6" />
                <g id="_x31_7" />
                <g id="_x31_8" />
                <g id="_x31_9" />
                <g id="_x32_0" />
                <g id="_x32_1" />
                <g id="_x32_2" />
                <g id="_x32_3" />
                <g id="_x32_4" />
                <g id="_x32_5" />
              </svg>
            )}
            <div className={styles.find__user}>
              <UserCard
                status={"SECOND PLAYER"}
                imageUrl={secondUser.avatar_url}
                personName={secondUser.login}
              />
              <FindUser
                secondUser={secondUser}
                setSecondUser={setSecondUser}
                setPlayers={setPlayers}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Battle;
