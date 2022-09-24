import { FormLoginButtons, LoginFormContainer, LoginFormInputs, LoginFormLines } from "./LoginForm.style"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import useLoginContext from "../../../../hooks/Login/useLoginContext";

export function LoginForm() {

    const { handleUserLogin, token, loggedName, userName, setUserName, userPass, setUserPass } = useLoginContext();
    
    const navigate = useNavigate();

        const handleDirectUser = () => {
            if (token?.length) {
                navigate(`/list/${loggedName}`)
            } else {
                navigate("/")
            }
        }
    
        useEffect(() => {
           handleDirectUser();
        }, [token])


    return (
        <LoginFormContainer>
            <b>Seja bem vindo!</b>
            <LoginFormLines>
                <div></div>
                <b>Painel de acesso</b>
                <div></div>
            </LoginFormLines>
           
            <LoginFormInputs>
                <TextField value={userName} onChange={e => setUserName(e.target.value)} variant="standard" label="Nome do usuário"/>
                <TextField value={userPass} onChange={e => setUserPass(e.target.value)} variant="standard" label="Senha"/>
            </LoginFormInputs>
            <FormLoginButtons>
                <Button onClick={() => navigate("/register")} variant="contained">Registrar-se</Button>
                <Button onClick={() => handleUserLogin()}variant="contained">Acessar</Button>
            </FormLoginButtons>

        </LoginFormContainer>
    )
}