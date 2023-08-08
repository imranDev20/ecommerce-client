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
