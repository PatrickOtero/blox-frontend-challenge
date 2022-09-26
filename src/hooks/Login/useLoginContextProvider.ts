import { useState } from 'react'
import { useLocalStorage } from 'react-use'
import { api } from '../../services/axios'

const useLoginContextProvider = () => {
    const [token, setToken, removeToken] = useLocalStorage<string>("Token", "")
    const [userName, setUserName] = useState<string>()
    const [userPass, setUserPass] = useState<string>()
    const [ loggedName, setLoggedName, removeLoggedName ] = useLocalStorage<string>("UserName", "")

    const [loginMessages, setLoginMessages ] = useState<string>("");

    const [ loading, setLoading ] = useState<boolean>(false)

  const handleUserLogin = async() => {
    setLoading(true)
    setLoginMessages("");
    const body = {
        username: userName,
        password: userPass,
        institution_id: "22"
    }
    
    try {
        const response = await api.post('/v2/authentication/login', body);

            setToken(response.data.token)
            setLoggedName(userName)

            setUserName("");
            setUserPass("");

            setLoading(false)

            console.log(response.data)
        } catch (error: any) {
            console.log(error.response)
            if (error.response.status === 400) {
              setLoginMessages("Por favor, preencha algum campo")
            } else if (error.response.status === 404) {
              setLoginMessages("Credenciais incorretas");
            }
            setLoading(false)
        }
    }

  return {
    token,
    setToken,
    removeToken,
    userName,
    setUserName,
    userPass,
    setUserPass,
    handleUserLogin,
    loggedName,
    setLoggedName,
    removeLoggedName,
    loading,
    setLoading,
    loginMessages,
    setLoginMessages
  }
}

export default useLoginContextProvider