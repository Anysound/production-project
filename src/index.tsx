import { someFn } from "./test";
import process from "process";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
//import { ThemeProvider } from "./app/providers/ThemeProvider/ui/ThemeProvider";
import { App } from "app/App";
import { ThemeProvider } from "app/providers/ThemeProvider";
someFn(3);

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.querySelector("#root")
);
