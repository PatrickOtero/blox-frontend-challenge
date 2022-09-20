import LoginFormButton from "../../../../components/Button/Button"
import LoginFormInput from "../../../../components/input/input"
import { api } from "../../../../services/axios";
import { FormLoginButtons, LoginFormContainer, LoginFormInputs, LoginFormLines } from "./LoginForm.style"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "react-use";

export function LoginForm() {
    const [token, setToken] = useLocalStorage<string>("Token", "")
    const [loggedName, setLoggedName] = useLocalStorage<string>("UserName", "")
    const [loginData, setLoginData] = useState<any>()
    const [userName, setUserName] = useState<string>()
    const [userPass, setUserPass] = useState<string>()

    const handleUserLogin = async() => {
        const body = {
            username: userName,
            password: userPass,
            institution_id: "22"
        }
        try {
            const response = await api.post('/v2/authentication/login', body);

                setToken(response.data.token)
                setLoggedName(userName)
                setLoginData(response);

                setUserName("");
                setUserPass("");
            } catch (error: any) {
                setLoginData(error.response.data);
            }
        }

        const navigate = useNavigate();

    return (
        <LoginFormContainer>
            <b>Seja bem vindo!</b>
            <LoginFormLines>
                <div></div>
                <b> Painel de acesso</b>
                <div></div>
            </LoginFormLines>
           
            <LoginFormInputs>
                <LoginFormInput value={userName} onChange={(e) => setUserName(e.target.value)}
                label="Nome do usuário" variant="standard" size="medium"
                fontSize="2"/>
                <LoginFormInput value={userPass} onChange={(e) => setUserPass(e.target.value)} label="Senha" variant="standard" size="medium"
                fontSize="2"/>
            </LoginFormInputs>
            <FormLoginButtons>
                <LoginFormButton onClick={() => navigate("/register")} text="Registrar conta" width="20" fontSize="1.6" icon={false} size="large"/>
                <LoginFormButton onClick={() => handleUserLogin()} text="Acessar" width="20" fontSize="1.6" icon={false} size="large"/>
            </FormLoginButtons>

        </LoginFormContainer>
    )
}