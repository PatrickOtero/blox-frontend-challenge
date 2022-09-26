import useRegisterContext from "../../../../hooks/Register/useRegisterContext"
import { CpfBirthDate, RegisterFormButtons, RegisterFormCheckbox, RegisterFormContainer, RegisterFormInputs } from "./RegisterForm.styles"
import { TextField, Button, Checkbox } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function RegisterForm() {

    const { handleUserRegister, registerMessage, setRegisterMessage, registerName, registerCpf, registerEmail, registerPass, registerConfirmPass, setRegisterConfirmPass, setRegisterCpf, setRegisterEmail, setRegisterName, setRegisterPass, registerDate, setRegisterDate} = useRegisterContext();

    const navigate = useNavigate();

    useEffect(() => {
        setRegisterMessage({});

        setRegisterCpf("")
        setRegisterConfirmPass("")
        setRegisterDate("")
        setRegisterEmail("")
        setRegisterName("")
        setRegisterPass("")
    }, [])

    return (
        <RegisterFormContainer onSubmit={handleUserRegister}>
          
            {registerMessage.fields && <b className="register-message-top">{registerMessage.fields}</b>}
            {registerMessage.success && <b className="register-message-top">{registerMessage.success}</b>}
            <b>Quero me cadastrar</b>
            <RegisterFormInputs>
                <TextField value={registerName} onChange={(e) => setRegisterName(e.target.value)} variant="outlined" label="Nome"/>
                <CpfBirthDate>
                    <div className="register-input">
                        <TextField value={registerCpf} onChange={(e) => setRegisterCpf(e.target.value)} variant="outlined" label="CPF"/>
                        {registerMessage.cpf && <b className="register-message error-cpf">{registerMessage.cpf}</b>}
                    </div>
                    <TextField value={registerDate} onChange={(e) => setRegisterDate(e.target.value)}
                    variant="outlined" label="" type="date"/>
                </CpfBirthDate>
                <div className="register-input">
                    <TextField value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} variant="outlined" label="E-mail"/>
                    {registerMessage.email && <b className="register-message error-email">{registerMessage.email}</b>}
                </div>
                <TextField value={registerPass} onChange={(e) => setRegisterPass(e.target.value)} variant="outlined" label="Crie sua senha" type="password"/>
                <div className="register-input">
                    <TextField value={registerConfirmPass} onChange={(e) => setRegisterConfirmPass(e.target.value)} variant="outlined" label="Confirme sua senha" type="password"/>
                    {registerMessage.password_confirmation && <b className="register-message error-pass-confirmation">{registerMessage.password_confirmation}</b>}
                </div>
            </RegisterFormInputs>
            <RegisterFormCheckbox>
                <Checkbox sx={{ "& .MuiSvgIcon-root": {fontSize: 28}}} className="checkbox"/>
                <span>Você aceita receber notificações por e-mail?</span>
            </RegisterFormCheckbox>
            <RegisterFormButtons>
                <Button type="submit" variant="contained">Cadastrar</Button>
                <Button onClick={() => navigate("/")} variant="contained">Voltar para o login</Button>
            </RegisterFormButtons>

        </RegisterFormContainer>
    )
}