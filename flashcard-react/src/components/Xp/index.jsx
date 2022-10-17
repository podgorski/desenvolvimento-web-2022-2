import './style.css'
import { GamificationContext } from "../../contexts/Gamification";
import { useContext } from 'react';

export default function Xp({ total }) {

    const { xp } = useContext(GamificationContext);

    return (
        <div className="xp">{xp}<span>xp</span></div>
    )
}