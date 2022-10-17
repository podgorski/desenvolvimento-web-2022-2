import Card from '../../components/Card'
import './style.css'

import { words } from '../../assets/words'
import { useEffect, useState } from 'react'
import Xp from '../../components/Xp'

const TOTAL_CARDS = 3

export default function Game() {

    const [cards, setCards] = useState([])

    useEffect(() => {
        let random = words.sort(() => Math.random() - 0.5)
        setCards(random.slice(0, TOTAL_CARDS))
    }, [])

    return (
        <>
            <div id="container-topo">
                <div className='titulo'>FlashCards Challenge</div>
                <Xp total={80} />
            </div>
            <div id='caixa-cards'>
                {cards.map((word, idx) => <Card key={idx} content={word} />)}
            </div>

        </>
    )
}