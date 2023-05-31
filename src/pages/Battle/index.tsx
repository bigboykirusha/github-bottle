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
                className={styles.icon}
                onClick={() => onClickBattle()}
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs></defs>
                <title />
                <g id="Layer_22">
                  <path d="M40,52V50l-5.49-4.8A7.39,7.39,0,0,1,32,39.66V34a4,4,0,0,1,4-4h0a4,4,0,0,1,4,4v2" />
                  <path d="M36,30V26a8,8,0,0,1,8-8H54a8,8,0,0,1,8,8v9.51A20.49,20.49,0,0,1,56,50h0v2" />
                  <rect height="10" width="20" x="38" y="52" />
                  <line x1="36" x2="62" y1="26" y2="26" />
                  <polyline points="38 56 44 56 44 62" />
                  <path d="M24,52V50l5.49-4.8A7.39,7.39,0,0,0,32,39.66V34a4,4,0,0,0-4-4h0a4,4,0,0,0-4,4v2" />
                  <path d="M28,30V26a8,8,0,0,0-8-8H10a8,8,0,0,0-8,8v9.51A20.49,20.49,0,0,0,8,50H8v2" />
                  <rect
                    height="10"
                    transform="translate(32 114) rotate(-180)"
                    width="20"
                    x="6"
                    y="52"
                  />
                  <line x1="28" x2="2" y1="26" y2="26" />
                  <polyline points="26 56 20 56 20 62" />
                  <polyline points="24 15 19 10 26 10 23 4 30 7 32 2 35 7 40 4 38 10 45 10 40 15" />
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
