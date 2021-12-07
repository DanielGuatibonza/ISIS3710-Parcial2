import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import Main from "./components/Main";
import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json";

let lang = navigator.language || navigator.userLanguage;
let mensajes = null;
if (lang.startsWith("es")) {
  mensajes = localeEsMessages;
} else if (lang.startsWith("en")) {
  mensajes = localeEnMessages;
}

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={lang} messages={mensajes}>
      <Main />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
