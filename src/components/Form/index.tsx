import FormButton from "../Button/Button"
import FormInput from "../input/input"
import { CpfBirthDate, FormCheckbox, FormContainer, FormInputs } from "./Form.styles"

export function Form() {
    return (
        <FormContainer>
            <b>Quero me cadastrar</b>
            <FormInputs>
                <FormInput label="Nome" />
                <CpfBirthDate>
                    <FormInput label="Cpf" width="36" />
                    <FormInput label="Data de Nascimento" width="36"
                    placeholder="dd/mm/aa"/>
                </CpfBirthDate>
                <FormInput label="E-mail"/>
                <FormInput label="Crie sua senha"/>
                <FormInput label="Confirme sua senha"/>
                <FormCheckbox>
                    <input className="checkbox" type="checkbox" />  
                    <span>Você aceita receber notificações por e-mail?</span>  
                </FormCheckbox>
                
            </FormInputs>
            <FormButton/>

        </FormContainer>
    )
}