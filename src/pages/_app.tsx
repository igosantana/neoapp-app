import { GlobalStyle } from '@/styles/Globalstyles'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
      <Component {...pageProps} />
      </Provider>
    </>
  )
}
