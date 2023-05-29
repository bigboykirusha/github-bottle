import React, { useState } from "react";
import FindUser from "../../components/FindUser";
import { battle } from "../../Utils/fetchUsers";

const Battle: React.FC = () => {
  const [players, setPlayers] = useState<string[]>([]);
  const onClickBattle = () => {
    battle(players).then((players) => {
      console.log(players);
    });
  };
  return (
    <div>
      <FindUser players={players} setPlayers={setPlayers} />
      <FindUser players={players} setPlayers={setPlayers} />
      <button onClick={() => onClickBattle()}>Fight</button>
    </div>
  );
};

export default Battle;
