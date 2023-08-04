import { AppProps } from "next/app";
import { EmotionCache } from "@emotion/react";

export type Children = {
  children: React.ReactNode;
};

export type CacheAppProps = AppProps & {
  emotionCache?: EmotionCache;
};
