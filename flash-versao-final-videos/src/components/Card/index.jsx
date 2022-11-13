import { useState } from 'react'

import { GamificationContext } from "../../contexts/Gamification";
import { useContext } from 'react';

import './style.css'
export default function Card({ content }) {


    const { increaseXP, decreaseXP } = useContext(GamificationContext);

    const [isOpened, setIsOpened] = useState(false)

    const handleClick = () => {
        setIsOpened(true)
        Math.random() > 0.5 ? increaseXP() : decreaseXP()
    }

    return (
        <div className={isOpened ? 'card card-opened' : 'card'} onClick={() => {
            handleClick()
        }}>
            <div className="content" >
                <div className="front">
                    {content.open}
                </div>
                <div className="back">
                    {content.hide}
                </div>
            </div>
        </div>
    )
}