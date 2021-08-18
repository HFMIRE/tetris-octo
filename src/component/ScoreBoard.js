import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import RefreshIcon from "@material-ui/icons/Refresh";
const ScoreBoard = (props) => {
  return (
    <div>
      <div>Score: {props.score}</div>
      <div>Level: 1</div>
      <PlayArrowIcon className="score-board-button" onClick={(e) => {}} />
      {/* <button className="score-board-button" onClick={(e) => {}}>
        Play
      </button> */}
      <RefreshIcon className="score-board-button" onClick={(e) => {}} />
      {/* <button className="score-board-button" onClick={(e) => {}}>
        Restart
      </button> */}
    </div>
  );
};

export default ScoreBoard;
