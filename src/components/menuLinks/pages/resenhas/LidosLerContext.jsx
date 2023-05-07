import React, { createContext, useState } from 'react';

export const LidosLerContext = createContext();

export function LidosLerProvider(props) {

  const [qtdLidos, setQtdLidos] = useState(130);
  const [qtdLer, setQtdLer] = useState(60);

  return (
    <LidosLerContext.Provider value={{ qtdLidos, setQtdLidos, qtdLer, setQtdLer }}>
      {props.children}
    </LidosLerContext.Provider>
  );
}
