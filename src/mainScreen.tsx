import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { LoginState, LoginStatus } from "./fractals/store";

import { FractalWindow } from "./fractals/components/FractalWindow";
import { LoginModal } from "./fractals/LoginModal";
import { LoginScreen } from "./fractals/LoginScreen";
import { LogoutButton } from "./fractals/LogoutButton";
import { NoMatchScreen } from "./NoMatchScreen";
import React from "react";
import { useSelector } from "react-redux";

export const MainScreen = () => {
  const state = useSelector((state: LoginState) => state);
  if (state.status === LoginStatus.LoggedOut) return <LoginModal />;
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
