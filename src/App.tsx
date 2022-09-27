import { ThemeProvider } from "styled-components"
import { defaultTheme} from "./Styles/themes/default";
import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from "./Styles/global";
import { Router } from "./Router";
import { blackTheme } from "./Styles/themes/blackTheme";
import { PaintBrush } from "phosphor-react";
import { useState } from "react";
import { IconButton } from "@mui/material";

function App() {

  const [ theme, setTheme ] = useState<boolean>(false)

  return (
    <div className="App">
        <ThemeProvider theme={theme ? defaultTheme : blackTheme}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>          
          <GlobalStyle/>
        </ThemeProvider>
        <div onClick={() => setTheme(!theme)} className="theme-changer"><IconButton><PaintBrush color="white" size={45}/></IconButton></div>
    </div>
  );
}

export default App;
