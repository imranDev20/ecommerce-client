import { AppProps } from "next/app";
import { EmotionCache } from "@emotion/react";

export type Children = {
  children: React.ReactNode;
};

export type ChildrenElement = {
  children: React.ReactElement;
};

export type CacheAppProps = AppProps & {
  emotionCache?: EmotionCache;
};
