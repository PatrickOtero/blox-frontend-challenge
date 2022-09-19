import RegisterFormButton from "../../../../components/Button/Button"
import RegisterFormInput from "../../../../components/input/input"
import { CpfBirthDate, RegisterFormCheckbox, RegisterFormContainer, RegisterFormInputs } from "./RegisterForm.styles"

export function RegisterForm() {
    return (
        <RegisterFormContainer>
            <b>Quero me cadastrar</b>
            <RegisterFormInputs>
                <RegisterFormInput label="Nome" />
                <CpfBirthDate>
                    <RegisterFormInput label="Cpf" width="36" />
                    <RegisterFormInput label="Data de Nascimento" width="36"
                    placeholder="dd/mm/aa"/>
                </CpfBirthDate>
                <RegisterFormInput label="E-mail"/>
                <RegisterFormInput label="Crie sua senha"/>
                <RegisterFormInput label="Confirme sua senha"/>
                <RegisterFormCheckbox>
                    <input className="checkbox" type="checkbox" />  
                    <span>Você aceita receber notificações por e-mail?</span>  
                </RegisterFormCheckbox>
                
            </RegisterFormInputs>
            <RegisterFormButton text="Cadastrar"/>

        </RegisterFormContainer>
    )
}