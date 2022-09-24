import { useState } from 'react'
import { useLocalStorage } from 'react-use'
import { api } from '../../services/axios'

const useLoginContextProvider = () => {
    const [token, setToken, removeToken] = useLocalStorage<string>("Token", "")
    const [userName, setUserName] = useState<string>()
    const [userPass, setUserPass] = useState<string>()
    const [ loggedName, setLoggedName, removeLoggedName ] = useLocalStorage<string>("UserName", "")

  const handleUserLogin = async() => {
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
        } catch (error: any) {
            console.log(error.response.data);
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
    removeLoggedName
  }
}

export default useLoginContextProvider