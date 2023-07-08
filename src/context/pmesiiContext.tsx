// MyContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface MyContextData {
  value: any;
  setValue: (newValue: any) => void;
}

const MyContext = createContext<MyContextData | undefined>(undefined);

export const MyContextProvider: React.FC<{ children: any }> = ({ children }) => {
  const [value, setValue] = useState<any>([]);

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};
