import React from "react";

import { HeaderProps } from "./types";

const Header: React.FC<HeaderProps> = ({ sentence }) => {
  return (
    <header className="sentence-box">
      <h1>{sentence.scrambled}</h1>
    </header>
  );
};

const HeaderMemo = React.memo(Header);
export { HeaderMemo };
