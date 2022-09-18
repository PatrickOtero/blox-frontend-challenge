import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./Styles/themes/default";
import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from "./Styles/global";
import { Router } from "./Router";

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={defaultTheme}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          
          <GlobalStyle/>
        </ThemeProvider>
    </div>
  );
}

export default App;
