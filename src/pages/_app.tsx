import { AppProps } from "next/app";
import "../styles/global.css";
import { StyleSheetManager } from "styled-components";

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <Component {...pageProps} />
    </StyleSheetManager>
  );
}

export default App;
