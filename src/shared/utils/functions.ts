import slugify from "slugify";

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
  localStorage.setItem("accessToken", token);
}

export function getTokenFromLocalStorage() {
  const token = localStorage.getItem("accessToken");
  return token;
}
