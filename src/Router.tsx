import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/defaultLayout";
import { CurricularUnitsListPage } from "./pages/listScreen";
import { LoginPage } from "./pages/loginScreen";
import { RegisterPage } from "./pages/registerScreen";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<LoginPage />}/>
                <Route path="/register" element={<RegisterPage />}/>
                <Route path="/list/:user" element={<CurricularUnitsListPage />}/>
            </Route>

        </Routes>
    )
}