import React from 'react';

import './Cartao.css';

const Cartao = (props) => {
  const { children, cor, titulo } = props;

  const styles = {
    backgroundColor: cor,
    borderColor: cor,
  };

  return (
    <div className="cartao" style={styles}>
      <h1 className="titulo" style={styles}>{titulo}</h1>
      <div className="conteudo">
        {children}
      </div>
    </div>
  );
}

export default Cartao;
