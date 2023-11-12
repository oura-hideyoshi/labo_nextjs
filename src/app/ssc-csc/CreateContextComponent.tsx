'use client';

import {ReactNode, createContext} from 'react';

interface Props {
  children: ReactNode;
}

const Provider = createContext({message: 'hi'});

const CreateContextComponent: React.FC<Props> = props => {
  return (
    <div style={{backgroundColor: 'whitesmoke', margin: '8px'}}>
      <Provider.Provider value={{message: 'hi'}}>
        <h2>Im client side component using create context</h2>
        {props.children}
      </Provider.Provider>
    </div>
  );
};

export default CreateContextComponent;
