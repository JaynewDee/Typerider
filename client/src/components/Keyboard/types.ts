import { Dispatch, MutableRefObject, RefObject, SetStateAction } from "react";

export interface BoardProps {
  sentence: any;
  round: number;
  setRound: Dispatch<SetStateAction<number>>;
  scoreDispatch: any;
}

export interface RowProps {
  word: string[];
  id: string[];
  fieldIdx: number;
  rowIdx: number;
  round: number;
  setRound: Dispatch<SetStateAction<number>>;
  scoreDispatch: any;
}

export interface FieldProps {
  letter: string;
  id: [number, number];
  fieldIdx: number;
  rowIdx: number;
  className: string;
  round: number;
  setRound: Dispatch<SetStateAction<number>>;
  scoreDispatch: any;
}

export interface FocusState {
  element: null | HTMLInputElement;
}

export interface LetterProps {
  letter: string;
}

export interface BtnProps {
  round: number;
  setRound: Dispatch<SetStateAction<number>>;
  setSolved: any;
  solved: boolean;
}
