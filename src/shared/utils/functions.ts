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

export function setToken(token: string) {
  localStorage.setItem("accessToken", token);
}

export function getToken() {
  const token = localStorage.getItem("accessToken");
  return token;
}

export function removeToken() {
  localStorage.removeItem("accessToken");
}

export const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: any[]) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
