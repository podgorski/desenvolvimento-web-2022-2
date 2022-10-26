import './style.css'
import { Link, useNavigate } from "react-router-dom";


import { UsuarioContext } from "../../contexts/User";
import { useContext } from 'react';

export default function Login() {
    const { signIn } = useContext(UsuarioContext);

    const navigate = useNavigate();

    return (

        <>
            <h1>Login</h1>
            <button
                onClick={() => {
                    signIn(true);
                    navigate("/dashboard");
                }}
            >
                Login
            </button>

            <div>
                <Link to={"/game"}>Ir para o Jogo</Link>
            </div>
            <div>
                <Link to={"/dashboard"}>Ir para Dashboard</Link>
            </div>
        </>
    )
}