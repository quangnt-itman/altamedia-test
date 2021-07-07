import React, { memo } from "react";

function Child ( props ) {
  console.log( "Child component" );
  // console.log(props);
  // props.showNumber();
  return (
    <div>
      <h3>Child</h3>
    </div>
  );
}

export default memo( Child );
