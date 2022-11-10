import { UsuarioContext } from '../../contexts/User';

import { Link, useNavigate } from "react-router-dom";
import { useContext } from 'react';

import { addDoc, collection, getDocs, getFirestore, onSnapshot, query, where } from 'firebase/firestore';
import { useState } from 'react';

import firebaseApp from '../../services/firebase';
import { useEffect } from 'react';
import { async } from '@firebase/util';

export default function Dashboard() {

    const db = getFirestore(firebaseApp)

    const { signOut, user } = useContext(UsuarioContext)

    const [message, setMessage] = useState("")

    const [messages, setMessages] = useState([])

    const navigate = useNavigate();


    useEffect(() => {

        const q = query(collection(db, "messages"), where("room", "==", "flash-01"))

        onSnapshot(q, (querySnapshot) => {
            const aux = []
            querySnapshot.forEach((doc) => {
                console.log(doc.id, doc.data())
                aux.push({
                    id: doc.id,
                    ...doc.data()
                })

            })
            setMessages([...aux])
        })
        // const getMessagesDB = async () => {
        //     const docs = await getDocs(collection(db, "messages"))

        //     const aux = []
        //     docs.forEach((doc) => {
        //         console.log(doc.id, doc.data())
        //         aux.push({
        //             id: doc.id,
        //             ...doc.data()
        //         })

        //     })
        //     setMessages([...aux])
        // }
        // getMessagesDB()
    }, [])


    const handleAdd = async () => {

        const message_json = {
            email: user.email,
            message,
            room: 'flash-01'
        }

        const docref = await addDoc(collection(db, "messages"), message_json)

        //message_json['id'] = docref.id

        //console.log('referencia do doc', docref.id)

        //setMessages([...messages, message_json])
        setMessage("")
    }

    return (
        <>
            <h1>Dashboard</h1>



            <input type="text" value={message} onChange={(e) => { setMessage(e.target.value) }} />

            <button onClick={() => { handleAdd() }}>Enviar</button>

            <div>

                {messages.map((m) => (
                    <div key={m.id}>
                        <p style={{ fontSize: '10px', fontFamily: 'sans-serif' }}>{m.email}</p>
                        <div style={{ borderBottom: '1px solid #ccc', marginBottom: '20px' }} >{m.message}</div>
                    </div>
                ))}
            </div>

            <p>

                <button
                    onClick={() => {
                        signOut()
                        navigate('/login')
                    }}
                >Sair</button>
            </p>

            <div>
                <Link to="/game">Ir para o Jogo</Link>
            </div>

        </>

    )
}