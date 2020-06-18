import { createAsyncThunk } from "@reduxjs/toolkit";

export const userNameKey = "userName";
export const loginToWebsite = createAsyncThunk(
  "user/login",
  async (name: string) => {
    console.log("came to loginToWebsite");
    console.log("name", name);
    localStorage.setItem(userNameKey, name);
    return name;
  }
);

export const logoutFromWebsite = createAsyncThunk("user/logout", async () =>
  localStorage.setItem(userNameKey, "")
);
