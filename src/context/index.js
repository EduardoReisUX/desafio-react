import { HomeContextProvider } from "./home";

const GlobalContext = ({ children }) => {
  return <HomeContextProvider>{children}</HomeContextProvider>;
};

export default GlobalContext;
