import { useState } from 'react'
import { api } from '../../services/axios'

const useRegisterContextProvider = () => {
    const [ registerName, setRegisterName ] = useState<any>()
    const [ registerCpf, setRegisterCpf ] = useState<any>()
    const [ registerDate, setRegisterDate ] = useState<any>()
    const [ registerEmail, setRegisterEmail ] = useState<any>()
    const [ registerPass, setRegisterPass ] = useState<any>()
    const [ registerConfirmPass, setRegisterConfirmPass ] = useState<any>()

    const [registerData, setRegisterData ] = useState<any>()
    const [registerMessage, setRegisterMessage ] = useState<any>("")

    const handleUserRegister = async(e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        setRegisterMessage("");

        if (!registerName || !registerEmail || !registerPass || !registerConfirmPass || !registerCpf || !registerDate) {
            setRegisterMessage("Os campos 'nome', 'email' e os de senha são obrigatórios")
            return
        }

        const body = {
            institution_id: "22",
            name: registerName,
            username: registerEmail,
            email: registerEmail,
            password: registerPass,
            password_confirmation: registerConfirmPass,
            cpf: registerCpf,
            birth_date: registerDate,
            allow_emails: false,
            confirm_success_url:"https://dev.blox.education/public/22/offerings"
        }

        try {
            const response = await api.post('/auth', body
            );

            setRegisterData(response.data)
            setRegisterName("");
            setRegisterCpf("");
            setRegisterDate("");
            setRegisterEmail("");
            setRegisterPass("");
            setRegisterConfirmPass("")

            setRegisterMessage("Usuário cadastrado com sucesso")
           
        } catch (error: any) {
            console.log(error)
            setRegisterMessage(error.response.data.errors)
        }
    }

  return {
    handleUserRegister,
    registerName,
    setRegisterName,
    registerCpf,
    setRegisterCpf,
    registerDate,
    setRegisterDate,
    registerEmail,
    setRegisterEmail,
    registerPass,
    setRegisterPass,
    registerConfirmPass,
    setRegisterConfirmPass,
    registerMessage
  }
}

export default useRegisterContextProvider