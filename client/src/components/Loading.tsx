import React from "react";

const Loading: React.FC = () => {
  return (
    <div role="alert" className="load-note">
      Fetching data, please wait ...
    </div>
  );
};

export { Loading };
