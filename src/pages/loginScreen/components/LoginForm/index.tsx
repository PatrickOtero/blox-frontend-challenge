import LoginFormButton from "../../../../components/Button/Button"
import LoginFormInput from "../../../../components/input/input"
import { FormLoginButtons, LoginFormContainer, LoginFormInputs, LoginFormLines } from "./LoginForm.style"

export function LoginForm() {
    return (
        <LoginFormContainer>
            <b>Seja bem vindo!</b>
            <LoginFormLines>
                <div></div>
                <b> Painel de acesso</b>
                <div></div>
            </LoginFormLines>
           
            <LoginFormInputs>
                <LoginFormInput label="Nome do usuário" variant="standard" size="medium"
                fontSize="2"/>
                <LoginFormInput label="Senha" variant="standard" size="medium"
                fontSize="2"/>
            </LoginFormInputs>
            <FormLoginButtons>
                <LoginFormButton text="Voltar" width="20" fontSize="1.6" icon={false} size="large"/>
                <LoginFormButton text="Acessar" width="20" fontSize="1.6" icon={false} size="large"/>
            </FormLoginButtons>

        </LoginFormContainer>
    )
}