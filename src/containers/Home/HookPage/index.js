import React, { useCallback, useMemo, useState } from 'react';
import Child from './Child';

function HookPage ( props ) {
  // console.log( props );

  const [ number, setnumber ] = useState( 0 );

  const increaseNumber = () => {
    setnumber( number + 1 );
  };

  // useCallback
  const showNumber = () => {
    console.log( 'number', number );
  };

  const showNumberCallback = useCallback( showNumber, [] );
  // console.log( showNumberCallback );

  // useMemo
  const numberUp = () => {
    let i = 0;
    while ( i < 100 ) i++;
    console.log( i );
    // return i;
  };

  const numberUpMemo = useMemo( numberUp, [] );
  // console.log( numberUpMemo );




  return (
    <div>
      <button onClick={ increaseNumber }>increase number</button>
      <h1>Number { number }</h1>

      <Child
        // showNumber={ showNumberCallback }
        numberUp={ numberUpMemo }
      />
    </div>
  );
}

export default HookPage;

