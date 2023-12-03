import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")).render(
  // yesle Make sure garxa suru ma ako response arko choti ni same audai xa ni vanera tei vara api dui choti call hunxa
  <Provider store={store}>
    <App />
  </Provider>
);


