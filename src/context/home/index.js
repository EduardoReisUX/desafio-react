/* import { createContext, useState, useEffect } from "react";
import GetData from "../../services/hooks";

const DEFAULT_VALUE = {
  state: {},
  setState: () => {},
};

export const HomeContext = createContext(DEFAULT_VALUE);

export const HomeContextProvider = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  const callGetData = async () => {
    const response = await GetData();
    setState({ response });
  }

  useEffect(() => {
    callGetData();
  }, []);

  return (
    <HomeContext.Provider value={{ state, setState }}>
      {children}
    </HomeContext.Provider>
  );
};
 */

import { createContext, useState, useEffect } from "react";
import GetData from "../../services/hooks";

export const HomeContext = createContext();

export const HomeContextProvider = ({ children }) => {
  const [serverData, setServerData] = useState([]);
  const [loading, setLoading] = useState(true);

  const callGetData = async () => {
    const response = await GetData();
    setServerData(response);
    setLoading(false);
  };

  useEffect(() => {
    callGetData();
  }, []);

  return (
    <HomeContext.Provider value={{ serverData, loading }}>
      {children}
    </HomeContext.Provider>
  );
};
