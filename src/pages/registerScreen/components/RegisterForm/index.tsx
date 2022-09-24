import useRegisterContext from "../../../../hooks/Register/useRegisterContext"
import { CpfBirthDate, RegisterFormButtons, RegisterFormCheckbox, RegisterFormContainer, RegisterFormInputs } from "./RegisterForm.styles"
import { TextField, Button, Checkbox } from "@mui/material"
import { useNavigate } from "react-router-dom";

export function RegisterForm() {

    const { handleUserRegister, registerMessage, registerName, registerCpf, registerEmail, registerPass, registerConfirmPass, setRegisterConfirmPass, setRegisterCpf, setRegisterEmail, setRegisterName, setRegisterPass, registerDate, setRegisterDate} = useRegisterContext();

    const navigate = useNavigate();

    return (
        <RegisterFormContainer onSubmit={handleUserRegister}>
            {registerMessage && !registerMessage?.cpf && <b className="register-message">{registerMessage}</b>}
            {registerMessage?.cpf && <b className="register-message">Cpf em formato inválido</b>}
            <b>Quero me cadastrar</b>
            <RegisterFormInputs>
                <TextField value={registerName} onChange={(e) => setRegisterName(e.target.value)} variant="outlined" label="Nome"/>
                <CpfBirthDate>
                    <TextField value={registerCpf} onChange={(e) => setRegisterCpf(e.target.value)} variant="outlined" label="CPF"/>
                    <TextField value={registerDate} onChange={(e) => setRegisterDate(e.target.value)}
                    variant="outlined" label="" type="date"/>
                </CpfBirthDate>
                <TextField value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} variant="outlined" label="E-mail"/>
                <TextField value={registerPass} onChange={(e) => setRegisterPass(e.target.value)} variant="outlined" label="Crie sua senha" type="password"/>
                <TextField value={registerConfirmPass} onChange={(e) => setRegisterConfirmPass(e.target.value)} variant="outlined" label="Confirme sua senha" type="password"/>
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