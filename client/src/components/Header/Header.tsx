import React from "react";

import { Score } from "./Score";
import { HeaderProps } from "./types";

const Header: React.FC<HeaderProps> = ({ sentence, score }) => {
  return (
    <header>
      <h1>{sentence.scrambled}</h1>

      <Score score={score} />
    </header>
  );
};

export { Header };
