import { Route, Routes } from "react-router-dom";
import { ListContextProvider } from "./contexts/listContext";
import { LoginContextProvider } from "./contexts/loginContext";
import { RegisterContextProvider } from "./contexts/registerContext";
import { DefaultLayout } from "./layouts/defaultLayout";
import { CurricularUnitsListPage } from "./pages/listScreen";
import { LoginPage } from "./pages/loginScreen";
import { RegisterPage } from "./pages/registerScreen";

export function Router() {
    
    return (
        <LoginContextProvider>
            <RegisterContextProvider>
                <Routes>
                    <Route path="/" element={<DefaultLayout/>}>
                        <Route path="/" element={<LoginPage />}/>
                        <Route path="/register" element={<RegisterPage />}/>
                    </Route>
                </Routes>
                <ListContextProvider>
                    <Routes>
                        <Route path="/list/:user" element=
                        {<CurricularUnitsListPage />}/>
                </Routes>
            </ListContextProvider>
            </RegisterContextProvider>
        </LoginContextProvider>
    )
}