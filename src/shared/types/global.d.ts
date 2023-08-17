import { AppProps } from "next/app";
import { EmotionCache } from "@emotion/react";
import { SvgIconComponent } from "@mui/icons-material";
import { Category } from "./product";
import { Brand } from "./brand";
import React from "react";

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

export type DynamicDrawerProps = {
  anchor: "left" | "top" | "right" | "bottom";
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  children: React.ReactElement;
};

export type ProductsSidebarProps = {
  categories: Category[];
  brands: Brand[];
};

export type DynamicDialogProps = {
  open: boolean;
  title?: string;
  content: React.ReactNode;
  isAction?: boolean;
  handleClose: () => void;
};
