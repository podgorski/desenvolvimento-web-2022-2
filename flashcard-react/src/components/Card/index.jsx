import { useState } from 'react'
import './style.css'
export default function Card({ content }) {

    const [isOpened, setIsOpened] = useState(false)

    return (
        <div className={isOpened ? 'card card-opened' : 'card'} onClick={() => { setIsOpened(true) }}>
            <div className="content">
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