import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React, { useCallback, useState } from "react";

import { CenteredModal } from "./app.styles";
import { FractalWindow } from "./fractals/components/FractalWindow";
import { LoginScreen } from "./fractals/LoginScreen";
import { LogoutButton } from "./fractals/LogoutButton";
import { NoMatchScreen } from "./NoMatchScreen";

export const App = () => {
  const [currState, setCurrState] = useState({ userName: "" });
  const setUsername = useCallback(
    (s: string) => setCurrState((x) => ({ ...x, userName: s })),
    []
  );

  return currState.userName === "" ? (
    <CenteredModal>
      <LoginScreen name={currState.userName} onNameUpdate={setUsername} />
    </CenteredModal>
  ) : (
    <>
      <h3>Hello, {currState.userName}</h3>
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
            <LoginScreen name={currState.userName} onNameUpdate={setUsername} />
          </Route>
          <Route path="/fractal" render={() => <FractalWindow />} />
          <Route path="*">
            <NoMatchScreen />
          </Route>
        </Switch>
      </Router>
      <LogoutButton onNameUpdate={setUsername} />
    </>
  );
};
