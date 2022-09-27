import { useState } from 'react'
import { IRegisterMessages } from '../../@Types/context/context'
import { api } from '../../services/axios'
import useLoginContext from '../Login/useLoginContext'

const useRegisterContextProvider = () => {
    const [ registerName, setRegisterName ] = useState<any>()
    const [ registerCpf, setRegisterCpf ] = useState<any>()
    const [ registerDate, setRegisterDate ] = useState<any>()
    const [ registerEmail, setRegisterEmail ] = useState<any>()
    const [ registerPass, setRegisterPass ] = useState<any>()
    const [ registerConfirmPass, setRegisterConfirmPass ] = useState<any>()

    const [registerMessage, setRegisterMessage ] = useState<IRegisterMessages>({})

    
    const { setLoading } = useLoginContext();

    const handleUserRegister = async(e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault()

        setRegisterMessage({})
        setLoading(true)


        if (!registerName || !registerEmail || !registerPass || !registerConfirmPass || !registerCpf || !registerDate) {
            setRegisterMessage({ fields: "Todos os campos são obrigatórios"})

            setLoading(false)
            return
        }

        const body = {
            institution_id: "22",
            name: registerName,
            username: registerName,
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

            setRegisterMessage(response.data)
            setRegisterName("");
            setRegisterCpf("");
            setRegisterDate("");
            setRegisterEmail("");
            setRegisterPass("");
            setRegisterConfirmPass("")

            setRegisterMessage({ success: "Usuário cadastrado com sucesso"})
           
            setLoading(false)
        } catch (error: any) {
            console.log(error.response)
            setRegisterMessage(error.response.data.errors)
            setLoading(false)
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
    registerMessage,
    setRegisterMessage,
  }
}

export default useRegisterContextProvider