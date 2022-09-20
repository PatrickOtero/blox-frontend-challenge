import RegisterFormButton from "../../../../components/Button/Button"
import RegisterFormInput from "../../../../components/input/input"
import { CpfBirthDate, RegisterFormCheckbox, RegisterFormContainer, RegisterFormInputs } from "./RegisterForm.styles"
import { useState } from "react"
import { api } from "../../../../services/axios"
import { useNavigate } from "react-router-dom"

export function RegisterForm() {
    const [registerData, setRegisterData ] = useState<any>()
    const [registerMessage, setRegisterMessage ] = useState<any>()
    const [userName, setUserName] = useState<string>()
    const [userCpf, setUserCpf] = useState<string>()
    const [userBirthDate, setUserBirthDate] = useState<string>()
    const [userEmail, setUserEmail] = useState<string>()
    const [userPass, setUserPass] = useState<string>()
    const [userConfirmPass, setUserConfirmPass] = useState<string>()

    const handleUserRegister = async(e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        setRegisterMessage("");

        if (!userName || !userEmail || !userPass || !userConfirmPass || !userCpf || !userBirthDate) {
            setRegisterMessage("Os campos 'nome', 'email' e os de senha são obrigatórios")
            return
        }

        const body = {
            institution_id: "22",
            name: userName,
            username: userEmail,
            email: userEmail,
            password: userPass,
            password_confirmation: userConfirmPass,
            cpf: userCpf,
            birth_date: userBirthDate,
            allow_emails:false,
            confirm_success_url:"https://dev.blox.education/public/22/offerings"
        }

        try {
            const response = await api.post('/auth', body
            );

            setRegisterData(response.data)
            setUserName("");
            setUserCpf("");
            setUserBirthDate("");
            setUserEmail("");
            setUserPass("");
            setUserConfirmPass("")

           
        } catch (error: any) {
            console.log(error)
            setRegisterMessage(error.response.data.errors)
        }
    }

    const navigate = useNavigate()

    return (
        <RegisterFormContainer onSubmit={handleUserRegister}>
            {registerMessage && <b className="register-message">{registerMessage.name}</b>}
            <b>Quero me cadastrar</b>
            <RegisterFormInputs>
                <RegisterFormInput value={userName} onChange={(e) => setUserName(e.target.value)} label="Nome" />
                <CpfBirthDate>
                    <RegisterFormInput value={userCpf} onChange={(e) => setUserCpf(e.target.value)} label="Cpf" width="36" />
                    <RegisterFormInput type="date" value={userBirthDate} onChange={(e) => setUserBirthDate(e.target.value)} label="Data de Nascimento" width="36"
                    placeholder="dd/mm/aaaa"/>
                </CpfBirthDate>
                <RegisterFormInput type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} label="E-mail"/>
                <RegisterFormInput type="password" value={userPass} onChange={(e) => setUserPass(e.target.value)} label="Crie sua senha"/>
                <RegisterFormInput type="password" value={userConfirmPass} onChange={(e) => setUserConfirmPass(e.target.value)} label="Confirme sua senha"/>
                <RegisterFormCheckbox>
                    <input className="checkbox" type="checkbox" />  
                    <span>Você aceita receber notificações por e-mail?</span>  
                </RegisterFormCheckbox>
                
            </RegisterFormInputs>
            <div className="register-form-buttons">
            <RegisterFormButton width="20" type="submit" text="Cadastrar"/>
            <RegisterFormButton onClick={() => navigate("/")} icon={false} width="20" type="button" text="Ir para login"/>
            </div>

        </RegisterFormContainer>
    )
}