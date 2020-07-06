import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { FractalWindow } from "./modules/FractalMenu/FractalWindow";
import { LoginModal } from "./modules/Login/LoginModal";
import { LoginScreen } from "./modules/Login/LoginScreen";
import { LoginStatus } from "./modules/Login/reducers";
import { LogoutButton } from "./modules/Login/LogoutButton";
import { NoMatchScreen } from "./NoMatchScreen";
import React from "react";
import { RootState } from "./store";
import { useSelector } from "react-redux";

export const MainScreen = () => {
  const state = useSelector((state: RootState) => state.login);
  if (state.status !== LoginStatus.LoggedIn) return <LoginModal />;
  return (
    <>
      <h3>Hello, {state.name}</h3>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/fractal">Fractal</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login">
            <LoginScreen />
          </Route>
          <Route path="/fractal" render={() => <FractalWindow />} />
          <Route path="*">
            <NoMatchScreen />
          </Route>
        </Switch>
      </Router>
      <LogoutButton />
    </>
  );
};
