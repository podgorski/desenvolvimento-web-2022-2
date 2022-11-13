import { useContext } from 'react';
import { Link } from 'react-router-dom'

import { UsuarioContext } from '../../contexts/User';

import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
export default function Login() {



    const { signIn, user } = useContext(UsuarioContext)


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    useEffect(() => {
        if (user) navigate("/dashboard");
    }, [user])


    const handleClick = (e) => {
        signIn(email, password)
        //navigate('/dashboard')
    }

    return (
        <>
            <h1>Login</h1>
            <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
            <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
            <button
                onClick={() => handleClick()}
            >Logar</button>

            <div>
                <Link to="/dashboard">Ir para o Dashboard</Link>
            </div>
            <div>
                <Link to="/game">Ir para o Jogo</Link>
            </div>
        </>

    )
}