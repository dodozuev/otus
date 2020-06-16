const userNameKey = "userName";

export const storeUserName = (name: string) => {
  localStorage.setItem(userNameKey, name);
};

export const resetUserName = () => {
  localStorage.setItem(userNameKey, "");
};
