import {useContext} from 'react'
import { createContext } from 'react/cjs/react.development'
import { CreateAuthContext } from '../context/AuthContext'

export const Login = () => {
    const {auth,setAuth, token,setToken} = useContext(CreateAuthContext)
    const CheckLogin = () => {
        if(auth === false ? true : false)
        if(auth === false){
            setToken(100000)
        }else {
            setToken(null);
        }
    }
    return (
        <div>
            <button onClick={() => {CheckLogin();}}>{auth ? "LOGOUT" : "LOGIN"}</button>
            <p>Token:{token === 100000 ? "100000" : null}</p>
        </div>
    )
}

export default Login;