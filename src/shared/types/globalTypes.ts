import { AppProps } from "next/app";
import { EmotionCache } from "@emotion/react";

export type ChildrenNode = {
  children: React.ReactNode;
};

export type ChildrenElement = {
  children: React.ReactElement;
};

export type CacheAppProps = AppProps & {
  emotionCache?: EmotionCache;
};

export type NextLinkProps = {
  children: React.ReactNode;
  href: string;
};
