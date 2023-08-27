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
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("accessToken");
    return token;
  }
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

export function calculateTotal(numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

export function getIdFromSlug(productSlug: string) {
  if (productSlug) {
    const slugSplitted = productSlug.split("-");
    const id = slugSplitted[slugSplitted.length - 1];
    return id;
  }
}

export function toTitleCase(input: string): string | undefined {
  if (!input) {
    console.log("Input doesn't exist for title");
    return;
  }
  const smallWords = [
    "a",
    "an",
    "and",
    "as",
    "at",
    "but",
    "by",
    "for",
    "in",
    "of",
    "on",
    "or",
    "the",
    "to",
    "with",
  ];

  return input.toLowerCase().replace(/\w+/g, (word, index) => {
    if (index === 0 || !smallWords.includes(word)) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return word;
    }
  });
}
