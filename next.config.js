/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // This improves MUI bundle size
  modularizeImports: {
    "@mui/material": {
      transform: "@mui/material/{{member}}",
    },
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
};

module.exports = nextConfig;
