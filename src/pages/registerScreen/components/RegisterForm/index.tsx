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
                <div className="register-input">
                    <TextField size="small" value={registerName} onChange={(e) => setRegisterName(e.target.value)} variant="filled" label="Nome"/>
                </div>
                <CpfBirthDate>
                    <div className="register-input">
                        <TextField size="small" value={registerCpf} onChange={(e) => setRegisterCpf(e.target.value)} variant="filled" label="CPF"/>
                        {registerMessage.cpf && <b className="register-message error-cpf">{registerMessage.cpf}</b>}
                    </div>
                    <div className="register-input">
                    <TextField size="small" value={registerDate} onChange={(e) => setRegisterDate(e.target.value)}
                    variant="filled" label="" type="date"/>
                    </div>
                </CpfBirthDate>
                <div className="register-input">
                    <TextField size="small" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} variant="filled" label="E-mail"/>
                    {registerMessage.email && <b className="register-message error-email">{registerMessage.email}</b>}
                </div>
                <div className="register-input">
                    <TextField size="small" value={registerPass} onChange={(e) => setRegisterPass(e.target.value)} variant="filled" label="Crie sua senha" type="password"/>
                    {registerMessage.password && <b className="register-message error-pass">{registerMessage.password}</b>}
                </div>
                <div className="register-input">
                    <TextField size="small" value={registerConfirmPass} onChange={(e) => setRegisterConfirmPass(e.target.value)} variant="filled" label="Confirme sua senha" type="password"/>
                    {registerMessage.password_confirmation && <b className="register-message error-pass-confirmation">{registerMessage.password_confirmation}</b>}
                </div>
            </RegisterFormInputs>
            <RegisterFormCheckbox>
                <Checkbox sx={{ "& .MuiSvgIcon-root": {fontSize: 28}}} className="checkbox"/>
                <span>Voc?? aceita receber notifica????es por e-mail?</span>
            </RegisterFormCheckbox>
            <RegisterFormButtons>
                <Button type="submit" variant="contained">Cadastrar</Button>
                <Button onClick={() => navigate("/")} variant="contained">Voltar para o login</Button>
            </RegisterFormButtons>

        </RegisterFormContainer>
    )
}