import { GlobalStyle } from "@/styles/Globalstyles";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Marvel Store</title>
      </Head>
      <Provider store={store}>
        <GlobalStyle />
        <AnimatePresence mode='wait'>
          <Component {...pageProps} />
        </AnimatePresence>
      </Provider>
    </>
  );
}
