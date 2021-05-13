export const TOKEN_AUTH = localStorage.getItem("token");

export const isAuth = () => localStorage.getItem(TOKEN_AUTH) !== null;

console.log(isAuth());

export const login = (token) => {
  localStorage.setItem(TOKEN_AUTH, token);
};
