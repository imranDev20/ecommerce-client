import slugify from "slugify";
import { User } from "../types/user";

export const slugifyTitle = (title: string): string => {
  return slugify(title, {
    replacement: "-",
    remove: undefined,
    lower: true,
    strict: true,
    locale: "vi", // language code of the locale to use
    trim: true,
  });
};

export function setTokenInLocalStorage(token: string) {
  localStorage.setItem("authToken", token);
}

export function getTokenFromLocalStorage() {
  const token = localStorage.getItem("authToken");
  return token;
}

export function checkLoggedInStatus(user: User | {}) {
  return Object.keys(user).length > 0;
}
