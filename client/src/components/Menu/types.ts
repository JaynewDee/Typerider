import React, { SetStateAction } from "react";

export interface MenuProps {
  setRound: React.Dispatch<SetStateAction<number>>;
  mode: string;
  setMode: React.Dispatch<SetStateAction<string>>;
}
