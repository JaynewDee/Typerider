import React from "react";

import { HeaderProps } from "./types";

const Header: React.FC<HeaderProps> = ({ sentence }) => {
  return (
    <header>
      <h1>{sentence.scrambled}</h1>
    </header>
  );
};

export { Header };
