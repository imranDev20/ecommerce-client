import * as React from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "@/shared/configs/theme";
import { CacheAppProps } from "@/shared/types/global";
import RootLayout from "./components/layout";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@/shared/utils/createEmotionCache";
import { Provider } from "react-redux";
import NextNProgress from "nextjs-progressbar";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { wrapper } from "@/shared/redux/store";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

/**
 * The root component that wraps the entire Next.js application.
 *
 * This component sets up the global styles and themes using MUI's `ThemeProvider`,
 * initializes CSS baseline, provides the Emotion cache using `CacheProvider`,
 * and wraps the main content with the `RootLayout` component for consistent layout.
 * It also integrates Redux state management using `Provider` and the configured `store`.
 * It should be placed in the `pages/_app.js` file.
 *
 * @component
 * @param {CacheAppProps} props - The component props.
 * @param {React.ComponentType} props.Component - The current page component to be rendered.
 * @param {EmotionCache} [props.emotionCache] - The Emotion cache for server-side rendering.
 * @param {Object} props.pageProps - The initial page props.
 * @returns {JSX.Element} - The rendered root component.
 */

export function App({ Component, ...rest }: CacheAppProps): JSX.Element {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Complete E-Commerce</title>
        <meta name="description" content="Some example description" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <NextNProgress
              color={theme.palette.primary.main}
              startPosition={0.5}
              stopDelayMs={50}
              height={3}
              showOnShallow={true}
              options={{ easing: "ease-in-out", speed: 400 }}
            />

            <RootLayout>
              <Component {...pageProps} />
            </RootLayout>
          </LocalizationProvider>
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );
}

export default App;
