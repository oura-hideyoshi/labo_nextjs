'use client';

import {ReactNode, createContext} from 'react';

interface Props {
  children: ReactNode;
}

const Provider = createContext({message: 'hi'});

const CreateContextComponent: React.FC<Props> = props => {
  return (
    <Provider.Provider value={{message: 'hi'}}>
      {props.children}
    </Provider.Provider>
  );
};

export default CreateContextComponent;
