import React from "react";
import Sort from "../Sort";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
  return (
    <div>
      <Sort />
      <Link to={"/battle"}>
        <div>Battle</div>
      </Link>
    </div>
  );
};

export default Index;
