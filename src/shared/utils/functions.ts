import slugify from "slugify";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";

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

/**
 * Type predicate to narrow an unknown error to `FetchBaseQueryError`
 */
export function isFetchBaseQueryError(
  error: unknown
): error is FetchBaseQueryError {
  return typeof error === "object" && error != null && "status" in error;
}

/**
 * Type predicate to narrow an unknown error to an object with a string 'message' property
 */
export function isErrorWithMessage(
  error: unknown
): error is { message: string } {
  return (
    typeof error === "object" &&
    error != null &&
    "message" in error &&
    typeof (error as any).message === "string"
  );
}
