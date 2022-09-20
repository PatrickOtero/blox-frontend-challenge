import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { DefaultLayout } from "./layouts/defaultLayout";
import { CurricularUnitsListPage } from "./pages/listScreen";
import { LoginPage } from "./pages/loginScreen";
import { RegisterPage } from "./pages/registerScreen";

export function Router() {
    const [loggedToken, setLoggedToken ] = useState<any>(localStorage.getItem("Token"))

    const navigate = useNavigate()

    const handleDirectUser = () => {
        const token = localStorage.getItem("Token");
        console.log(token);

        const loggedUserName = localStorage.getItem("UserName")

        if (token?.length) {
            navigate(`/list/${loggedUserName}`)
        } else {
            navigate("/")
        }
    }

    useEffect(() => {
       handleDirectUser();
    }, [loggedToken])

    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<LoginPage />}/>
                <Route path="/register" element={<RegisterPage />}/>
            </Route>
            <Route path="/list/:user" element={<CurricularUnitsListPage />}/>
        </Routes>
    )
}