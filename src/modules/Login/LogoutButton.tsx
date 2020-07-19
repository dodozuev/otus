import React from "react";
import { logoutFromWebsite } from "./thunk";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

export const LogoutButton = () => {
  const dispatch = useDispatch();
  const logout = useCallback(async () => {
    await dispatch(logoutFromWebsite());
  }, []);
  return (
    <button type="submit" onClick={logout}>
      Log out
    </button>
  );
};
