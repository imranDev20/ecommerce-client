import { AppProps } from "next/app";
import { EmotionCache } from "@emotion/react";
import { SvgIconComponent } from "@mui/icons-material";

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

export type ProfileHeaderProps = {
  title?: string;
  children?: React.ReactNode;
  icon?: SvgIconComponent;
};
