import { someFn } from "./test";
import process from "process";
import { render } from "react-dom";
import { Counter } from "./components/Counter";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./theme/ThemeProvider";
someFn(3);

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.querySelector("#root")
);
