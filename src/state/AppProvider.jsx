import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

function AppProvider({ children }) {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <AppContext.Provider value={{navToggle, setNavToggle}}>
      {children}
    </AppContext.Provider>
  )
}

export const useNavToggle = () => {
  const { navToggle, setNavToggle } = useContext(AppContext);

  return { navToggle, setNavToggle };
}

export default AppProvider;
