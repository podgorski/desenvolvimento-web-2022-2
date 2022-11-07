import './style.css'
import { Link, useNavigate } from "react-router-dom";


import { UsuarioContext } from "../../contexts/User";
import { useContext, useEffect, useState } from 'react';

export default function Login() {
    const { signIn, user, loading } = useContext(UsuarioContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const navigate = useNavigate();

    useEffect(() => {
        if (user) navigate("/dashboard");
    }, [user]);

    if (loading) {
        return <p>carregando</p>;
    }

    return (

        <>
            <h1>Login</h1>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button
                onClick={() => {
                    signIn({
                        email,
                        password
                    });
                    navigate("/dashboard");
                }}
            >
                Login
            </button>

            {/* <div>
                <Link to={"/game"}>Ir para o Jogo</Link>
            </div>
            <div>
                <Link to={"/dashboard"}>Ir para Dashboard</Link>
            </div> */}
        </>
    )
}