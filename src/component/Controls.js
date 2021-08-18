import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import LoopIcon from "@material-ui/icons/Loop";
export default function Controls(props) {
  return (
    <div className="controls">
      {/* left */}
      <ArrowBackIcon
        style={{ fontSize: 40 }}
        className="control-button  "
        onClick={(e) => {}}
      />
      {/* right */}
      <ArrowForwardIcon
        style={{ fontSize: 40 }}
        className="control-button"
        onClick={(e) => {}}
      />

      {/* down */}
      <ArrowDownwardIcon
        style={{ fontSize: 40 }}
        className="control-button"
        onClick={(e) => {}}
      />

      {/* rotate */}
      <LoopIcon
        style={{ fontSize: 40 }}
        className="control-button"
        onClick={(e) => {}}
      />
    </div>
  );
}
