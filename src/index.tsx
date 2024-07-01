import React from "react";
import ReactDOM from "react-dom";
import OnGoingGames from "./Pages/OnGoingGames/OnGoingGames";

export const App = () => {
  return (
    <div>
      <OnGoingGames />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
