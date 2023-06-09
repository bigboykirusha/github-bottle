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
            {players.length === 2 ? (
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => onClickBattle()}
                className={styles.icon}
              >
                <g>
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M7.05 13.406l3.534 3.536-1.413 1.414 1.415 1.415-1.414 1.414-2.475-2.475-2.829 2.829-1.414-1.414 2.829-2.83-2.475-2.474 1.414-1.414 1.414 1.413 1.413-1.414zM3 3l3.546.003 11.817 11.818 1.415-1.414 1.414 1.414-2.474 2.475 2.828 2.829-1.414 1.414-2.829-2.829-2.475 2.475-1.414-1.414 1.414-1.415L3.003 6.531 3 3zm14.457 0L21 3.003l.002 3.523-4.053 4.052-3.536-3.535L17.457 3z" />
                </g>
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
                style={{ fill: "white" }}
              >
                <g>
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zM5 10v10h14V10H5zm6 4h2v2h-2v-2zm-4 0h2v2H7v-2zm8 0h2v2h-2v-2zm1-6V7a4 4 0 1 0-8 0v1h8z" />
                </g>
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
