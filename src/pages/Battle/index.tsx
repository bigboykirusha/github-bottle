import React, { useState } from "react";
import FindUser from "../../components/FindUser";
import { battle } from "../../Utils/fetchUsers";
import UserCard from "../../components/UserCard";
import styles from "./Battle.module.scss";

const Battle: React.FC = () => {
  const [players, setPlayers] = useState<string[]>([]);
  const [result, setResult] = useState<any[]>([]);

  const onClickBattle = () => {
    battle(players).then((result) => {
      console.log(result);
      setResult(result);
    });
  };
  return (
    <div>
      {result.length ? (
        <div className={styles.root}>
          <UserCard
            status={"winner"}
            imageUrl={result[0].profile.avatar_url}
            personName={result[0].profile.login}
            followers={result[0].profile.followers}
            score={result[0].score}
          />
          <button onClick={() => setResult([])}>Again</button>
          <UserCard
            status={"loser"}
            imageUrl={result[1].profile.avatar_url}
            personName={result[1].profile.login}
            followers={result[1].profile.followers}
            score={result[1].score}
          />
        </div>
      ) : (
        <div>
          <FindUser setPlayers={setPlayers} />
          <FindUser setPlayers={setPlayers} />
          <button onClick={() => onClickBattle()}>Fight</button>
        </div>
      )}
    </div>
  );
};

export default Battle;
