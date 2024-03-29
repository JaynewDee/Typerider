import React from "react";
interface ExitBtnProps {
  setRound: any;
}
const ExitBtn: React.FC<ExitBtnProps> = ({ setRound }) => {
  const handleExit = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setRound(0);
  };
  return (
    <div className="btn-box">
      <button
        className="exit-btn"
        onClick={(e) => {
          handleExit(e);
        }}
      >
        X
      </button>
    </div>
  );
};

export default ExitBtn;
