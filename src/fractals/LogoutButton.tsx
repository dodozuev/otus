import React from "react";
import { resetUserName } from "./StorageUtils";
import { useCallback } from "react";

interface LogoutButtonProps {
  onNameUpdate: (s: string) => void;
}
export const LogoutButton = (props: LogoutButtonProps) => {
  const logout = useCallback(() => {
    resetUserName();
    props.onNameUpdate("");
  }, []);
  return (
    <button type="submit" onClick={logout}>
      Log out
    </button>
  );
};
