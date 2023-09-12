import React from "react";

function ButtonDownload(props) {
  return (
    <div className="btn-wrap">
      <button onClick={props.addMovies} className="btn-down" type="button">
        Ещё
      </button>
    </div>
  );
}

export default ButtonDownload;
