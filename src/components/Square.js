import React from "react";

function Square({id,value,handleClick}) {
  return (
    <button className={"square"} id={`squares${id}`} onClick={()=>handleClick(id)}>
      {value===true?"X":value===false?"O":""}
    </button>
  );
}

export default Square;
