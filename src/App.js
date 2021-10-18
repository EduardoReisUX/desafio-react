import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppRoutes from "./routes";
import GlobalContext from "./context";

const App = () => {
  return (
    <GlobalContext>
      <Router>
        <Switch>
          {AppRoutes.map((route, key) => {
            const { component, path } = route;
            const Component = component;

            return (
              <Route exact={true} path={path} key={key} component={Component} />
            );
          })}
        </Switch>
      </Router>
    </GlobalContext>
  );
};

export default App;
