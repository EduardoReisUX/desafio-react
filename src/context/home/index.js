import { createContext, useState } from "react";

const DEFAULT_VALUE = {
  state: {},
  setState: () => {},
};

export const HomeContext = createContext(DEFAULT_VALUE);

export const HomeContextProvider = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <HomeContext.Provider value={{ state, setState }}>
      {children}
    </HomeContext.Provider>
  );
};
