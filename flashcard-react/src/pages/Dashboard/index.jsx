import { Link } from 'react-router-dom'
import './style.css'

import { UsuarioContext } from "../../contexts/User";
import { useContext, useEffect, useState } from 'react';

import {
    collection,
    getDocs,
    getFirestore,
    addDoc,
    doc,
    onSnapshot,
    query,
    where
} from "firebase/firestore";
import firebaseApp from "../../services/firebase";

export default function Dashboard() {

    const db = getFirestore(firebaseApp);

    const [cities, setCities] = useState([]);

    const { signOut } = useContext(UsuarioContext);

    useEffect(() => {

        const q = query(collection(db, "cities"), where("name", "==", "Tokyo"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const cities = [];
            querySnapshot.forEach((doc) => {
                cities.push({
                    ...doc.data(),
                    id: doc.id
                });
            });
            setCities([...cities])
            console.log("Current cities in CA: ", cities.join(", "));
        });

        // const handleSelect = async () => {
        //     const querySnapshot = await getDocs(collection(db, "cities"));
        //     let aux = [];
        //     querySnapshot.forEach((doc) => {
        //         // doc.data() is never undefined for query doc snapshots
        //         //console.log(doc.id, " => ", doc.data());
        //         aux.push({
        //             ...doc.data(),
        //             id: doc.id
        //         });
        //     });
        //     //console.log(aux);
        //     setCities([...aux]);
        // };
        // handleSelect();
    }, []);

    const handleAdd = async () => {
        try {
            const docRef = await addDoc(collection(db, "cities"), {
                name: "Tokyo",
                country: "Japan"
            });
            console.log("Document written with ID: ", docRef.id);
        } catch { }
    };


    return (
        <>

            <h1>Dashboard</h1>


            <button
                onClick={() => {
                    handleAdd();
                }}
            >
                adicionar
            </button>

            {cities?.map((city) => (
                <div key={city.id}>
                    <p>{city.id}-{city.name}</p>
                </div>

            ))}


            <div style={{ marginBottom: 15 }}>
                <Link to="/game">game</Link>
            </div>
            <button
                onClick={() => {
                    signOut();
                }}
            >
                Logout
            </button>
        </>
    )
}