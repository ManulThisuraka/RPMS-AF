import { setCookie, getCookie, deleteCookie } from "./cookies";
import {
  setLocalStorage,
  getLocalStorage,
  deleteLocalStorage,
} from "./localStorage";

export const setAuthentication = (user) => {
  //setCookie("token", token);
  setLocalStorage("user", user);
};

export const isAuthenticated = () => {
  if (getLocalStorage("user")) {
    return getLocalStorage("user");
  } else {
    return false;
  }
};

export function logout() {
  deleteLocalStorage("user");
}
