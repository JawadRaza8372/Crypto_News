import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
function RowContent({ children, title, value, term }) {
  return (
    <div className="row">
      <span>
        {children}
        {title}
      </span>
      {value && <span>{value}</span>}
      {term === "true" ? (
        <span>
          <DoneIcon />
        </span>
      ) : term === "false" ? (
        <span>
          <ClearIcon />
        </span>
      ) : null}
    </div>
  );
}

export default RowContent;
