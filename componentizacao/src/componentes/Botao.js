import React from 'react';

const Botoes = (props) => {
  const { setInc, setDec } = props

  return (
    <div>
        <button onClick={setInc}>+</button>
        <button onClick={setDec}>-</button>
    </div>
  );
}

export default Botoes;
