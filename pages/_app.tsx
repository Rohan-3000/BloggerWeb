import { Provider as ReduxProvider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { store } from "../redux/Store";
import React from "react";
// Styles
import "../styles/MainStyles.scss";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
};

export default MyApp;
